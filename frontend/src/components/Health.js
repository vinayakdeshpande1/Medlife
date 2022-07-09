import React from 'react'
import { Link } from 'react-router-dom'

function Health(props) {
  return (
    <div class="card health">
  <img src={props.item.sr} class="card-img-top health-img" alt="..."/>
  <div class="card-body white">
    <h5 class="health-title">{props.item.title}</h5>
    <p class="health-text">{props.item.des}</p>
    <button class="btn btn-primary btncolor">Read More</button>
  </div>
</div>
  )
}

export default Health