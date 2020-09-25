import React,{useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Titlecontent from '../components/Titlecontent';
import {Context} from '../context/blogprovider'

const EditScreen=({navigation})=>{
    const {state,editblogpost}=useContext(Context);
    const id=navigation.getParam('id');
    
    const blogPost=state.find(blogPost=> blogPost.id===id);
    return(
        <Titlecontent
        initialValues={{title:blogPost.title,blog:blogPost.blog}}
         onSubmit={(title,blog)=>{
            editblogpost(id,title,blog,()=>navigation.pop());
            
        }} />
    )
}

const styles=StyleSheet.create({

})

export default EditScreen;