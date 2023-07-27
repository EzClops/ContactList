import React from "react";
import { useState } from "react";
import { useEffect } from "react";



export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(()=>{
        async function fetchContact() {
            try {
                // console.log(selectedContactId);
                const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/' + selectedContactId);
                const result = await response.json();
                setContact(result);
            } catch (error){
                console.error(error);
            }
        }
        fetchContact()
    },[])
    // console.log(contact);
    return(
        <table>
            <thead>
                <tr>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>email</td>
                    <td>phone</td>
                    <td>website</td>
                </tr>
                <tr>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.website}</td>
                </tr>
            </tbody>
        </table>
    )
}