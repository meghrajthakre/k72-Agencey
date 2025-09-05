import React from 'react'

const Vedio = () => {
    return (
        <>
            <div className='w-full h-full '>
                <video className='object-cover h-screen w-screen' loop muted autoPlay>
                    <source src='https://player.vimeo.com/progressive_redirect/playback/899938964/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6a2cb0320d09d02dcfdfa2ad504c89a510e6d93d55e9060b1b55d680fa2e2be9
                ' type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default Vedio