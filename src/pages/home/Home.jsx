import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

function Home() {
  const context = useContext(myContext);
  const {state, color} = context; 
  return (
   <Layout>
    <h1>Name: {state.name}</h1>
    <h1>Roll No. : {state.rollno}</h1>
    <h1>My Color: {color}</h1>
   </Layout>
  )
}

export default Home