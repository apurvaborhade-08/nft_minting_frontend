import React from 'react'

const Header = () => {
    return (
        <div className='header flex justify-between items-center p-7'>
            <div className="logo">
                <h1>SU-B</h1>
            </div>
            <div className="btns flex items-center">
                <a href=""><h3>Roadmap</h3></a>
                <a href="/gallery"><h3>Gallery</h3></a>
                <a href="" className='mint-btn flex items-center justify-center'><button>Mint</button></a>
            </div>
        </div>
    )
}

export default Header