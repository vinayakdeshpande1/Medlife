import React from 'react'
import Cardp from './Cardpro'
 import data from "../data"
const Card = () => {
  const cards=data.map(item=>{
    return(
      <Cardp className="cards" 
      key={item.id}
      open={item.open}
      sr={item.sr} 
      heading={item.heading}
      des={item.des}
      rating={item.rating}
      review={item.review}
      off={item.off}
      rate={item.rate}
      offer={item.offer}
      price={item.price}
>
  </Cardp>
    )
  })
  return (
<>
<div className='whiteback'>
<h3 className="start"><span className='BottomLine'>Trend</span>ing Today</h3>
<div className="int">

{cards}
</div>
</div>
</>
  )
}

export default Card