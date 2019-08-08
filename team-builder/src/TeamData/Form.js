import React, { useState } from 'react';



function Form() {


    const [newMember, setNewMember] = useState({name:"", role:"", email:""}); 
    
    const changeHandler = event => {
        setNewMember({ ...newMember, [event.target.name]: event.target.value});
    };



    const handleSubmit = event => {
        event.preventDefault();
      //  props.setMembers(newMember)
        console.log(newMember.name);
        console.log(newMember.role);
        console.log(newMember.email);
    };

   

    return ( 
      <div className="Form">
        <form onSubmit={event => handleSubmit(event)}>

        <label>
          Name:
          <input type="text" name = 'name' onChange={changeHandler} />
        </label>

        <label>
          Role:
          <input type="text" name = 'role'  onChange={changeHandler} />
        </label>

        <label>
          Email:
          <input type="text" name = 'email' onChange={changeHandler} />
        </label>

        <button>Submit!</button>

        </form>
      </div>
    );
}
  
export default Form;