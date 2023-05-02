import React from 'react'
import NavBarM from './NavBarM'
import '../styles/estadistica.scss'
import img1 from '../assets/GUID-3045CB88-870B-4A90-A55A-F50EFA20506B-web.png'

function Estadistica() {
  return (
    <>
    <NavBarM/>
    <main className='MainEstadistica'>
        <div className='container-estadistica'>
            <div className='card-estadistica'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <div className='imgG'>
                    <img src={img1} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt inventore nobis ipsam et itaque. Rem dolores corrupti autem asperiores placeat consequuntur nostrum? Sunt inventore magni, quis perspiciatis omnis iure ea.</p>
            </div>
            <div className='card-estadistica'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <div className='imgG'>
                    <img src={img1} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt inventore nobis ipsam et itaque. Rem dolores corrupti autem asperiores placeat consequuntur nostrum? Sunt inventore magni, quis perspiciatis omnis iure ea.</p>
            </div>
        </div>
    </main>
    </>
  )
}

export default Estadistica