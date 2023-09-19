<script>
    import {Node, Anchor} from 'svelvet';
</script>

<Node  useDefaults id='planets' position={{x:240, y:600}}>
 <div class='nodeWrapper'>
    <div class='p_1'>
        <Anchor 
            id='planets_anchor1' 
            output  
            direction='west'>
        </Anchor>
    </div>
    <div class='p_2'>
        <Anchor 
            id='planets_anchor2' 
            output 
            direction='east'>
        </Anchor>
    </div> 
    <div id=container>
        <div id='heading'>Planets</div>
            <table id='planetsTable'    >
                <tr>
                    <td>id</td>
                    <td>bigint</td>
                    <td>autoincrement()</td>
                 </tr>
                <tr >
                    <td>name</td>
                    <td>varchar</td>
                    <td></td>
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
        top: 56px;
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
   
    #planetsTable td{
        width: 70px;
        margin: 0px;
        padding: 10px;
        justify-content: space-evenly;
        border-bottom: 1px solid gray;
        border-right: 1px solid gray;
    }

    #planetsTable td:last-child {       
        border-right: none;
    }

    
</style>