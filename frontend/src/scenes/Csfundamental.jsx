import React from 'react'
import NavBar from '../components/NavBar'
import { Card } from "@material-tailwind/react";

const dataDescription = [
  {
    id: 1,
    title: "Operating System(OS) Preparation",
    about: "OS interview prep: grasp process management, memory allocation, file systems, networking, and key algorithms.",
    img: "https://static.javatpoint.com/interview/images/operating-system-interview-questions.png",
    link: "https://drive.google.com/file/d/1-ELGdN8DLwoTpylILrMKhQRvdy5xbsbr/view?usp=sharing",
    ytlink:"https://www.youtube.com/playlist?list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG"
  },
  {
    id: 2,
    title: "Database Management System(DBMS) Preparation",
    about: "DBMS interview prep involves mastering SQL, relational concepts, normalization, and transaction management.",
    img: "https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/fade2f81-0071-4fb7-842c-f13fca514185_CI.png",
    link: "https://drive.google.com/file/d/1l6xuJr_zkQCbb3nD6LF8K4r8IgRkDPls/view?usp=sharing",
    ytlink:"https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU"
  },
  {
    id: 3,
    title: "Computer Networks(CN) Interview Questions",
    about: "Computer Networks interview: expect questions on OSI model, TCP/IP, security, routing, and network topologies.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKNnAU9ua2OnBfnKNE9uKe9Ae10n2J4dkP8q-spWpCKIoVSPDukHxdX1vcn7ej5AGWRU&usqp=CAU",
    link: "https://www.interviewbit.com/networking-interview-questions/",
    ytlink:"https://www.youtube.com/watch?v=IPvYjXCsTg8&ab_channel=KunalKushwaha"
  },
  {
    id: 4,
    title: "Object Oriented Programming(OOPs) Preparation",
    about: "OOP interview prep: grasp encapsulation, inheritance, polymorphism, and abstraction, showcasing proficiency in languages like Java or C++.",
    img: "https://t4.ftcdn.net/jpg/01/08/96/57/360_F_108965707_UhpFxvquwgXVfWlFpg9vYGJfz8mmZ33u.jpg",
    link: "https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/",
    ytlink:"https://www.youtube.com/playlist?list=PLA8BpojmT5JF4KKQCEIqURc71z6nvYXEK"
  }
];

const Csfundamental = () => {
  return (
    <>
      <NavBar />
      {dataDescription.map((data) => (
        <Card key={data.id} className='mx-4 md:mx-8 lg:mx-16 xl:mx-20 bg-white shadow-lg overflow-hidden rounded-md mb-4 hover:bg-blue-100'>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/4 overflow-hidden mb-4 md:mb-0">
              <img src={data.img} alt="Card Img" className="w-80 h-64 object-cover rounded-md" />
            </div>
            <div className="w-full md:w-3/4 p-6 flex flex-col justify-center align-middle text-center">
              <p className='font-bold text-3xl text-gray-800 mb-3'>{data.title}</p>
              <p className='text-gray-600 mb-3'>{data.about}</p>
              <a href={data.link} target='_blank' rel="noreferrer" className='text-blue-500 hover:underline'>Learn from here =>></a>
              <a href={data.ytlink} target='_blank' rel="noreferrer" className='text-blue-500 hover:underline'>Watch from here =>></a>
            </div>
          </div>
        </Card>
      ))}
    </>
  )
}

export default Csfundamental