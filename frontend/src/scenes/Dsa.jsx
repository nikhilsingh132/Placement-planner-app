import React from 'react'
import NavBar from '../components/NavBar'
import Cards from '../components/Cards'

const cardinfo = [
  {
    id: 1,
    img: "https://res.cloudinary.com/codecrucks/images/f_webp,q_auto/v1635307877/dynamic-programming/dynamic-programming.jpg?_i=AA",
    title: "Dynamic Programming",
    tag:"Dynamic Programming",
  },
  {
    id: 2,
    img: "https://datatrained.com/post/wp-content/uploads/2022/04/graph-in-data-structure-scaled.jpg",
    title: "Graph",
    tag:"Graph",
  },
  {
    id: 3,
    img: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_09_Tree-Data-Structures.jpg",
    title: "Tree",
    tag:"Tree",
  },
  {
    id: 4,
    img: "https://miro.medium.com/v2/resize:fit:1400/1*5xashi8Yq2YsaJgx2IVoUA.jpeg",
    title: "Binary Search",
    tag:"Binary search",
  },
  {
    id: 5,
    img: "https://cdn.educba.com/academy/wp-content/uploads/2019/12/Queue-in-Data-Structure.jpg",
    title: "Queue",
    tag:"Queue",
  },
  {
    id: 6,
    img: "https://www.softwaretestinghelp.com/wp-content/qa/uploads/2019/06/STACK.png",
    title: "Stack",
    tag:"Stack",
  },
  {
    id: 7,
    img: "https://miro.medium.com/v2/resize:fit:691/1*fb0_9D02RHiW8mTi4ZkArw.png",
    title: "Array",
    tag:"Array",
  },
  {
    id: 8,
    img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230808183250/String-Data-Structure1.png",
    title: "String",
    tag:"String",
  },
  {
    id: 9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8l9998JaVkEAcTyqQKYcfqDAYcuzcNVu4Q&usqp=CAU",
    title: "Backtracking",
    tag:"Backtracking",
  },
  {
    id: 10,
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--x7xdPS6---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nadznquytd6snyjxo1lc.png",
    title: "Linkedlist",
    tag:"Linkedlist",
  },
  {
    id: 11,
    img: "https://techgeekbuzz.com/media/tutorial_images/Recursion.jpg",
    title: "Recursion",
    tag:"Recursion",
  },
  {
    id: 12,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQptsepGSY4d5C3lRyE3qdygnODa8pVxUQLA&usqp=CAU",
    title: "Heaps",
    tag:"Heaps",
  },
  {
    id: 13,
    img: "https://i.ytimg.com/vi/PgexmiPps2o/maxresdefault.jpg",
    title: "Binary Search Tree",
    tag:"Binary Search Tree",
  },
  {
    id: 14,
    img: "https://i.ytimg.com/vi/-urNrIAQnNo/maxresdefault.jpg",
    title: "Trie",
    tag:"Trie",
  }
  ,
  {
    id: 15,
    img: "https://i.ytimg.com/vi/xztU7lmDLv8/maxresdefault.jpg",
    title: "Segment Tree",
    tag:"Segment Tree",
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