import React from 'react'

const Hero =({heroName})=>
{
    if(heroName === 'Joker')
        throw new Error('Not a hero')

    return(
        <>{heroName}</>

    )
}

export default Hero;