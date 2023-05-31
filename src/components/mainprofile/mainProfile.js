import React from 'react'
import './mainProfile.css'
import CoverImage from './coverImage.jpg';
import Profile from './profileImage.png'
export default function mainProfile() {
  return (
    <div className='main-container'>
         <div className='image-container'>
             <img className='cover-img' src={CoverImage} alt='img'></img>
             <img className='profile-img' src={Profile} alt='img'></img>
         </div>
         <div className='text-container'>
              <h2>John</h2>
         </div>
    </div>
  )
}
