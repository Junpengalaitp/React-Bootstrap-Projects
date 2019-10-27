import React from 'react'

import SectionHead from './SectionHead'
import SectionBody from './SectionBody'

const Section = (props) => {
  return (
    <React.Fragment>
    <SectionHead id={props.id} head={props.head} headClass={props.headClass} aClass={props.aClass} />
    <SectionBody bodyClass={props.bodyClass} image={props.image} bodyHead={props.bodyHead} order1={props.order1} order2={props.order2}/>
    </React.Fragment>
  )
}

export default Section
