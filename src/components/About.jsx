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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur itaque expedita et, vero ipsum pariatur sapiente, ab beatae, quod nihil maiores voluptates perferendis quos. Saepe repellat, recusandae reprehenderit magnam aut assumenda architecto nobis quasi odio ipsum obcaecati voluptate deleniti distinctio soluta corporis nisi iste dolores eum, consectetur expedita accusantium! Esse.
                </p>
                <br />

                <p className='text-xl'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae totam, quisquam voluptatibus exercitationem sint soluta, nulla hic repellat, tenetur atque molestiae magni a distinctio ipsam sit. Ea enim officiis laboriosam repellat! Maxime, numquam assumenda repellendus eius doloribus eveniet fuga quidem consectetur veritatis minima animi aut voluptate eaque quia possimus harum.
                </p>
            </div>

        </div>
    )
}

export default About