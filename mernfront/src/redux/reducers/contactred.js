import { Get_Contact, Get_Contacts, TOGGLE_FALSE, TOGGLE_TRUE } from "../types/contactTypes"

const initialstate = {
  contacts: [],
  contact: null,
  loading: true,
  edit : false
}


function contactred(state = initialstate, { type, payload }) {
  switch (type) {
    case Get_Contacts:
      return {
        ...state,
        contacts: payload,
        loading: false
      };  
    case Get_Contact :
      return{
        ...state,
        contact :payload,
        loading : false   
      };
      case TOGGLE_TRUE:
        return {
          ...state,
          edit: true,
        };
      case TOGGLE_FALSE:
        return {
          ...state,
          edit: false,
        };

default:
  {return state;}
}
}

export default contactred