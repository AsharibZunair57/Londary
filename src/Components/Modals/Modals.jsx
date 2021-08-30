import React, { useState } from "react"
import "./Modals.css"
import { Button, Modal, Table } from 'react-bootstrap'


function Modals() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="modals">
     <Button className="Btn" onClick={handleShow}>Show Data</Button>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Revanue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Area Name</th>
                <th>Revenue This Month</th>
                <th>Compared To last Month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Shah Faisal</td>
                <td>$2000</td>
                <td>Less $1000 this month</td>


              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}





export default Modals
