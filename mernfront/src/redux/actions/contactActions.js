import axios from 'axios';
import {Get_Contact, Get_Contacts, TOGGLE_FALSE, TOGGLE_TRUE}  from '../types/contactTypes';

//get contact
export const getContacts =()=> async(dispatch)=>{
try {
    const res = await axios.get('http://localhost:5000/contacts/allContacts')
    dispatch({type:Get_Contacts, payload :res.data.contacts})
} catch (error) {
    console.log(error)
}
}
//add 
export const addContacts =(dataObj)=> async(dispatch)=>{
    try {
    await axios.post('http://localhost:5000/contacts/addContact', dataObj)
        dispatch(getContacts())
    } catch (error) {
        console.log("erreur d'ajout",error)
    }
    }

//remove
export const removeContact =(id)=> async(dispatch)=>{
    console.log(id)
    try {
    await axios.delete(`http://localhost:5000/contacts/deleteContact/${id}`)
        dispatch(getContacts())
    } catch (error) {
        console.log("erreur de suppression",error)
    }
    }

//update


export const toggleTrue = () => {
    return {
      type: TOGGLE_TRUE,
    };
  };
  export const toggleFalse = () => {
    return {
      type: TOGGLE_FALSE,
    };
  };
  export const getContact = (id) => async (dispatch) => {
      console.log(id)
    try {
      const res = await axios.get(`http://localhost:5000/contacts/oneContact/${id}`);
      dispatch({
        type: Get_Contact,
        payload: res.data.contact,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updateContact =(id, dataObj)=> async(dispatch)=>{
   
    try {
    await axios.put(`http://localhost:5000/contacts/updateContact/${id}`, dataObj)
        dispatch(getContacts())
    } catch (error) {
        console.log("erreur de mise à jour",error)
    }
    }
