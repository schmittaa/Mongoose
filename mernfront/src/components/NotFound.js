import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <img className='divindex' src='../../404.png' alt="" />
      <h3>The requested page is not found !</h3>

        <Link to="/" >
          <Button style={{ marginLeft: "45%", marginTop: "30px" }} variant="outline-secondary" type="submit">
            Back Home
          </Button>
        </Link>
    </div>
  )
}

export default NotFound