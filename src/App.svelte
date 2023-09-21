<script>
  import { Svelvet, ThemeToggle } from "svelvet";
  import Call from "./lib/tables/Call.svelte";
  import crypto from "hypercore-crypto";
  import b4a from "b4a";
  let seed = '';
  let kp = crypto.keyPair();

  const newSeed = (event)=>{
    console.log(event.target.value);
    kp = crypto.keyPair(crypto.data(b4a.from(event.target.value, 'utf-8')))
    console.log({kp})
  }
  let calls = [];
  let newName;
  const add = () => {
    const newcalls = [...calls];
    newcalls.push({
      name: newName,
      params: { json: {} },
      before: "console.log('before call');",
      after: "console.log('after call');",
      output: [],
    });
    calls = newcalls;
  };
  const save = () => {
    console.log(calls);
  };
  const toHexString = (bytes) => {
  return Array.from(bytes, (byte) => {
    return ('0' + (byte & 0xff).toString(16)).slice(-2);
  }).join('');
};
  const run = () => {
    const runCall = async (call, input={}) => {
      const pk = toHexString(kp.publicKey);
      const url = `https://node.lan.247420.xyz/run/${pk}/${call.name}`;
      const params = Object.assign({},JSON.stringify(call.params.json));
      
      const fetched = await fetch(url, {method:'POST',body:Object.assign(params, input)});
      const output = await fetched.text();
      console.log({output});
      if (call.output.length) {
        for (let output of call.output) {
          await runCall(calls[output.split("-")[1]], output);
        }
      }
    };
    runCall(calls[0]);
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
    {#each calls as { name, params, before, after, output }, index}
      <Call
        id={"call-" + index}
        bind:name
        bind:params
        bind:before
        bind:output
        {after}
        x={500 + index * 500}
        y={250}
      />
    {/each}

    <ThemeToggle main="dark" alt="light" slot="toggle" />
  </Svelvet>
  <button
    on:click|stopPropagation={save}
    style="position:fixed; left:17em; top:1em; padding:4px; padding-bottom:6px;font-weight: bolder; "
    class="inline-flex text-blue-100 transition-colors duration-150 bg-blue-700 rounded-full focus:shadow-outline hover:bg-blue-800"
    >SAVE</button
  >
  <button
    on:click|stopPropagation={run}
    style="position:fixed; left:20em; top:1em; padding:4px; padding-bottom:6px;font-weight: bolder; "
    class="inline-flex text-green-100 transition-colors duration-150 bg-green-700 rounded-full focus:shadow-outline hover:bg-green-800"
    >RUN</button
  >
  <div style="position: fixed;left: 1em;top: 1em;font-weight: bolder;">
    <div
      class="inline-flex items-center justify-center w-8 h-8 mr-2 text-pink-100 transition-colors duration-150 bg-pink-700 rounded-full focus:shadow-outline hover:bg-pink-800"
    >
      <button
        on:click|stopPropagation={add}
        style="padding-bottom: 8px;font-size: 2em;">+</button
      >
      <input
        style="position: absolute;left: 23px;color:gray;padding-left: 1em;z-index: -1;"
        placeholder="new ipc call name"
        bind:value={newName}
        class="rounded-full"
      />
    </div>
    <div style="position: fixed;right: 1em;top: 1em;font-weight: bolder;">

    <input
    style="position: absolute;right: 23px;color:gray;padding-left: 1em;z-index: -1;"
    placeholder="seed"
    bind:value={seed}
    on:change={newSeed}
    class="rounded-full"
    />
    </div>
</div>
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
