import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Link to='/'>
                <li>Home</li>
            </Link>
        </div>
    )
}
