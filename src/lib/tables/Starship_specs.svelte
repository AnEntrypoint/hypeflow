<script>
    import {Node, Anchor} from 'svelvet';
  </script>
 
  <Node  useDefaults id='starship' position={{x:225, y:300}}>
    <div class='nodeWrapper'>
      <div class='p_1'>
        <Anchor 
          id='vessel_anchor1' 
          connections={[['vessel', 'vessel_anchor2']]} 
          input  
          direction='west'>
        </Anchor>
      </div>
    <div id='container'>
      <div id='heading'>Starship Specs</div>
      <table id='starshipTable'>
          <tr>
              <td>id</td>
              <td>bigint</td> 
              <td>autoincrement()</td>     
          </tr>
          <tr>
             <td>hyperdrive_rating</td>
             <td>varchar</td> 
             <td></td>  
          </tr>
          <tr>
            <td>MGLT</td>
            <td>varchar</td> 
            <td></td>  
         </tr>
         <tr>
            <td>vessel_id</td>
            <td>bigint</td> 
            <td>not null</td>  
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
        top: 154px;
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
      
    #starshipTable td{
        width: 70px;
          margin: 0px;
          padding: 8px;
          justify-content: space-evenly;
          border-bottom: 1px solid gray;
          border-right: 1px solid gray;
    }
  
    #starshipTable td:last-child {       
          border-right: none;
      }
  </style>