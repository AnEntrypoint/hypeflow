<script>
    import {Node, Anchor} from 'svelvet';
    import pkey from '../edges/PKEY.svelte';
</script>

<Node  useDefaults id='people' position={{x:-300, y:-300}}>
 <div class='nodeWrapper'>
    <div class='p_1'>
        <Anchor 
            output 
            id='people_anchor1'  
            direction='west'>
        </Anchor>
    </div>
    <div class='p_2'>
        <Anchor 
            output 
            id='people_anchor2'  
            direction='east'>
        </Anchor>
    </div>
    <div class="p_3">
        <Anchor 
            edge={pkey} 
            id='people_anchor3' 
            input 
            connections={[['species', 'species_anchor1']]} 
            direction='east'>
        </Anchor>
    </div>
    <div class='p_4'>
        <Anchor 
            edge={pkey} 
            id='people_anchor4' 
            input 
            connections={[['planets', 'planets_anchor1']]} 
            direction='east'>
        </Anchor>
    </div>
    <div id=container>
        <div id='heading'>People</div>
            <table id='peopleTable'>
                <tr>
                    <td>id</td>
                    <td>bigint</td>
                    <td>autoincrement()</td>
                 </tr>
                <tr >
                    <td>name</td>
                    <td>varchar</td>
                    <td>not null</td>
                </tr>
                <tr >
                    <td>mass</td>
                    <td>varchar</td>
                    <td></td>
                </tr>
                <tr>
                    <td>hair_color</td>
                    <td>varchar</td>
                    <td></td>
                </tr>
                <tr>
                    <td>skin_color</td>
                    <td>varchar</td>
                    <td></td>
                </tr>
                <tr>
                    <td>eye_color</td>
                    <td>varchar</td>
                    <td></td>
                </tr>
                <tr>
                    <td>birth_year</td>
                    <td>varchar</td>
                    <td></td>
                </tr>
                <tr>
                    <td>gender</td>
                    <td>varchar</td>
                    <td></td>
                </tr>
                <tr>
                    <td>species_id</td>
                    <td>bigint</td>
                    <td></td>
                </tr>
                <tr>
                    <td>homeworld_id</td>
                    <td>bigint</td>
                    <td></td>
                </tr>
                <tr>
                    <td>height</td>
                    <td>int</td>
                    <td></td>
                </tr>
            </table>            
    </div>
 </div>
</Node>




<style>
     .nodeWrapper{
      box-sizing: border-box;
      width:fit-content;
      border-radius: 8px;
      height: fit-content;
      position: relative;
      pointer-events: auto;
      display: flex;
      flex-direction: column;
      padding: 1px;
      gap: 10px;
    }

    .p_1{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 10px;
        top: 52px;
        left: -16px;
    }
    .p_2{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 10px;
        top: 50px;
        right: -14px;
    }
    .p_3{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 10px;
        top: 360px;
        right: -14px;
    }
   
    .p_4{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 10px;
        top: 400px;
        right: -14px;
    }
    
    #heading{
        display: flex;
        justify-content: center;
        background-color: lightblue;
        padding: 10px;
        font-size: 18px;
        font-weight: 600;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
   
    #peopleTable td{
        width: 70px;
        margin: 0px;
        padding: 10px;
        justify-content: space-evenly;
        border-bottom: 1px solid gray;
        border-right: 1px solid gray;
    }

    #peopleTable td:last-child {       
        border-right: none;
    }

    
</style>