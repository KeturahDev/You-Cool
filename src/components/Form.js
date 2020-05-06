import React from 'react';

function Form(){
  return(
    <React.Fragment>
      <div style={{border: "2px solid green"}}>
        <form>
          <input type="text" name="compliment" placeholder="Say something good about yourself!"/>
          <button type="submit">submit</button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Form;