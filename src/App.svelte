<script>
  import {Svelvet, ThemeToggle} from 'svelvet';
  import Vessel from './lib/tables/Vessel.svelte';
  import People from './lib/tables/People.svelte';
  import Pilot from './lib/tables/Pilots.svelte';
  import Planet from './lib/tables/Planets.svelte';
  import Species from './lib/tables/Species.svelte';
  import Starship from './lib/tables/Starship_specs.svelte';
  import PeopleFilms from './lib/tables/People_in_films.svelte';
  import SpeciesFilms from './lib/tables/Species_in_films.svelte';
  import SpeciesInFilms from './lib/tables/Species_in_films.svelte';
  import PlanetsInFilms from './lib/tables/Planets_in_films.svelte';
  import VesselsInFilms from './lib/tables/Vessels_in_films.svelte';
  import Films from './lib/tables/Films.svelte';


</script>
<body>
  <Svelvet fitView controls minimap>
    <Vessel/>
    <People/>
    <Pilot/>
    <Planet/>
    <Species/>
    <Starship/>
    <PeopleFilms/>
    <SpeciesInFilms/>
    <PlanetsInFilms/>
    <VesselsInFilms/>
    <Films/>
    <ThemeToggle main='dark' alt='light' slot='toggle'/>
  </Svelvet>
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