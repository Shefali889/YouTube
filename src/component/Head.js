import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/AppSlice'
import { YOUTUBE_Search_API } from '../utils/Constants';


const Head = () => {

  const[searchinput,setSearchInput]=useState("");
  const [suggestions, setsuggestion] = useState([]);

  const [showSuggestions,setShowSuggestions]=useState(false);

    

   useEffect(()=>{
    
    const timer= setTimeout(() => 
      getSearchSuggestion() , 200); 

      return () => {
        clearTimeout(timer);
      };
    },[searchinput])

  const getSearchSuggestion= async()=>{
    
   
    const data= await fetch(YOUTUBE_Search_API + searchinput);
    const json=await data.json();
    console.log(json[1]);
    setsuggestion(json[1]);
    
  }

  const dispatch=useDispatch();
const toggleMenuHandler=()=>{
  dispatch(toggleMenu());
}

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='h-7 flex col-span-1 cursor-pointer'>
       <img onClick={() => toggleMenuHandler()} alt='menu' src='https://cdn-icons-png.flaticon.com/512/3917/3917215.png'/> 
        <img className='mx-2 cursor-pointer' alt='youtube-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png'/>
    </div>
    <div >
      <input type="text" placeholder='Search' className='w-3/4 border border-gray-400 rounded-l-full px-3'
      value={searchinput}
      onChange={(e)=> setSearchInput(e.target.value)}
      onFocus={(e) => setShowSuggestions(true)}
        onBlur={(e) => setShowSuggestions(false)}
      />
      <button className='border border-grey-400 px-2 rounded-r-full'>Search</button>

     {showSuggestions && (<div className='absolute bg-white w-96 rounded-sm'>
        <ul>
          {suggestions.map((s)=><li className='px-3 shadow-sm  hover:bg-slate-400'>{s}</li>)}
        </ul>
      </div>)}


      </div>
     
      <div className='h-7 w-7 col-span-1 px-2'>
      <img alt='user-icon' className='cursor-pointer' src='https://cdn-icons-png.flaticon.com/512/709/709722.png'/>
      </div>
    
    </div>
  )
}

export default Head



