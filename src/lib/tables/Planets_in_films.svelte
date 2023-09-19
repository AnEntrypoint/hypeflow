<script>
    import {Node, Anchor} from 'svelvet';
  </script>

  <Node  useDefaults id='planets_in_films' position={{x:700, y:400}}>   
      <div class='nodeWrapper'>
        <div class='p_1'>
          <Anchor 
            input 
            connections={[['planets', 'planets_anchor2']]}  
            direction="west">
          </Anchor>
        </div>
        <div class='p_2'>
          <Anchor 
            input 
            connections={[['films', 'films_anchor1']]}  
            direction="east">
          </Anchor>
        </div>
        <div id='container'>
         <div id='heading'>Planets in Films</div>
         <table id="planets_filmsTable">
          <tr>
              <td>id</td>
              <td>bigint</td> 
              <td>autoincrement()</td>     
          </tr>
          <tr>
             <td>film_id</td>
             <td>bigint</td> 
             <td>not null</td>  
          </tr>
          <tr>
            <td>planet_id</td>
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
        top: 56px;
        left: -16px;
    }

    .p_2{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 10px;
        top: 90px;
        right: -14px;
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
      
      #planets_filmsTable td{
        width: 70px;
          margin: 0px;
          padding: 8px;
          justify-content: space-evenly;
          border-bottom: 1px solid gray;
          border-right: 1px solid gray;
    }
  
    #planets_filmsTable td:last-child {       
          border-right: none;
      }
  </style>