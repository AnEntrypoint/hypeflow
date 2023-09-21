import Keychain from 'keypear'
import express from 'express'
import crypto from 'hypercore-crypto';
import ipc from 'hyper-ipc-secure';
import goodbye from 'graceful-goodbye';

const node = ipc();
global.kp = crypto.keyPair();
const app = express()
const port = process.env.PORT || 3011
app.use(express.json())
console.log(node)
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://svelvet.lan.247420.xyz');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
const run = (req, res) => {
    var params = req.params;
    let body, pk = req.params.pk;
    try {
        body = JSON.parse(req.body);
    } catch (e) {
        body = req.body
    }
    const args = { ...req.params };
    delete args.actionname;
    delete args.pk
    node.run(Buffer.from(pk, 'hex'), params.actionname, body || args).then(a => {
        res.write(JSON.stringify(a))
        res.status(200).end()
    }).catch((err) => {
        res.write(JSON.stringify(err))
        res.status(500).end()
    });
}
app.get("/:pk/:actionname", run)
app.post("/run/:pk/:actionname", run)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

goodbye(() => node.destroy())
