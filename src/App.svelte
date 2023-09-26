<script>
  import { Svelvet, ThemeToggle } from "svelvet";
  import Call from "./lib/tables/Call.svelte";
  import Drawer from "./lib/Drawer.svelte";
  import crypto from "hypercore-crypto";
  import b4a from "b4a";
  import runCall from "./runCall";
  let seed = "";
  let kp = crypto.keyPair();

  const toHexString = (bytes) => {
    return Array.from(bytes, (byte) => {
      return ("0" + (byte & 0xff).toString(16)).slice(-2);
    }).join("");
  };
  const newSeed = (event) => {
    kp = crypto.keyPair(crypto.data(b4a.from(event.target.value, "utf-8")));
    console.log("new base pk", toHexString(kp.publicKey));
  };
  let calls = [];
  let newName;
  let taskName;
  const add = () => {
    const newcalls = [...calls];
    newcalls.push({
      name: newName,
      params: "{}",
      before: "",
      after: "",
      result: "{}",
      output: [],
      stdout: null,
      stderr: null,
    });
    calls = newcalls;
  };
  const refresh = () => {
    const newcalls = [...calls];
    calls = newcalls;
  };
  const run = (calls) => { 
    const ipcCall = async (pk, name, params) => {
      const url = `https://node.lan.247420.xyz/run/${pk}/${name}`;
      const fetched = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({body:params}),
      });
      return await fetched.json();
    };

    const pk = toHexString(kp.publicKey);
    runCall(0, calls, {}, pk, ipcCall, refresh);
  };
  const runOnServer = async (name) => {
    const pk = toHexString(kp.publicKey);
    const url = `https://node.lan.247420.xyz/task/run/${pk}/${name}`;
    
    const fetched = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body:JSON.stringify({})
    });
    const output = await fetched.json();
    console.log({output})
    calls = output;
  };
  const save = async (incalls, taskName) => {
    const url = `https://node.lan.247420.xyz/task/save/${taskName}`;
    const fetched = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(incalls),
    });
    console.log(calls);
  };
  const load = async (taskName) => {
    const url = `https://node.lan.247420.xyz/task/load/${taskName}`;
    const fetched = await fetch(url, { method: "GET" });
    calls = await fetched.json();
  };
  function handleConnection(event) {
    const outsplit = event.detail.targetNode.id.split("-");
    const outname = outsplit[2];
    const insplit = event.detail.sourceNode.id.split("-");
    const inname = insplit[2];
    const innode = calls[inname];
    const outnode = calls[outname];
    if (
      innode &&
      outnode &&
      !innode.output.includes(outsplit[1] + "-" + outsplit[2])
    )
      innode.output.push(outsplit[1] + "-" + outsplit[2]);
  }
</script>

<body>
  <Svelvet minimap controls on:connection={handleConnection}>
    {#each calls as { name, params, before, after, output, stdout, stderr, result }, index}
      <Call
        id={"call-" + index}
        bind:name
        bind:params
        bind:before
        bind:after
        bind:output
        bind:stdout
        bind:stderr
        bind:result
        x={500 + index * 500}
        y={250}
      />
    {/each}

    <ThemeToggle main="dark" alt="light" slot="toggle" />
  </Svelvet>
  <Drawer>
    <button
      on:click|stopPropagation={() => {
        run(calls);
      }}
      class="inline-flex text-green-100 transition-colors duration-150 bg-green-700 rounded-full focus:shadow-outline hover:bg-green-800"
      >TEST</button
    >
    <input
      placeholder="Task name"
      bind:value={taskName}
      class="rounded-full"
    />
    <button
    on:click|stopPropagation={() => {
      save(calls, taskName);
    }}
      class="inline-flex text-blue-100 transition-colors duration-150 bg-blue-700 rounded-full focus:shadow-outline hover:bg-blue-800"
      >SAVE</button
    >
    <button
      on:click|stopPropagation={() => {
        runOnServer(taskName);
      }}
      class="inline-flex text-green-100 transition-colors duration-150 bg-green-700 rounded-full focus:shadow-outline hover:bg-green-800"
    >
      RUN
    </button>
    <button
    on:click|stopPropagation={() => {
      load(taskName);
    }}
    class="inline-flex text-green-100 transition-colors duration-150 bg-green-700 rounded-full focus:shadow-outline hover:bg-green-800"
  >
    LOAD
  </button>
    <div>
      <div
        class="inline-flex items-center justify-center w-8 h-8 mr-2 text-pink-100 transition-colors duration-150 bg-pink-700 rounded-full focus:shadow-outline hover:bg-pink-800"
      >
        <button
          on:click|stopPropagation={add}
          style="padding-bottom: 8px;font-size: 2em;">+</button
        >
        <input
          placeholder="new ipc call name"
          bind:value={newName}
          class="rounded-full"
        />
      </div>
      <div>
        <input
          placeholder="seed"
          bind:value={seed}
          on:change={newSeed}
          class="rounded-full"
        />
      </div>
    </div>
  </Drawer>
</body>

<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
</style>
