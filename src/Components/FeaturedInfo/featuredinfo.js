import Axios from 'axios';
import React, { useEffect, useState } from 'react';

import "./featuredinfo.css";
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
import { Modal, Table, Button, } from "react-bootstrap"


function Featuredinfo(props) {

    //     let [responseData, setResponseData] = useState([]);

    //     useEffect(()=>{
    //       Axios.get('http://localhost:3000/loc')
    //       .then(response=>{
    //           if(response.data.success){
    //             setResponseData(response.data.cardData)
    //               console.log(responseData)
    //           }else {
    //               alert('Unable to get Data')
    //           }
    //       }) 
    //       .catch((error) => {
    //         console.log(error)
    //       })
    //   },[])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">{props.title}</span>
                <div className="featuredMoneyContainer">
                    <span className="featureMoney">{props.value}</span>
                    <span className="featureMoneyRate">
                        <ArrowDownwardSharpIcon className="featuredicon negative" />
                    </span>
                </div>
                <div>
                    <div className="modals">
                        <a className="anc" variant="light" onClick={handleShow}>Compared To Last Month</a>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header >
                                <Modal.Title>{props.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Table striped bordered hover className="table">

                                    <thead className="th">
                                        <tr>
                                            <th>#</th>
                                            <th>Area Name</th>
                                            <th>{props.title} This Month</th>
                                            <th>Compared To last Month</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{props.id}</td>
                                            <td>{props.areaname}</td>
                                            <td>{props.value}</td>
                                            <td>{props.comparedtolastmonth}</td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button style={{ backgroundColor: "#041738" }} variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featuredinfo
