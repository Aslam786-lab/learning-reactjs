import { BeatLoader } from 'react-spinners'

import React from 'react'

function Spinner() {
  return (
    <div>
        <BeatLoader
            color="#b398c0"
            loading
            margin={10}
            size={25}
            speedMultiplier={1}
        />
    </div>
  )
}

export default Spinner
