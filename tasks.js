import fs from 'fs';
import express from 'express';
const router = express.Router()

const init = (node, kp) => {
    const saveTask = async (req, res) => {
        fs.writeFileSync(`tasks/${req.params.name}.json`, JSON.stringify(req.body))
        res.write('{success:true}')
        res.status(200).end()
    }
    const loadTask = async (req, res) => {
        try {
            res.write(fs.readFileSync(`tasks/${req.params.name}.json`))
            res.status(200).end()
        } catch(e) {
            res.write({error:e})
            res.status(500).end()
        }
    }
    const runTask = async (req, res) => {
        console.log('run called');
        var params = req.params;
        let body = req.body, pk = req.params.pk;
        const args = { ...req.params };

        console.log({ body, args })
        delete args.actionname;
        delete args.pk
        try {
            console.log('running', pk, params)

            const lbkey = await node.lbfind(kp, 'tasks');
            const output = await node.runKey(Buffer.from(lbkey[0], 'hex'), { name: req.params.actionname, pk: req.params.pk, params: body || args });
            console.log("output:", output)
            if (typeof output == 'object') res.write(JSON.stringify(output))
            else if (typeof output == 'string') res.write(output)
            res.status(200).end()
        } catch (err) {
            res.write(JSON.stringify(err))
            res.status(500).end()
        }
    }
    router.get("/load/:name", loadTask)
    router.post("/run/:pk/:actionname", runTask)
    router.post("/save/:name", saveTask)
    return router;
}
export default init