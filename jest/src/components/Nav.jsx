import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <>
    <div>Nav</div>
    <ol>
    <Link to='/home'>
        <li>
            Home
        </li>
    </Link>
    <Link to='/about'>
        <li>
            About
        </li>
    </Link>
    <Link to='/count'>
        <li>
            Count
        </li>
    </Link>

    </ol>
    </>
  )
}

export default Nav