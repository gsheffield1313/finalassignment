import { useState } from "react";

export default function Contact(){

    const [firstName,setFirstName] = useState('');
    const [eMail,seteMail]= useState('');
    const postData= () =>{
        console.log(firstName);
        console.log(eMail);
    }

    return (
        <div>
            <h1>Contact</h1>
            <h2>Please fill in the following below</h2>
            <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
  <label for="email" type="submit" value="submit">Email Address</label>
  <input type="email" id="email" size="30" required> 
  </input> 
  
</form>
        </div>
    )
}