import React from 'react'
import med from '../imgs/static 1.jpg'
import beauty from '../imgs/static 2.jpg'
import well from '../imgs/static 3.png'


function Static() {
  return (
      <>
    <div className='container container_static'>

        <div className='row'>

            <div className='col-sm-3 col-12'>
            <div class="card static">
                <div class="">
                    <div class="col">
                        <img src={med} class="card-img-top sizeimg" alt="..."/>
                    </div>
                      <div class="card-body">
                          <h5 class="card-title heading-color">Beauty Products</h5>
                          <div class="card-text text-success font-italic fontitalics">Save Upto 25% off</div>
                          <button class="btn btn-primary btncolor">Explore Now</button>
                      </div>
                </div>
            </div>
            </div>

            <div className='col-sm-3 col-12'>
            <div class="card static">
                <div class="bordernone">
                    <div class="col">
                        <img src={med} class="card-img-top sizeimg" alt="..."/>
                    </div>
                      <div class="card-body">
                          <h5 class="card-title heading-color">Order Medicine</h5>
                          <div class="card-text text-success font-italic fontitalics">Save Upto 40% off</div>
                          <button class="btn btn-primary btncolor">Buy Now</button>
                      </div>
                </div>
            </div>
            </div>

            <div className='col-sm-3 col-12'>
            <div class="card static">
                <div class="">
                    <div class="col">
                        <img src={well} class="card-img-top sizeimg" alt="..."/>
                    </div>
                      <div class="card-body">
                          <h5 class="card-title heading-color">Wellness Corner</h5>
                          <div class="card-text text-success font-italic fontitalics">Save Upto 55% off</div>
                          <button class="btn btn-primary btncolor">Explore more</button>
                      </div>
                </div>
            </div>
            </div>

            <div className='col-sm-3 col-12'>
            <div class="card static">
                <div class="">
                    <div class="col">
                        <img src={beauty} class="card-img-top sizeimg" alt="..."/>
                    </div>
                      <div class="card-body">
                          <h5 class="card-title heading-color">MedLife Products</h5>
                          <div class="card-text text-success font-italic fontitalics">Save Upto 55% off</div>
                          <button class="btn btn-primary btncolor">Explore more</button>
                      </div>
                </div>
            </div>
            </div>

            
            
        </div>
    </div>
    
    </>
  )
}

export default Static