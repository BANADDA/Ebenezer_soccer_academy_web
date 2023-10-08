import React from 'react'
import PropTypes from "prop-types";

function Patners({img}) {
  return (
      <figure className=" w-58 px-0 pt-5 pb-2 rounded-lg drop-shadow-xl">
          <img className="w-full overflow-hidden rounded-tl-lg rounded-tr-lg h-40"
              src={img}/>
      </figure>
  )
}

Patners.propTypes = {
    img: PropTypes.string.isRequired
}

export default Patners

