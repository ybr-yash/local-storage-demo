import React from 'react'

const RandomComponent = () => {
    let localData = localStorage.getItem('myLocalData')
    let sessionData = sessionStorage.getItem('mySessionData')
  return (
    <div>
        <p>RandomComponent can use localStorage data</p>
        <h1>{localData}</h1>
        <p>RandomComponent can use sessionStorage data, <br/>but not is the window is just opened and session data is not stored yet</p>
        <h1>{sessionData}</h1>
    </div>
    

  )
}

export default RandomComponent