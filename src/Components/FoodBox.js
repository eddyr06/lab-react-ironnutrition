import React from 'react'
import '../App.css'
import { foodPlates } from '../Foods'
import CreateFood from './CreateFood'

const FoodBox = (props) => {

  return (
    <div className="box">
      <h1>Your Menu</h1>
        {props.name.map((foods) => {
          return(
            <article className="media">

              <div className="media-left">
                <figure className="image is-64x64">
                        <img
                          src={foods.image}
                          alt={foods.name}/>
                </figure>
              </div>

              <div className="media-content">
                <div className="content">
                  <p>
                      <strong>{foods.name}</strong> <br />
                      <small>{foods.calories}</small>
                  </p>
                </div>
              </div>
              
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value="1" />
                  </div>
                  <div className="control">
                    <button className="button is-info">
                      +
                    </button>
                  </div>
                </div>
              </div>
            
            </article>)
                })}
</div>
    )
}

export default FoodBox