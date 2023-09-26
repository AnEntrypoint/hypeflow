import { newAsyncContext } from "quickjs-emscripten";

const run = async (input) => {
    let stdout = [];
    const context = await newAsyncContext()
    const api = {
        log: (...params)=>{
                params.forEach(a=>typeof a =='string'?stdout.push(a):stdout.push(JSON.stringify(a)))
        }
    };
    const apiHandle = context.newAsyncifiedFunction("api", async (iname, iparams) => {
        const name = context.getString(iname);
        const jparams = context.getString(iparams);
        console.log(jparams)
        let params;
        try {
            params = JSON.parse(jparams);
        } catch(e) {
            params = jparams
        }
        console.log({params});
        const output = await api[name](...params)
        return output;
    })
    apiHandle.consume((fn) => context.setProp(context.global, "api", fn))
    const result = await context.evalCodeAsync(input)
    console.log({result});
    return new Promise(async (resolve) => {
        if (result.error) {
            resolve({ error: context.dump(result.error) })
            result.error.dispose()
        } else {
            const value = context.dump(result.value);
            resolve({ value, stdout:stdout.join('\n') })
            result.value.dispose()
        }
    });
};
export default run;