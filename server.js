import Keychain from 'keypear'
import express from 'express'
import crypto from 'hypercore-crypto';
import ipc from 'hyper-ipc-secure';
import b4a from 'b4a';
import goodbye from 'graceful-goodbye';

const node = ipc();

global.kp = crypto.keyPair(crypto.data(b4a.from('seedy')));
node.serve(kp, 'testy', inp => {
    console.log({ inp });
    const outp = { ...inp, hello: 'world' }; console.log("OUTPUT", outp); return outp;
});

global.kp = crypto.keyPair(crypto.data(b4a.from('seedy')));
const app = express()
const port = process.env.PORT || 3011
app.use(express.json())
app.use(express.urlencoded())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://svelvet.lan.247420.xyz');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
const runTask = (calls) => {
    const runCall = async (call, input={}) => {
      const pk = toHexString(kp.publicKey);
      const url = `https://node.lan.247420.xyz/run/${pk}/${call.name}`;
      const params = JSON.parse(call.params);
      const paramsWithInput = Object.assign(params, input);
      eval(call.before);
      const fetched = await fetch(url, {
        headers: {"Content-Type": "application/json"},
        method:'POST',
        body:JSON.stringify(paramsWithInput)
      });
      const out = await fetched.json();
      eval(call.after);
      call.stdout = out.stdout;
      call.stderr = out.stderr;
      delete out.stdout;
      delete out.stderr;
      calls=calls;
      console.log(call);
      if (call.output.length) {
        for (let output of call.output) {
          await runCall(calls[output.split("-")[1]], out);
        }
      }
    };
    runCall(calls[0]);
  };

  const task = async (req, res) => {
    var params = req.params;
    let pk = req.params.pk;
    let calls;
    try {
        calls = JSON.parse(req.body);
    } catch (e) {
        body = req.body
    }
    const args = { ...req.params };

    delete args.actionname;
    delete args.pk
    try {
        const a = await node.run(Buffer.from(pk, 'hex'), params.actionname, body || args);
        if(typeof a == 'object') res.write(JSON.stringify(a))
        else if(typeof a == 'string') res.write(a)
        res.status(200).end()
    } catch(err) {
        res.write(JSON.stringify(err))
        res.status(500).end()
    }
}
const run = async (req, res) => {
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
    try {
        const a = await node.run(Buffer.from(pk, 'hex'), params.actionname, body || args);
        if(typeof a == 'object') res.write(JSON.stringify(a))
        else if(typeof a == 'string') res.write(a)
        res.status(200).end()
    } catch(err) {
        res.write(JSON.stringify(err))
        res.status(500).end()
    }
}
app.get("/run/:pk/:actionname", run)
app.post("/run/:pk/:actionname", run)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

goodbye(() => node.destroy())
