import React from 'react';
import Host from './host.jsx';
import Neighborhood from './neighborhood.jsx';
import Properties from './properties.jsx';
import ThingsToDo from './thingsToDo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }
  render() {
   return (
     <div>
       <div>
         <Host />
       </div>
       <div>
         <Neighborhood />
       </div>
       <div>
         <Properties />
       </div>
       <div>
         <ThingsToDo />
       </div>
     </div>
   )

  }
}

export default App;