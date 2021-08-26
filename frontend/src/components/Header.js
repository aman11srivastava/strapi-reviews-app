import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="site-header">
            <Link to='/'><h1>SkyDropV2</h1></Link>
        </div>
    )
}

export default Header
