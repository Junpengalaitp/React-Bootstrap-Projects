import React from 'react'
import cx from 'classnames'
import classes from '../css/Section.module.css'


const SectionBody = (props) => {
  return (
    <div>
      <section id={props.id} class={props.bodyClass}>
      <div class="container">
        <div class="row">
          <div class={props.order1}>
            <img src={props.image} alt="" class="img-fluid mb-3 rounded-circle" />
          </div>
          <div class={props.order2}>
            <h3>{props.bodyHead}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque quo nostrum quas cum provident delectus, voluptas veniam officiis numquam.</p>
            <div class="d-flex">
              <div class="p-4 align-self-start">
                <i className={cx("fas fa-check fa-2x", classes.Fas)}></i>
              </div>
              <div class="p-4 align-self-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit pariatur itaque, et eum vel explicabo.
              </div>
            </div>
            <div class="d-flex">
              <div class="p-4 align-self-start">
                <i className={cx("fas fa-check fa-2x", classes.Fas)}></i>
              </div>
              <div class="p-4 align-self-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit pariatur itaque, et eum vel explicabo.
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default SectionBody
