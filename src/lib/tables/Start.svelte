<script>
    import { generateInput, generateOutput, Node, Anchor } from "svelvet";


    export let name, id;
  </script>
  
  <Node useDefaults id="vessel" let:grabHandle let:selected >
    <div class="nodeWrapper" use:grabHandle>
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
        Starting point for execution
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
  