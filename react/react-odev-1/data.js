import axios from "axios";

const userApiUrl="https://jsonplaceholder.typicode.com/users/";
const userPostUrl="https://jsonplaceholder.typicode.com/posts?userId="

async function GetUserAndPostById(user_id){

  try{
      const {data:user}=await axios(`${userApiUrl}${user_id}`);
      const {data:userpost}=await axios(`${userPostUrl}${user_id}`);
      
      return {user,userpost};
  }
  catch(e){
      console.log(e)
  }
 

}



export default GetUserAndPostById;