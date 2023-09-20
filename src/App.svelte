<script>
  import {Svelvet, ThemeToggle} from 'svelvet';
  import Call from './lib/tables/Call.svelte';
  import Start from './lib/tables/Start.svelte';
  import Controls from './Controls.svelte';
  let calls = []
  let fit = console.log;
  const add = ()=>{
    const newcalls = [...calls];
    newcalls.push({
      name:'ipc-name-here',
      params:{json:{
      }},
      before:"console.log('before call');",
      after:"console.log('after call');"
    })
    calls = newcalls
  }
</script>
<body>
  <Svelvet minimap controls>
    <Start id="start" name="Start"/>
    {#each calls as {name, params, before, after}, index}
      <Call id={"call"+index} name={name} params={params} before={before} after={after} x={500+(index*500)} y={0}/>
    {/each}
  
    <ThemeToggle main='dark' alt='light' slot='toggle'/>
  </Svelvet>
  <button on:click|stopPropagation={add} style="position: fixed;left: 1em;top: 1em;font-weight: bolder;padding-bottom: 8px;font-size: 2em;" class="inline-flex items-center justify-center w-8 h-8 mr-2 text-pink-100 transition-colors duration-150 bg-pink-700 rounded-full focus:shadow-outline hover:bg-pink-800">+</button>
  
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