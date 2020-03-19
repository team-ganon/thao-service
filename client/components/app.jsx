import React from 'react';
import Host from './host.jsx';
import Neighborhood from './neighborhood.jsx';
import Properties from './properties.jsx';
import ThingsToDo from './thingsToDo.jsx';

function App(props) {
   return (
     <div>
       <div>
         <Host />
       </div>
       <div>
         <Neighborhood data={props.host} api={props.api}/>
       </div>
       <div>
         <Properties data={props.area.properties}/>
       </div>
       <div>
         <ThingsToDo data={props.area.thingsToDo}/>
       </div>
     </div>
   )
}

export default App;