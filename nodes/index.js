import ipc from 'hyper-ipc-secure';
import webhook from './webhook.js';
import testy from './testy.js';
import tasks from './tasks.js';
import goodbye from 'graceful-goodbye'
const init = (kp)=>{
    console.log({kp})
    const node = ipc();
    const serverKey = node.getSub(kp, 'server');
    const webhookKey = node.getSub(kp, 'webhook');
    node.lbserve(webhookKey, serverKey, 'webhook', webhook);
    const testyKey = node.getSub(kp, 'testy');
    node.lbserve(testyKey, serverKey, 'testy', testy);
    const tasksKey = node.getSub(kp, 'tasks');
    node.lbserve(tasksKey, serverKey, 'tasks', tasks);
    goodbye(node.destroy)
    return node;
}
export default init;
