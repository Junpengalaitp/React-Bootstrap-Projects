import React from 'react'
import cx from 'classnames'
import classes from '../css/Section.module.css'

const Section = () => {
  return (
    <React.Fragment>
    <section id="explore-head-section">
      <div class="container">
        <div class="row">
          <div class="col text-center py-5">
            <h1 class="display-4">Explore</h1>
            <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, a voluptatem modi mollitia autem sed praesentium perferendis illum quidem qui ad eaque impedit ex delectus dicta error deserunt quo sit.</p>
            <a href="/" class="btn btn-outline-secondary">Find Out More</a>
          </div>
        </div>
      </div>
    </section>

    <section id='explore-section' class="bg-light text-muted py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="img/explore-section1.jpg" alt="" class="img-fluid mb-3 rounded-circle" />
          </div>
          <div class="col-md-6">
            <h3>Explore & Connect</h3>
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
    </React.Fragment>
  )
}

export default Section
