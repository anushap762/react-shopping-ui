import React from 'react'

const CollectionComp = (props) => {
    const {title,image1,image2,image3,image4,image5}=props.gentsFashion  
   
  return (
    <div className='collectionSection'>
      <h2>{title}</h2>
      <div className='menImages'>
        <img src="assets/Men/1.jpg" alt="image1" />
        <img src="assets/Men/2.jpg" alt="image2" />
        <img src="assets/Men/3.png" alt="image3" />
        <img src="assets/Men/4.png" alt="image4" />
        <img src="assets/Men/5.jpg" alt="image5" />
      </div>      
    </div>
  )
}

export default CollectionComp
