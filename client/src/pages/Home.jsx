import React, { useEffect, useState } from 'react'
import { gallery } from '../assets/gallery';
import '../styles/home.css'

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
          prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
        );
    }, 4000)

    return () => clearInterval(interval);
  }, [])

  return (
    <div className='carousel'>
        <h1>{gallery[currentIndex].title}</h1>
        <img src={gallery[currentIndex].img} alt='img'></img>
        <p>{gallery[currentIndex].subtitle}</p>
    </div>
  )
}

export default Home