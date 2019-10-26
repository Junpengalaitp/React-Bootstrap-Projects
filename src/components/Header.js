import React from 'react'
import classes from '../css/Header.module.css'
import cx from 'classnames'

const Header = () => (
    <header className={classes.Header} id="home-section">
      <div className={classes.DarkOverlay}>
        <div className={cx("home-inner container", classes.HomeInner)}>
          <div class="row">
            <div class="col-lg-8 d-none d-lg-block">
              <h1 class="diplay-4">
                Build <strong>social profiles</strong> and gain revenue
                <strong>profits</strong>
              </h1>
              <div class="d-flex">
                <div class="p-4 align-self-start">
                  <i className={cx("fas fa-check fa-2x", classes.Fas)}></i>
                </div>
                <div class="p4 align-self-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam adipisci ut, eaque impedit at dicta hic quod, nostrum
                  libero laboriosam atque, iusto quo porro animi recusandae.
                  Quod minima facilis soluta.
                </div>
              </div>
              <div class="d-flex">
                <div class="p-4 align-self-start">
                  <i className={cx("fas fa-check fa-2x", classes.Fas)}></i>
                </div>
                <div class="p4 align-self-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam adipisci ut, eaque impedit at dicta hic quod, nostrum
                  libero laboriosam atque, iusto quo porro animi recusandae.
                  Quod minima facilis soluta.
                </div>
              </div>
              <div class="d-flex">
                <div class="p-4 align-self-start">
                  <i className={cx("fas fa-check fa-2x", classes.Fas)}></i>
                </div>
                <div class="p4 align-self-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam adipisci ut, eaque impedit at dicta hic quod, nostrum
                  libero laboriosam atque, iusto quo porro animi recusandae.
                  Quod minima facilis soluta.
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div className={cx("card bg-primary text-center card-form", classes.CardForm)}>
                <div class="card-body">
                  <h3>Sign Up Today</h3>
                  <p>Please fill out this form to register</p>
                  <form>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-lg"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        placeholder="password"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        placeholder="Comfirm password"
                      />
                    </div>
                    <input type="text" class="btn btn-outline-light btn-block" value="Submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
)

export default Header
