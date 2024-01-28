import React from 'react'
import NavBar from '../components/NavBar'
import Cards from '../components/Cards'

const cardinfo=[
  {
    id:1,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnm9muI2-w6yAu0VvCIdbgRsBJdODo2_UDRqLMdXQaWqsAPHaOKYLWuRNJF-0lG1ngs4&usqp=CAU",
    title:"DATA STRUCTURES AND ALGORITHMS",
    description:"Data structures organize data (e.g., arrays), algorithms provide efficient problem-solving steps—core elements in computer science.",
    link: "/dsa"
  },
  {
    id:2,
    img:"https://www.shutterstock.com/image-vector/machine-learning-banner-logo-technology-260nw-1816762394.jpg",
    title:"INTERVIEW PREP FOR ML",
    description:"Machine learning empowers computers to learn from data, enhancing task performance without explicit programming.",
    link:"/ml"
  },
  {
    id:3,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2LSIXtXoBEQ-eQShMeYIYukYLX8AH7XyZPZsVx3mEW4UIP62_O8Ra4QyntYIkRrCgffc&usqp=CAU",
    title:"INTERVIEW PREP FOR WEB DEVELOPMENT",
    description:"Web development involves building and maintaining websites or web applications, combining skills in HTML, CSS, and JavaScript for frontend and backend development.",
    link:"/webd"
  },
  {
    id:4,
    img:"https://cdn.filestackcontent.com/H5Em6KaCT56m3sXEamgP",
    title:"INTERVIEW PREP FOR CS FUNDAMENTALS",
    description:"Computer science fundamentals encompass the foundational principles and theories that underlie the design and operation of computers and software systems.",
    link:"/csfundamental"
    
  }
]

const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="wrapper">
           {
             cardinfo.map((data)=>(
              <Cards key={data.id} img={data.img} title={data.title} description={data.description} link={data.link}/>
             ))
           }
        </div>
      </div>
    </>
  )
}

export default Home