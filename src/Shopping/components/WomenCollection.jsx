import React from 'react'

const WomenCollection = (props) => {
    const {title,image1,image2,image3,image4,image5,image6} = props.ladiesFashion;
  return (
    <div className='{collectionSection}'> 
    <h2>{title}</h2> 
    
    <div className='bannerBox'>
        <img src="assets/WomenBanner.gif" alt="MenBanner" />
      </div>      
      <div className='menImages'>      
        <img src="assets/Women/1.jpg" alt="image1" />
        <img src="assets/Women/2.jpg" alt="image2" />
        <img src="assets/Women/3.jpg" alt="image3" />
        <img src="assets/Women/4.jpg" alt="image4" />
        <img src="assets/Women/5.jpg" alt="image5" />
        <img src="assets/Women/6.jpg" alt="image5" />
      </div>
    </div>
  )
}

export default WomenCollection
