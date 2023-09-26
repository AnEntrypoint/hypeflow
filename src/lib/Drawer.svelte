<script>
  import { onMount } from 'svelte';
  import { crypto } from 'hypercore-crypto';
  import { b4a } from 'b4a';
  import { runCall } from './runCall';
  let isOpen = false;
</script>

<div class={`drawer ${isOpen ? 'open' : ''}`}>
  <button on:click={() => isOpen = !isOpen}>
    {isOpen ? 'Close' : 'Open'} Drawer
  </button>

  <!-- Node creation, node naming, saving, loading, running, and naming of tasks elements go here -->
  <button on:click={runCall}>RUN</button>
  <button on:click={save}>SAVE</button>
  <button on:click={load}>LOAD</button>
  <button on:click={test}>TEST</button>
  <input bind:value={taskName} placeholder="Task name" />
  <input bind:value={newIpcCallName} placeholder="new ipc call name" />
  <button on:click={createNode}>+</button>
</div>

<style>
  .drawer {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    background-color: #f8f9fa;
    padding: 1rem;
    overflow-y: auto;
  }

  .drawer.open {
    transform: translateX(0);
  }
</style>
