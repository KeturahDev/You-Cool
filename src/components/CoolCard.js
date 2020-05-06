import React from 'react';
import Compliment from './Compliment'

function CoolCard(){
  return(
    <React.Fragment>
      <div style={{border: "2px solid purple"}}>
        <p>This is the cool card that tells you why your cool</p>
        <Compliment />
      </div>
    </React.Fragment>
  )
}
export default CoolCard