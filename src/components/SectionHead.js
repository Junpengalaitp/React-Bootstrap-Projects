import React from 'react'

const SectionHead = (props) => {
  return (
    <div>
      <section id={props.id} className={props.headClass}>
      <div class="container">
        <div class="row">
          <div class="col text-center py-5">
            <h1 class="display-4">{props.head}</h1>
            <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, a voluptatem modi mollitia autem sed praesentium perferendis illum quidem qui ad eaque impedit ex delectus dicta error deserunt quo sit.</p>
            <a href="/" class={props.aClass}>Find Out More</a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default SectionHead
