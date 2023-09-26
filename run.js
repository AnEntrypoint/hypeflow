import express from 'express';
const router = express.Router()

const init = (node, kp)=>{
    const run = async (req, res) => {
        console.log('run called');
        var params = req.params;
        let body = req.body, pk = req.params.pk;
        const args = { ...req.params };
    
        console.log({body})
        delete args.actionname;
        delete args.pk
        try {
            console.log('running', pk, params)
            const lbkey = await node.lbfind(kp, params.actionname);
            console.log('test');
            const output = await node.runKey(Buffer.from(lbkey[0], 'hex'),  body || args);
    
            console.log("output:", output)
            if (typeof output == 'object') res.write(JSON.stringify(output))
            else if (typeof output == 'string') res.write(output)
            res.status(200).end()
        } catch (err) {
            res.write(JSON.stringify(err))
            res.status(500).end()
        }
    }
    router.get("/:pk/:actionname", run)
    router.post("/:pk/:actionname", run)
    return router;   
}
export default init;