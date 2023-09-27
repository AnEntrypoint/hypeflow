![image](https://media.discordapp.net/attachments/999723129687515246/1156380077454540910/Untitled-1.png?ex=6514c25e&is=651370de&hm=5acd7a54f9dc65454e1f39af5f01431577a9d4c3a0b63ec50f73dd541a80652f&=&width=470&height=102)


## running flow charts over p2p

hype:flow is a visual programming platform that leverages the power of peer-to-peer (P2P) technology to enable real-time, collaborative coding. This project aims to revolutionize the way developers work together, breaking geographical boundaries and making teamwork seamless and efficient. With Hypeflow, you can work on your projects with friends or colleagues in real-time, no matter where they are in the world. It's like a digital jam session for coding, allowing you to build amazing things together seamlessly.

## Setup and Installation

1. Clone the repository: `git clone https://github.com/AnEntrypoint/hypeflow.git`
2. Navigate to the project directory: `cd hypeflow`
3. Install the necessary dependencies: `npm install`
4. Start the project: `npm start`

## Usage

Hypeflow can be used for a variety of applications, from building web applications to creating complex data visualizations, all the parts of your programs become remoe functions so while they may all be installed locally, they can be removed and put on another computer without any configuration changes, and without restarting any other parts, any process can also be installed at multiple sites to load balance it (load balancing is mid-implementation, the resource telemetry is not in yet)

Here's a basic example of how to use Hypeflow:

```
#api
node server.js
#gui
node app.js 
```
The GUI of the application should allow you to construct complex tasks using a network oc RPC instructions, that network of nodes represents local or remotely installed remote methods that are called until the entire network of instructions are run, those instructions are called 'tasks'.

You can modify the input (paramms) of any call before it happens using before, and the output of any call (out) before it finishes using after

# Technical details:

When you make a new task, you select it's name and that name becomes a derivitive of your root key (which we call the task key), the private part of that derivitive allows servers to be started, the public part of it allows those servers to be called.
root key + task name = task key

Servers also have an additional key for every task, one that's derived from their own server key, which in turn is derived from the root.
root key + server key + task name = server task key

load balanced servers announce on a DHT network a proof that they own the task key
when calling, that task key is looked up to discover the server key, and in turn call it

## Contribution

We welcome contributions from developers of all skill levels. To contribute to Hypeflow:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Commit your changes
4. Push your changes to your fork
5. Submit a pull request

Please ensure that your code adheres to our coding standards and includes appropriate tests.

## License and Contact Information

Hypeflow is licensed under the MIT License. For any queries or issues, please contact the project maintainers at hypeflow@example.com.

