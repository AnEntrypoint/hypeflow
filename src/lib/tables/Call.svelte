<script>
  import { generateInput, generateOutput, Node, Anchor } from "svelvet";
  import { JSONEditor } from "svelte-jsoneditor";
  import CodeMirror from "svelte-codemirror-editor";
  import { javascript } from "@codemirror/lang-javascript";
  import { oneDark } from "@codemirror/theme-one-dark";
  export let params,name, before, after, id, x ,y;
</script>

<Node useDefaults id="vessel" let:grabHandle let:selected  position={{ x, y }} >
  <div class="nodeWrapper" use:grabHandle>
    <div class="input">
      <Anchor
        id="{id}_input"
        output={true}
        input={true}
        direction="west"
        nodeConnect={true}
      />
    </div>
    <div class="output">
      <Anchor
        id="{id}_object"
        output={true}
        input={true}
        direction="east"
        nodeConnect={true}
      />
    </div>
    <div id="container">
      <div id="heading" class="w-full"><span contenteditable style="cursor: text;" bind:innerHTML={name} on:keydown|stopPropagation on:click|stopPropagation on:mousedown|stopPropagation></span></div>
      
      <div
        class="node"
        class:selected
        on:keydown|stopPropagation
        on:click|stopPropagation
        on:mousedown|stopPropagation
        style="outline-style: solid;margin:4px; margin-bottom: 8px;outline-color: darkgreen;outline-width: 2px;cursor: text;"
      >
        Parameters:
        <JSONEditor bind:content={params} readOnly={false} />
      </div>
      <!--div class="node" class:selected on:keydown|stopPropagation on:click|stopPropagation on:mousedown|stopPropagation><CodeMirror bind:value={content} theme={oneDark} /></div-->
      <div
        class="node"
        class:selected
        on:keydown|stopPropagation
        on:click|stopPropagation
        on:mousedown|stopPropagation
        style="outline-style: solid;margin:4px; margin-bottom: 8px;outline-color: darkgreen;outline-width: 2px;cursor: text;"
      >
        Before:
        <CodeMirror bind:value={before} theme={oneDark} />
      </div>

      <div
        class="node"
        class:selected
        on:keydown|stopPropagation
        on:click|stopPropagation
        on:mousedown|stopPropagation
        style="outline-style: solid;margin:4px; margin-top: 8px;outline-color: darkred;outline-width: 2px;cursor: text;"
      >
        After:
        <CodeMirror bind:value={after} theme={oneDark} />
      </div>
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
