import React from 'react'


const Buttonlist = () => {
  const arr=["watch",'Drama','Movies','Subscriptions','Recommended','Series','Watch later','Trending']
  
  return (
    <div className='flex m-3 '>
  {arr.map((e,index)=>(<button className='p-3 shadow-sm border border-grey-100 rounded-xl m-3' key="index">{e}</button>))}
    </div>
  )
}

export default Buttonlist