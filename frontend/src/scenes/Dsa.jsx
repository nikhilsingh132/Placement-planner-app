import React from 'react'
import NavBar from '../components/NavBar'
import Cards from '../components/Cards'

const cardinfo = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title: "Dynamic Programming",
    tag:"Dynamic Programming",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title: "Graph",
    tag:"Graph",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title: "Tree",
    tag:"Tree",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title: "Binary Search",
    tag:"Binary search",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title: "Queue",
    tag:"Queue",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    title: "Stack",
    tag:"Stack",
  }
]
const DSA = () => {


  return (
    <>
      <NavBar />
      <div>
        <div className="wrapper">
           {
             cardinfo.map((data)=>(
              <Cards key={data.id} img={data.img} title={data.title} description={data.description} link=
              {`question/${data.tag}`} />
             ))
           }
        </div>
      </div>
    </>
  )
}

export default DSA