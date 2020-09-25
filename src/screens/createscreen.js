import React,{useContext} from 'react';
import {StyleSheet} from 'react-native';
import Titlecontent from '../components/Titlecontent';

import {Context} from '../context/blogprovider';

const CreateScreen=({navigation})=>{
    const {addBlogPost}=useContext(Context);
   
    return (
        <Titlecontent
        
         onSubmit={(title,blog)=>{
            addBlogPost(title,blog,()=>navigation.navigate('index'))
        }} />
        
        
    );
}

const styles=StyleSheet.create({
    

})

export default CreateScreen;