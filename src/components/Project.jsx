import React from 'react';
import ContactForm from './ContactForm';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'NamasteNomad',
      description: 'Experience the world with Namaste Nomade – your trusted platform for authentic travel experiences, where every journey begins with seamless authentication and robust validation processes, ensuring peace of mind at every step of your adventure.',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg',
      demoUrl: 'https://namastenomad-we2u.onrender.com/',
      codeUrl: 'https://github.com/sumitshukla10/NamasteNomad.git'
    },
    {
      id: 2,
      title: 'Netflix-GPT',
      description: 'Welcome to Netflix GPT, your ultimate destination for personalized entertainment experiences. Powered by React and integrated with TMDB API, our platform offers a vast array of movies and shows tailored to your preferences. With robust security features and seamless authentication, rest assured your viewing experience is protected at every step. Plus, harnessing the power of OpenAI API, discover recommendations and insights that elevate your entertainment journey like never before',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/09/14/17/45/tv-5571609_1280.jpg',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/example/project2'
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto py-8 bg-black">
    <h2 className='bg-black text-sky-800 font-bold text-3xl mb-5'>Projects :</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
       <div><ContactForm/></div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-40 object-cover" src={project.imageUrl} alt={project.title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex justify-between">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Demo</a>
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">Code</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
