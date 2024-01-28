import React from 'react';
import NavBar from '../components/NavBar';
import { Card } from "@material-tailwind/react";

const dataDescription = [
  {
    id: 1,
    title: "NodeJs Interview Questions",
    about: "Commonly asked queries designed to evaluate a candidate's understanding and expertise in Node.js during job interviews.",
    img: "https://play-lh.googleusercontent.com/uphrWz_e_K_pZrPOmCR34A6grxPtva0kM8bhMSgdycrlxiBC7C_JzGtyJLn1mfrRLrg",
    link: "https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-interview-questions"
  },
  {
    id: 2,
    title: "ReactJs Introduction",
    about: "An overview of React.js, a popular JavaScript library for building user interfaces, known for its component-based architecture and efficient rendering.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeiZVfR0ps-hBnWDnUPmD1VmQg6M4d7OsF0lOcFLET3oQvZW5jIHYGRNu3-yO2uT3Mbo&usqp=CAU",
    link: "https://www.geeksforgeeks.org/reactjs-introduction/?ref=roadmap"
  },
  {
    id: 3,
    title: "ReactJs Interview Questions",
    about: "A collection of queries designed to assess candidates' proficiency in React.js, covering key concepts and best practices in building dynamic and responsive web applications.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdeMsoPQQh4wcG1hb2rUR0uHnf53I_y7kOiKnHMpAOEBi0nn3mCBpLS8d5bxhzgo0LlBw&usqp=CAU",
    link: "https://www.interviewbit.com/react-interview-questions/"
  },
  {
    id: 4,
    title: "Handwritten NodeJs Interview Questions",
    about: "Commonly asked queries designed to evaluate a candidate's understanding and expertise in Node.js during job interviews.",
    img: "https://externlabs.com/blogs/wp-content/uploads/2021/12/2400%D1%851260-rw-blog-node-js.png",
    link: "https://drive.google.com/file/d/1GAynOeRg5hSr-8ydOVv8CSASAgYekGqn/view?usp=sharing"
  }
];

const Webd = () => {
  return (
    <>
      <NavBar />
      {dataDescription.map((data) => (
        <Card key={data.id} className='mx-4 md:mx-8 lg:mx-16 xl:mx-20 bg-white shadow-lg overflow-hidden rounded-md mb-4 hover:bg-blue-100'>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/4 overflow-hidden mb-4 md:mb-0">
              <img src={data.img} alt="Card Image" className="w-80 h-64 object-cover rounded-md" />
            </div>
            <div className="w-full md:w-3/4 p-6 flex flex-col justify-center align-middle text-center">
              <p className='font-bold text-3xl text-gray-800 mb-3'>{data.title}</p>
              <p className='text-gray-600 mb-3'>{data.about}</p>
              <a href={data.link} target='_blank' rel="noreferrer" className='text-blue-500 hover:underline'>Learn from here =>></a>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default Webd;
