import React from 'react'
import NavBar from '../components/NavBar'
import Cards from '../components/Cards'

const cardinfo=[
  {
    id:1,
    img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title:"DATA STRUCTURES AND ALGORITHMS",
    description:"Take your boring salads up a knotch.This recipe is perfect for lunch and only contains 5 ingredients!",
    link: "/dsa"
  },
  {
    id:2,
    img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title:"INTERVIEW PREP FOR ML",
    description:"Take your boring salads up a knotch.This recipe is perfect for lunch and only contains 5 ingredients!",
    link:"/ml"
  },
  {
    id:3,
    img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title:"INTERVIEW PREP FOR WEB DEVELOPMENT",
    description:"Take your boring salads up a knotch.This recipe is perfect for lunch and only contains 5 ingredients!",
    link:"/webd"
  },
  {
    id:4,
    img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title:"INTERVIEW PREP FOR CS FUNDAMENTALS",
    description:"Take your boring salads up a knotch.This recipe is perfect for lunch and only contains 5 ingredients!",
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