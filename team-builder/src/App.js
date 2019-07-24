import React, { useState } from 'react';
import './App.css';
import Form from "./TeamData/Form"

const teamdatalist = [  
  {
      name: "John Doe",
      email: "johndoe@gmail.com",
      role: "backend engineer"

  },

  {
      name: "Bob Billy",
      email: "bobbilly@gmail.com",
      role: "frontend engineer"

  },

  {
      name: "Mary Sue",
      email: "marusue@gmail.com",
      role: "designer"

  }
]

function App() {
  console.log(teamdatalist)

  const [members, setMembers ] = useState(teamdatalist)


  return (
    <div className="App">

      { teamdatalist.map((member, index) => (
          <div className='member-container' key={index}>
            <h3>Name: {member.name}</h3>
            <h4>Role: {member.role}</h4>
            <p>Email: {member.email}</p>
            <button>Edit</button>
          </div>
      ))}
      <br/>
      <Form members={members} setMembers ={setMembers}/>

    </div>
  );
}

export default App;
