import headshot from '@/public/headshot.jpg'

const IntroSection = ()=>{
    return (
        <section className='container-fluid bg-body-tertiary'>
            <div className='row row-cols-1 row-cols-md-2'>
                <div className='col d-flex justify-content-center p-4 align-items-center'>
                    <img src={headshot.src} className='img-fluid rounded-circle' alt='headshot'></img>
                </div>
                <div className='col p-2 align-self-center'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est porro qui dolorum cupiditate beatae consequuntur. Sint sed, nisi incidunt, ut repudiandae minima voluptas explicabo est nostrum nesciunt molestias cumque!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default IntroSection