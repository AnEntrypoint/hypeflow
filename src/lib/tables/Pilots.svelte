<script>
    import {Node, Anchor} from 'svelvet';
  </script>
 
  <Node  useDefaults id='pilot' position={{x:-300, y:300}}>
    <div class='nodeWrapper'>
      <div class='p_1'>
        <Anchor  i
          id='pilots_anchor1' 
          connections={[['people', 'people_anchor1']]} 
          input  
          direction='west'>
        </Anchor>
      </div>
      <div class='p_2'>
        <Anchor 
          id='pilots_anchor2' 
          connections={[['vessel', 'vessel_anchor1']]} 
          input  
          direction='west'>
        </Anchor>
      </div>
    <div id='container'>
      <div id='heading'>Pilots</div>
      <table id="pilotTable">
          <tr>
              <td>id</td>
              <td>bigint</td> 
              <td>autoincrement()</td>     
          </tr>
          <tr>
             <td>person_id</td>
             <td>bigint</td> 
             <td>not null</td>  
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
        top: 83px;
        left: -16px;
    }
    .p_2{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 10px;
        top: 123px;
        left: -16px;
    }
  
  #heading{
          display: flex;
          justify-content: center;
          background-color: rgb(247, 108, 108);
          padding: 10px;
          font-size: 18px;
          font-weight: 600;
          border-top-right-radius: 8px;
          border-top-left-radius: 8px;
      }
      
    #pilotTable td{
        width: 70px;
          margin: 0px;
          padding: 8px;
          justify-content: space-evenly;
          border-bottom: 1px solid gray;
          border-right: 1px solid gray;
    }
  
    #pilotTable td:last-child {       
          border-right: none;
      }
  </style>