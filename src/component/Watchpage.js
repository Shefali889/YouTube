import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/AppSlice';
import CommentContainer from './CommentContainer';

const Watchpage = () => {

 const [searchparam]=useSearchParams();
 console.log(searchparam.get('v'));

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(closeMenu())
  },[]);

  return (
    <div className='flex flex-col'>
    <div className='p-4'>
    <iframe width="560" 
    
    height="315" 
    src={"https://www.youtube.com/embed/"+searchparam.get('v')} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen>

    </iframe>
    </div>
      <CommentContainer/>
    </div>
  )
}

export default Watchpage;
