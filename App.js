import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import indexscreen from './src/screens/indexscreen';
import {Provider} from './src/context/blogprovider';
import showscreen from './src/screens/showscreen';
import createscreen from './src/screens/createscreen';
import EditScreen from './src/screens/EditScreen';


const navigator=createStackNavigator({
index:indexscreen,
show:showscreen,
create:createscreen,
edit:EditScreen

},{
  
initialRouteName:'index',
defaultNavigationOptions:{
  title:'blogs',
  headerStyle: {
    backgroundColor: '#CD5C5C',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}
});

const App= createAppContainer(navigator);

export default ()=>{
  return(
    <Provider >
    <App />
    </Provider>
    )
};

const styles=StyleSheet.create({
  
})