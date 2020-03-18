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
         <Neighborhood />
       </div>
       <div>
         <Properties data={props.data.properties}/>
       </div>
       <div>
         <ThingsToDo data={props.data.thingsToDo}/>
       </div>
     </div>
   )
}

export default App;