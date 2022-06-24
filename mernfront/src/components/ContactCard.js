import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { getContact, removeContact, toggleTrue } from '../redux/actions/contactActions'

function ContactCard({ contact}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteContact = (e)=>{
    e.preventDefault();
    if (window.confirm("Are you sure ? "))
    {
      dispatch(removeContact(contact._id));
    }
  };

  const handleToggleTrue=()=>{
    dispatch(toggleTrue())
    dispatch(getContact(contact._id))
    navigate('/ManageContacts')
  }

  return (

    <div>
      <Card border="success" className="Card">
        <Card.Header >
          <h6 style={{ color: "green", paddingTop: "20px", display: "inline-flex" }}> {contact.name}</h6>
          <img className="inconuser" alt="card" src="./user.jpeg" /></Card.Header>
        <Card.Body>
          <Card.Text className="Textt">Mail :{contact.email} </Card.Text>
          <Card.Text className="Textt">Age : {contact.age} </Card.Text>
        </Card.Body>
        <footer className="cardFooter">
        <Button className="bttn"  onClick={deleteContact} variant="" type="submit">
            <img src="./remove.png" alt="remove" className='imgCard'/>
          </Button>
          
            <Button variant="" type="submit">
            <img src="./edit.png" alt="edit" onClick={handleToggleTrue} className='imgCard'/>
            </Button>
        </footer>
      </Card>

    </div>

  )
}

export default ContactCard