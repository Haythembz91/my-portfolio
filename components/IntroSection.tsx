import headshot from '@/public/headshot.jpg'

const IntroSection = ()=>{
    return (
        <section className='container-fluid'>
            <div className='row row-cols-1 row-cols-md-2'>
                <div className='col d-flex justify-content-center p-4 my-4 align-items-center border-end'>
                    <img src={headshot.src} className='img-fluid rounded-circle' alt='headshot'></img>
                </div>
                <div className='col p-2 align-self-center'>
                    <h3 className='h3 text-muted'>Hi i&apos;m</h3>
                    <h1 className='textShadow'>Haythem Ben Zaied</h1>
                    <p className='py-3 text-muted'>
                        I&apos;m a full-stack web developer with a passion for building modern, responsive web apps.
                        I specialize in React, TypeScript, Next.js, and backend tools like Express, MongoDB, and PostgreSQL.
                        I love turning ideas into real, functional digital experiences.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default IntroSection