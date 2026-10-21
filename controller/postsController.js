
    const posts=require("../data/posts");

const GETALLPOSTS =(req, res) => {
  try {
    res.status(200).json({
      success: true,
      body: posts,
      message: "Posts fetched successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message
    });
  }
};


const GETSINGLEPOST =(req , res) => {
      try{
           let postid=Number(req.params.id)
           let postobj=posts.find(post=>post.id===postid)   
           res.status(200).json({
                  success:true,
                  body: postobj,
                  message:"your fetch req is successfull",
           })
      } catch(error){
          res.status(500).json({
            success:false,
            message:"something went wrong",
            error:error.message
          })
        }
      };


  const CREATEPOST= (req , res)=>{
    
       try{  
        // receive data from the postman 
        let { userId, title, body } = req.body;

   
        let newpost={
          userId:userId,
          id:posts.length + 1,
          title:title,
          body:body
        }
     
   
        posts.push(newpost);
        
       res.status(200).json({
             success:true,
             message:"new post created successfully",
             body:newpost
       })
      } catch(error){
       res.status(500).json({
           success:false,
           message:"something went wrong",
           error:error.message
       })
      }
};    


const DELETEPOST=(req,res)=>{
  try{
       let deleteid=Number(req.params.id)
       let deletepost=posts.findIndex(post=>post.id===deleteid)
       if(deletepost==-1){
         return res.status(500).json({
            // success:false,
            message:"object is not available"
          })
       }
              posts.splice(deletepost,1);

       res.status(200).json({
          success:true,
          message:"post deleted successfully",
       })
      } catch(error){
          res.status(500).json({
              success:false,
              message:"something went wrong",
              error:error.message
          })
      }

};


const UPDATEPOST=(req,res)=>{
  try{
          let updateid=Number(req.params.id)
  
           let indexnum= posts.findIndex(post=>post.id===updateid)

           if(indexnum===-1){
            return res.status(404).json({
                  success:false,
                  message:"bject doesnt exist"
              })
           }

          //  let { userId, title, body } = req.body;

           let updatedobj={
                 ...posts[indexnum],
                 ...req.body,
                 id:updateid
           }

           posts[indexnum]=updatedobj

           res.status(201).json({
              success:true,
              message:"updated successfully",
              body:updatedobj
           })
  } 
    catch(error){
            res.status(500).json({
               success:false,
               message:"something went wrong",
               error:error.message
            })
    }
};


module.exports={
      GETALLPOSTS,
      GETSINGLEPOST,
      CREATEPOST,
      DELETEPOST,
      UPDATEPOST
}
