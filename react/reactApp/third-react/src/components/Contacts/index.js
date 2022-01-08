import {useState,useEffect} from 'react'
import Form from "./Form";
import List from "./List";
import "./styles.css"

function Contacts() {
    const [contacts,setContacts]=useState([
        {
            fullname:"Samet",
            phone_number:5348882200
        },{
            fullname:"Cansu",
            phone_number:5341112222
        },{
            fullname:"Arel",
            phone_number:5343334444
        }
    ]);

    useEffect(()=>{
        console.log(contacts)
    },[contacts])
    return (
        <div id="container">
            <h1>Contact APP</h1>
            <List contacts={contacts}></List>
            <Form addContact={setContacts} contacts={contacts}></Form>
        </div>
    )
}

export default Contacts
