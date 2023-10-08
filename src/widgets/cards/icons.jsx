
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faTwitter, faYoutube , } from '@fortawesome/free-brands-svg-icons';

import React from 'react'

const Icons = ({icon}) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon}/>
    </div>
  )
}

export default Icons
