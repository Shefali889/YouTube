import React from 'react'


const CommentData =[{
    name:"Surya ",
    text: "lorem epsium dollar sit emit",
    replies:[{
        name:"Ashi Jain ",
        text: "lorem epsium dollar sit emit",
        replies:[]
    },{
        name:"Ashmita soni ",
        text: "lorem epsium dollar sit emit",
        replies:[]
    },]
},
{
    name:"Ashiwariya jani ",
    text: "lorem epsium dollar sit emit",
    replies:[{
        name:"Shubham soni ",
        text: "lorem epsium dollar sit emit",
        replies:[]
    },{
        name:"Shivi verman ",
        text: "lorem epsium dollar sit emit",
        replies:[{
            name:"Shubham Soni ",
            text: "lorem epsium dollar sit emit",
            replies:[{
                name:"Ashiwariya jani",
                text: "lorem epsium dollar sit emit",
                replies:[{
                    name:"Ayush  Agrawal ",
                    text: "lorem epsium dollar sit emit",
                    replies:[{
                        name:"Raju Raj",
                        text: "lorem epsium dollar sit emit",
                        replies:[]
                    },]
                },]
            },]
        },]
    },]
},
{
    name:"Ashiwariya jani ",
    text: "lorem epsium dollar sit emit",
    replies:[{
        name:"Ansh ",
        text: "lorem epsium dollar sit emit",
        replies:[]
    },]
},
{
    name:"ramesh ",
    text: "lorem epsium dollar sit emit",
    replies:[{
        name:"Ashiwariya ",
        text: "lorem epsium dollar sit emit",
        replies:[]
    },]
},
{
    name:"Suresh ",
    text: "lorem epsium dollar sit emit",
    replies:[{
        name:"Ramesh ",
        text: "lorem epsium dollar sit emit",
        replies:[]
    },]
},
{
    name:"Shivam Soni ",
    text: "lorem epsium dollar sit emit",
    replies:[{
        name:"Ashiwariya jani ",
        text: "lorem epsium dollar sit emit",
        replies:[]
    },]
},
{
    name:"Ashiwariya jani ",
    text: "lorem epsium dollar sit emit",
    replies:[]
},
{
    name:"Shubham soni ",
    text: "lorem epsium dollar sit emit",
    replies:[]
}]

const Comment=({data})=>{

    const{ name,text,replies} = data;
   
    return(
        <div className='flex px-2 bg-slate-100 rounded-sm my-2'>
            <img  className='h-8 w-8'
            alt="user" src="https://cdn-icons-png.flaticon.com/512/709/709722.png"/>
            <div className='px-2 shadow-sm bg-slate-100'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
            </div>

        </div>
    )
}


const CommentList=({comments})=>{
    return comments.map((comment,index)=>(
            <div><Comment  key={index} data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
                 <CommentList comments={comment.replies}/>
            </div>
             </div>
             )
            )
}

const CommentContainer = () => {
  return (
    <div>
    <h1 className='font font-bold px-4 m-2'>Comments:</h1>
    <CommentList comments={CommentData}/>
    </div>
  )
}

export default CommentContainer
 