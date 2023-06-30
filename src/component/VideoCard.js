import React from 'react'

const VideoCard = ({info}) => {
    
    
  

    

  return (
    <div className='shadow-lg p-2 m-2 w-52  rounded-lg bg-grey hover:bg-amber-300'>
        <img alt="thumbnail" src={info?.snippet.thumbnails.medium.url}/>
        <ul>
           <li className='font-bold bg-white'>{info?.snippet.channelTitle}</li>
            <li className=' bg-white'>{info?.snippet.title}</li>
           <li className=' bg-white'>{info?.statistics.viewCount} views</li>
        </ul>
   

    </div>
  )
}

export default VideoCard
