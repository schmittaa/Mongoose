import React, { useEffect } from 'react'
import ContactCard from './ContactCard'
import { useDispatch, useSelector } from 'react-redux';
import {getContacts }from '../redux/actions/contactActions'


function ListContact() {
const contacts = useSelector(state=>state.contactred.contacts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch])
  return (
    <div className="divCard">
      
      {
        contacts.map((contact) => (<ContactCard contact={contact} key={contact._id}/>))
      }
      <h3></h3>
    </div>
  )
}

export default ListContact