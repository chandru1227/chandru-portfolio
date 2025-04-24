import React from 'react'

function About() {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>

                <p className='text-xl mt-20'>
                    Hello! I'm <strong>Chandru A</strong>, a Computer Science and Engineering student at Kongu Engineering College with a CGPA of 8.77. I’m passionate about technology and innovation, always eager to learn new skills and stay updated with emerging trends in the tech world.
                </p>
                <br />

                <p className='text-xl'>
                    I specialize in full-stack development using tools and frameworks like ReactJS, NodeJS, MongoDB, and PostgreSQL. I also have a strong interest in machine learning and SQL, and I'm certified as a MongoDB Associate Developer. With leadership roles like <strong>Joint Secretary</strong> of the CSE Association at KEC and internship experience in AI/ML, I thrive in collaborative environments that help me grow both technically and personally.
                </p>
            </div>

        </div>
    )
}

export default About
