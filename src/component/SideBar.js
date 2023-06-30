import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {

const isMenuOpen=useSelector( (store) => store.app.isMenuOpen)
   if(!isMenuOpen) return null;
 return (
    <div className='shadow-lg'>
      <ul className='py-1'>
        <li><Link to="/">Home</Link></li>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold py-2'>Subscription</h1>
      <ul>
        <li>Movies</li>
        <li>Prime</li>
        <li>Music</li>
        <li>addfree</li>

      </ul>
      <h1 className='font-bold py-2'>Movies Suggestions</h1>
      <ul>
        <li>Fast and Furious</li>
        <li>KGF</li>
        <li>interstellar</li>
        <li>rush hour</li>
      </ul>

    </div>
  )
}

export default SideBar
