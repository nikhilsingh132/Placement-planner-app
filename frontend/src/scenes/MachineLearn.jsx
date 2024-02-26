import React from 'react'
import NavBar from '../components/NavBar'
import { Card } from "@material-tailwind/react";

const dataDescription = [
  {
    id: 1,
    title: "CodeBasics: Machine learning Playlist",
    about: "Dive into the world of machine learning with carefully selected playlist, featuring tutorials, lectures, and insights to guide your learning journey.",
    img: "https://yt3.googleusercontent.com/DZidE7P_ESU8Y_dZ5_PrTAItOkSuayCfE2tYkKCnjtFYes7nA2sE-UF1fi3tZLjozlg0h1aK=s176-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/playlist?list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw"
  },
  {
    id: 2,
    title: "CodeBasics: Deep learning Playlist",
    about: "Explore the realm of deep learning through curated playlist, offering a comprehensive guide with tutorials and insights for an enriching learning experience.",
    img: "https://yt3.googleusercontent.com/DZidE7P_ESU8Y_dZ5_PrTAItOkSuayCfE2tYkKCnjtFYes7nA2sE-UF1fi3tZLjozlg0h1aK=s176-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/playlist?list=PLeo1K3hjS3uu7CxAacxVndI4bE_o3BDtO"
  },
  {
    id: 3,
    title: "Complete Machine Learning Playlist",
    about: "Dive into the world of machine learning with carefully selected playlist, featuring tutorials, lectures, and insights to guide your learning journey.",
    img: "https://nexax.in/wp-content/uploads/2020/12/CX2-1-1.jpg",
    link: "https://www.youtube.com/playlist?list=PLZoTAELRMXVPBTrWtJkn3wWQxZkmTXGwe"
  },
];
const MachineLearn = () => {
  return (
    <>
    <NavBar/>
    {dataDescription.map((data) => (
        <Card key={data.id} className='mx-4 md:mx-8 lg:mx-16 xl:mx-20 bg-white shadow-lg overflow-hidden rounded-md mb-4 hover:bg-blue-100'>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/4 overflow-hidden mb-4 md:mb-0">
              <img src={data.img} alt="Card img" className="w-80 h-64 object-cover rounded-md" />
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
  )
}

export default MachineLearn