import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { addContacts ,updateContact } from '../redux/actions/contactActions';

function ManageContact() {
  const contact = useSelector((state) => state.contactred.contact);
  const edit = useSelector((state) => state.contactred.edit);
  const [user, setUser] = useState({ name: "", email: "", age: "" });

  useEffect(() => {
    edit ? setUser({
      name: contact?.name,
      email: contact?.email,
      age: contact?.age
    }) :
      setUser({ name: "", email: "", age: "" })
  }, [contact,edit])


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleAdd= (e) => {
    e.preventDefault();
    dispatch(addContacts(user))
    navigate('/listContact')
  }

  const handleUpdate= (e) => {
    e.preventDefault();
    dispatch(updateContact(contact._id,user))
    navigate('/listContact')
  }

  return (
    <div className="FormDiv">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter contact's name "
            value={user.name}
            name="name" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Control type="email" placeholder="Enter contact's email"
            value={user.email}
            name="email" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="number" min={15} placeholder="Enter contact's age "
            value={user.age}
            name="age" onChange={handleChange} />
        </Form.Group>
        <Link to="/" >
          <Button style={{ float: "left" }} variant="outline-success" type="submit">
            Back Home
          </Button></Link>

        {
          edit ? <Button className="bttn"  variant="outline-success" type="submit" onClick={handleUpdate}>
            Edit
          </Button> :
            <Button className="bttn" variant="outline-success" onClick={handleAdd} type="submit">
              Add
            </Button>
        }
      </Form>
    </div>
  )
}

export default ManageContact