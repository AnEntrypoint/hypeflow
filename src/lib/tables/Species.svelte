<script>
    import {Node, Anchor} from 'svelvet';
</script>

<Node  useDefaults id='species' position={{x:225, y:-280}}>
 <div class='nodeWrapper'>
    <div class='p_1'>
        <Anchor 
            output 
            id='species_anchor1' 
            direction='west'>
        </Anchor>
    </div>
    <div class='p_2'>
        <Anchor 
            output 
            id='species_anchor2' 
            direction='east'>
        </Anchor>
    </div>
    <div class='p_3'>
        <Anchor 
            input 
            id='species_anchor3' 
            connections={[['planets', 'planets_anchor1']]} 
            direction='west'>
        </Anchor>
    </div>
    <div id=container>
        <div id='heading'>Species</div>
            <table id='speciesTable'>
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
                <tr>
                    <td>classification</td>
                    <td>varchar</td>
                    <td></td>
                </tr>
                <tr>
                    <td>average_height</td>
                    <td>varchar</td>
                    <td></td>
                </tr>
                <tr>
                    <td>average_lifespan</td>
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
                    <td>eye_colors</td>
                    <td>varchar</td>
                    <td></td>
                </tr>
                <tr>
                    <td>language</td>
                    <td>varchar</td>
                    <td></td>
                </tr>
                <tr>
                    <td>homeworld_id</td>
                    <td>bigint</td>
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
        top: 400px;
        left: -16px;
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
   
    #speciesTable td{
        width: 70px;
        margin: 0px;
        padding: 10px;
        justify-content: space-evenly;
        border-bottom: 1px solid gray;
        border-right: 1px solid gray;
    }

    #speciesTable td:last-child {       
        border-right: none;
    }

    
</style>