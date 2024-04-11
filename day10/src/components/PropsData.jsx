import React from 'react'

const PropsData=(props)=>
{
    return(
        <>
        <h1>Static: {props.staticData}</h1>
        <h1>Dynamic: {props.dynamicData}</h1>
        </>
    )
}

export default PropsData;