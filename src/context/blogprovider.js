import createdatacontext from './createdatacontext';
import jsonserver from '../api/jsonserver';


const blogReducer = (state, action) => {
    switch (action.type) {
      case 'get_blogpost':
        return action.payload;
      case 'edit_blogpost':
        return state.map((blogpost)=>{
          return blogpost.id===action.payload.id
          ?action.payload
          :blogpost;
        })
      case 'delete_blogpost':
        return state.filter(blogpost=>blogpost.id !== action.payload);
      case 'add_blogpost':
        return [...state, { id:state.length+1 , title: action.payload.title ,blog: action.payload.blog }];
      default:
        return state;
    }
  };

  const getblogpost=dispatch=>{
    return async()=>{
     const responce= await jsonserver.get('/blogpost');
     dispatch({type:'get_blogpost',payload:responce.data});
    };

  };
  
  const addBlogPost = dispatch => {
    return async (title,blog,callback) => {
      await jsonserver.post('/blogpost',{title,blog})
      //dispatch({ type: 'add_blogpost',payload:{title,blog} });
      if(callback){
      callback();}
    };
  };

  const deleteBlogPost = dispatch => {
    return async (id) => {
      await jsonserver.delete(`/blogpost/${id}`);
      dispatch({ type: 'delete_blogpost' ,payload:id});
    };
  };

  const editblogpost=dispatch=>{
    return async (id,title,blog,callback)=>{

      await jsonserver.put(`/blogpost/${id}`,{title,blog})

      dispatch({
        type:'edit_blogpost',
        payload:{id,title,blog}
      });
      if(callback){
        callback();}
    };

  };
  
  export const { Context, Provider } = createdatacontext(
    blogReducer,
    { addBlogPost,deleteBlogPost,editblogpost,getblogpost },
    []
  );