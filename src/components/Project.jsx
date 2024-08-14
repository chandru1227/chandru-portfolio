import React from 'react';
import Event from '../assets/event-proj.jpg';
import Food from '../assets/food-proj.jpeg';
import Shopping from '../assets/shopping-proj.png';

function Project() {
  const projects = [
    {
      id: 1,
      src: Event,
    },
    {
      id: 2,
      src: Food,
    },
    {
      id: 3,
      src: Shopping,
    },
  ];

  return (
    <div name="project" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Project</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt={`Project ${id}`} className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
