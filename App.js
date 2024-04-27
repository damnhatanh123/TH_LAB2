import React from 'react';
import { Provider } from 'react-redux'; 
import Contacts from './src/Contacts';

//import Store from './store';
//import DrawerNavigator from './2/routes';
//import DrawerNavigator from './3/routes';
//import DrawerNavigator from './4/routes';

const App = () =>{
  return(
      <Contacts/>
      //<Provider store={Store}>
        //<DrawerNavigator/>
      //</Provider>
  )
}

export default App;