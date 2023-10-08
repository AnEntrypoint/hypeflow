<script>
  import { Node, Anchor } from "svelvet";
  import CodeMirror from "svelte-codemirror-editor";
  import { javascript } from "@codemirror/lang-javascript";
  import { json } from "@codemirror/lang-json";
  import { oneDark } from "@codemirror/theme-one-dark";
  import b4a from "b4a";

  export let name,
    before,
    after,
    id,
    x,
    y,
    output,
    stdout,
    stderr,
    result,
    pk,
    remove;
  let isAvailable = 0;
  let timer;
  const checkAvailable = (v) => {
    isAvailable = -1;
    clearTimeout(timer);
    console.log(
      "calling subfetch",
      `http://localhost:3011/vault/getSub/${name}`,
      { key: { publicKey: { pk } } }
    );
    timer = setTimeout(async () => {
      const subFetch = await fetch(
        `http://localhost:3011/vault/getSub/${name}`,
        {
          method: "POST",
          body: JSON.stringify({ key: { publicKey: pk } }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const sub = await subFetch.json();
      console.log({ sub });
      const url = `https://node.lan.247420.xyz/run/key/find/${sub.publicKey}}`;
      const found = await (await fetch(url)).json();
      isAvailable = found ? found.length : 0;
    }, 750);
  };
  checkAvailable();
</script>

<Node useDefaults {id} let:grabHandle let:selected position={{ x, y }}>
  <div class="nodeWrapper" use:grabHandle style="max-width:80em">
    <div class="input">
      <Anchor id="{id}_input" input direction="west" nodeConnect />
    </div>
    <div class="output">
      <Anchor
        id="{id}_object"
        output
        direction="east"
        bind:connections={output}
        nodeConnect
      />
    </div>
    <div id="container" style="max-width:80em">
      <div
        id="heading"
        class="w-full"
        style="background-color:{isAvailable == -1
          ? 'orange'
          : isAvailable
          ? 'green'
          : 'red'}"
      >
        <div>
          <span
            contenteditable
            placeholder="ipcname"
            style="cursor: text;"
            bind:innerHTML={name}
            on:keydown|stopPropagation
            on:click|stopPropagation
            on:input={checkAvailable}
            on:mousedown|stopPropagation
          /><span class="absolute right-8"
            >{isAvailable != -1 ? isAvailable || 0 : "🕐"}</span
          ><span class="absolute right-2"
            ><button
              on:click={() => {
                remove(id.split("-")[1]);
              }}
              ><svg
                height="22px"
                version="1.1"
                style="margin-top:-2px"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 26 26"
                xml:space="preserve"
              >
                <g>
                  <path
                    style="fill:#FFFFFF;height:24px;"
                    d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25   C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0   L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467   L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468   c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467   C19.033,16.725,19.033,17.138,18.78,17.394z"
                  />
                </g>
              </svg></button
            ></span
          >
        </div>
      </div>

      <div
        class="node"
        class:selected
        on:keydown|stopPropagation
        on:click|stopPropagation
        on:mousedown|stopPropagation
        style="outline-style: solid;margin:4px; margin-bottom: 8px;outline-color: yellow;outline-width: 2px;cursor: text;"
      >
        Before:
        <CodeMirror
          bind:value={before}
          placeholder="console.log('before call', params);"
          lang={javascript()}
          theme={oneDark}
        />
      </div>

      <div
        class="node"
        class:selected
        on:keydown|stopPropagation
        on:click|stopPropagation
        on:mousedown|stopPropagation
        style="outline-style: solid;margin:4px; margin-top: 8px;outline-color: orange;outline-width: 2px;cursor: text;"
      >
        After:
        <CodeMirror
          bind:value={after}
          placeholder="console.log('after call', out);"
          lang={javascript()}
          theme={oneDark}
        />
      </div>
      {#if stdout && stdout.length}
        <div
          class="node"
          class:selected
          on:keydown|stopPropagation
          on:click|stopPropagation
          on:mousedown|stopPropagation
          style="outline-style: solid;margin:4px; margin-bottom: 8px;outline-color: green;outline-width: 2px;cursor: text;"
        >
          Logs:
          <CodeMirror
            value={stdout}
            lang={javascript()}
            readonly
            theme={oneDark}
          />
        </div>
      {/if}
      {#if stderr && stderr.length}
        <div
          class="node"
          class:selected
          on:keydown|stopPropagation
          on:click|stopPropagation
          on:mousedown|stopPropagation
          style="outline-style: solid;margin:4px; margin-top: 8px;outline-color: darkred;outline-width: 2px;cursor: text;"
        >
          Error:
          <CodeMirror
            value={stderr}
            lang={javascript()}
            readonly
            theme={oneDark}
          />
        </div>
      {/if}
      {#if output}
        <div
          class="node"
          class:selected
          on:keydown|stopPropagation
          on:click|stopPropagation
          on:mousedown|stopPropagation
          style="outline-style: solid;margin:4px; margin-top: 8px;outline-color: darkred;outline-width: 2px;cursor: text; max-width=500px"
        >
          Result:
          <CodeMirror value={result} lang={json()} readonly theme={oneDark} />
        </div>
      {/if}
    </div>
  </div>
</Node>

<style>
  .nodeWrapper {
    box-sizing: border-box;
    width: fit-content;
    border-radius: 8px;
    height: fit-content;
    position: relative;
    pointer-events: auto;
    display: flex;
    flex-direction: column;
    padding: 1px;
    gap: 10px;
  }

  .input {
    position: absolute;
    left: -16px;
  }

  .output {
    position: absolute;
    right: -14px;
  }

  [contenteditable][placeholder]:empty:before {
    content: attr(placeholder);
    color: grey;
    font-style: italic;
  }

  #heading {
    display: flex;
    justify-content: center;
    background-color: lightblue;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
  }
</style>
