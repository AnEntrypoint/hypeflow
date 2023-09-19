<script>
    import {Node, Anchor} from 'svelvet';
  </script>

  <Node  useDefaults id='people_in_films' position={{x:700, y:-200}}>
    <div class='nodeWrapper'>
      <div class='p_1'>
        <Anchor 
          input 
          direction='west' 
          connections={[['people', 'people_anchor2']]}>
        </Anchor>
      </div>
    <div id='container'>
      <div id='heading'>People in Films</div>
      <table id="people_filmsTable">
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
            <td>film_id</td>
            <td>bigint</td> 
            <td>not null</td>  
         </tr>
      </table>
    </div>
    <div class='p_2'>
    <Anchor 
      input 
      direction='east' 
      connections={[['films', 'films_anchor1']]}>
    </Anchor>
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
        top: 120px;
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
      
    #people_filmsTable td{
        width: 70px;
        margin: 0px;
        padding: 8px;
        justify-content: space-evenly;
        border-bottom: 1px solid gray;
        border-right: 1px solid gray;
    }
  
    #people_filmsTable td:last-child {       
        border-right: none;
    }
  </style>