<script>
	import { Controls } from 'svelvet';
    export let fit;
    const doFit = (input)=>{
        fit=input;
        console.log({fit})
        return ""
    };
</script>

<Controls let:zoomIn let:zoomOut let:fitView let:unhideAll corner="SW">
  {doFit(fitView)}
  <button class="my-zoom-in" on:click|stopPropagation={zoomIn}/>
  <button on:click|stopPropagation={zoomOut}/>
  <button on:click|stopPropagation={fitView}/>
  <button on:click|stopPropagation={unhideAll}/>
</Controls>

<style>
.my-zoom-in {
    border: none;
    background-color: red;
}
</style>
