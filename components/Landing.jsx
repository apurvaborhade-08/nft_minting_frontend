import Image from 'next/image'
import React from 'react'

const Landing = () => {
    return (
        <div className='landing mt-[3rem]'>
            <div className="intro flex flex-col justify-center text-center items-center">
                <h2 className='tagline'>Super-b are more than just an avatar</h2>
                <h2 className='info'>They're a collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits. What's more, each Moonbird unlocks private club membership and additional benefits the longer you hold them. We call it nesting – because, obviously.</h2>
            </div>
            <div className="showcase flex justify-evenly items-center flex-wrap mt-5">
                <div className="showcase-art">
                    <Image src="/DOPE APE 2.png" width="351" height="351" ></Image>
                </div>
                <div className="showcase-art">
                    <Image src="/DOPE APE.png" width="351" height="351" ></Image>
                </div>
                <div className="showcase-art">
                    <Image src="/DOPE APE 3.png" width="351" height="351" ></Image>
                </div>

            </div>
        </div>
    )
}

export default Landing