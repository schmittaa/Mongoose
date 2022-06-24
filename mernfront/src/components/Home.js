import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch}  from 'react-redux'
import {toggleFalse} from '../redux/actions/contactActions'

function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleToggleFalse=()=>{
    dispatch(toggleFalse());
    navigate('/ManageContacts');
  }

  return (
    <div>
      <div className="divindex">
        <h1>W E L C O M E - T O - O U R - B L O G !</h1>
      </div>
      <h3>Here you can write your contacts and manage them</h3>
      <h1 style={{textAlign:"Center", color:"rgba(145, 189, 23, 0.466)", paddingTop: "0px"}}>-- ---  -- ---  --  ---  --  ---  --  ---  --  ---  --</h1>
      <Button className='btnhome' onClick={handleToggleFalse} variant="outline-secondary" type="submit">
          Add a new contact
        </Button>
        <Link to='/listContact' ><Button onClick={handleToggleFalse} variant="outline-secondary" type="submit">
          Edit an existed contact
        </Button></Link>
    </div>
  )
}

export default Home