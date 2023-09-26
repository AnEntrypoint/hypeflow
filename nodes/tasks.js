import runCall from '../src/runCall.js'
const tasks = async inp => {
    console.log("RUNNING TASK", inp)
    let pk = inp.pk;
    let task;
    task = JSON.parse(fs.readFileSync("tasks/"+inp.name));
    console.log({task});
    const output = await runCall(0, task, inp.params||{}, Buffer.from(pk, 'hex'), node.run, ()=>{});
    console.log({output});
    return output;
}
export default tasks;
