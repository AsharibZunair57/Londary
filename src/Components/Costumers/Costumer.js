import React, { useState,useEffect } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input,Switch,Upload } from 'antd';
import './Costumer.css'
import axios from "axios"
import { UploadOutlined } from '@ant-design/icons';
import Costumertable from "../Costumers/Costumertable"

const Costumers = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobile: "",
    pincode: "",
    pincode_dt: "",
    modified_at: "",
    modified_on: "",
    signup_at: "",
    signup_dt: "",
    is_freezed: "false",
    is_active: "false",
    last_os: "",
    last_mobile_model: "",
    last_mac: "",
    last_ip: "",
    last_gps: "",
    geo_id: "",
    profile_pic: "",
    
   
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

//   const[options, setOptions] = useState([]);

//   useEffect(() => {
//     axios.get('https://londry-backend.herokuapp.com/')
//         .then(response => {
//             if (response) {
//               setOptions(response.data)
//             } else {
//                 alert('Unable to get Data')
//             }
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }, [])

  const handleSubmit = e => {
    e.preventDefault();

    
  // setErrors(validate(inputs));
};

  return (
    
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={()=>{
        form.resetFields();
        onCancel();
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        className='form-inline'
        form={form}
        layout='inline'
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
          <div className='modal-form'>
        <div>
        <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input value={inputs.name}
              onChange={handleChange} placeholder='Name' />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="email" rules={[{ type: 'email', message: 'please enter valid email' },]}>
            <Input value={inputs.email}
              onChange={handleChange} type="email" placeholder='Email' />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="mobile" >
            <Input value={inputs.mobile}
              onChange={handleChange}
              type="textarea" placeholder="MOBILE" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="pincode" >
            <Input value={inputs.pincode}
              onChange={handleChange} type="textarea" placeholder="PINCODE" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="pincode_dt" >
            <Input value={inputs.pincode_dt}
              onChange={handleChange} type="textarea" placeholder="PINCODE_DT" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="modified_at">
            <Input value={inputs.modified_at}
              onChange={handleChange} type="textarea" placeholder="MODIFIED_AT" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="modified_on" >
            <Input value={inputs.modified_on}
              onChange={handleChange} type="textarea" placeholder="MODIFIED_ON" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="signup_at">
            <Input value={inputs.signup_at}
              onChange={handleChange} type='time' placeholder="SIGNUP_AT" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="signup_dt">
            <Input value={inputs.signup_dt}
              onChange={handleChange} type="textarea" placeholder="SIGNUP_DT" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="is_freezed" label="IS_FREEZED">
            <Switch value={inputs.is_freezed} />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="profile_pic" label="PROFILE_PIC" >
            < Upload value={inputs.profile_pic}
              onChange={handleChange} type='file' listType="picture">
              <UploadOutlined />
            </Upload>
          </Form.Item>
        </div>
       <div>
          <Form.Item name="is_active" label="IS_ACTIVE">
            <Switch value={inputs.is_active} />
          </Form.Item>
        </div>
      
        <div>
          <Form.Item name="last_os">
            <Input value={inputs.last_os}
              onChange={handleChange} type="textarea" placeholder="LAST_OS" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="last_mobile_model">
            <Input value={inputs.last_mobile_model}
              onChange={handleChange} type="textarea" placeholder="LAST_MOBILE_MODULE" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="last_mac">
            <Input value={inputs.last_mac}
              onChange={handleChange} type="textarea" placeholder="LAST_MAC" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="last_ip">
            <Input value={inputs.last_ip}
              onChange={handleChange} type="textarea" placeholder="LAST_IP" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="last_gps">
            <Input value={inputs.last_gps}
              onChange={handleChange} type="textarea" placeholder="LAST_GPS" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="geo_id">
            <Input value={inputs.geo_id}
              onChange={handleChange} type="textarea" placeholder="GEO_ID" />
          </Form.Item>
        </div>
        </div>
      
     </Form>
    </Modal>
  );
};

const Orders = () => {
  const [visible, setVisible] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    axios.post(`https://londry-backend.herokuapp.com/create_customer`, values)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    setVisible(false);
  };
  return (
    <div className='vendor-modal'>
      <Button
      className="btn"
        type="primary"
        size='large'
        shape='round'
        onClick={() => {
          setVisible(true);
        }}
      >
        Costumer
      </Button>
      <Costumers
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <Costumertable/>
    </div>
    
  );
};

export default Orders;