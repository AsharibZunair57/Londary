import React, { useState,useEffect } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input,Switch,Upload } from 'antd';
import Ridertable from "./Ridertable"
import './riders.css'
import axios from "axios"
import { UploadOutlined } from '@ant-design/icons';

const Riders = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobile: "",
    cnic: "",
    driving_lic_num: "",
    home_address: "",
    vehicle_type: "",
    vehicle_model: "",
    vehicle_reg_num: "",
    working_days: "",
    profile_pic: "",
    area_id: "",
    reg_date: "",
    end_date: "",
    is_active: "false",
    is_online: "false",
    created_on: "",
    created_by: "",
    created_at: "",
    modified_on : "",
    modified_by : "",
    modified_at: "",
   
  });

  const handleChange = e => {
    const { name, value } = e.target
    setInputs({
        ...inputs,
        [name]: value
    });
};

  

  const handleSubmit = e => {
     e.preventDefault();    
  // setErrors(validate(inputs));
};
// function onChange(checked) {
//   setInputs({
//     ...inputs,
//     is_active: (!{is_active})
//   });
// }
// function onChange1(checked) {
//   setInputs({
//     ...inputs,
//     is_online: (!{is_online})
//   });
// }

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
      ><div className='modal-form'>
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
              type="number" placeholder="MOBILE" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="cnic" >
            <Input value={inputs.cnic}
              onChange={handleChange} type="textarea" placeholder="CNIC" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="driving_lic_num" >
            <Input value={inputs.driving_lic_num}
              onChange={handleChange} type="textarea" placeholder="DRIVING_LIC" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="home_address">
            <Input value={inputs.home_address}
              onChange={handleChange} type="textarea" placeholder="HOME_ADDRESS" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="vehicle_type" >
            <Input value={inputs.vehicle_type}
              onChange={handleChange} type="textarea" placeholder="VEHICLE_TYPE" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="vehicle_model">
            <Input value={inputs.vehicle_model}
              onChange={handleChange} type='textarea' placeholder="VEHICLE_MODEL" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="vehicle_reg_num">
            <Input value={inputs.vehicle_reg_num}
              onChange={handleChange} type="textarea" placeholder="VEHICLE_REG_NUM" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="working_days">
            <Input value={inputs.working_days}
              onChange={handleChange} type="textarea" placeholder="WORKING_DAYS" />
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
          <Form.Item name="area_id" >
            <Input value={inputs.area_id}
              onChange={handleChange} type="textarea" placeholder="AREA_ID" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="reg_date">
            <Input value={inputs.reg_date}
              onChange={handleChange} type="Date" placeholder="REG_DATE" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="end_date">
            <Input value={inputs.end_date}
              onChange={handleChange} type="textarea" placeholder="END_DATE" />
          </Form.Item>
        </div>
        {/* <div>
          <Form.Item name="is_active" label="IS_ACTIVE">
            <Switch value={inputs.is_active}
              onChange={handleChange} />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="is_online" label="IS_ONLINE">
            <Switch value={inputs.is_online}
              onChange={handleChange} />
          </Form.Item>
        </div> */}
            <div>
          <Form.Item name="created_on">
            <Input value={inputs.created_on}
              onChange={handleChange} type="textarea" placeholder="CREATED_ON" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="created_by">
            <Input value={inputs.created_by}
              onChange={handleChange} type="textarea" placeholder="CREATED_BY" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="created_at">
            <Input value={inputs.created_at}
              onChange={handleChange} type="textarea" placeholder="CREATED_AT" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="modified_on">
            <Input value={inputs.modified_on}
              onChange={handleChange} type="textarea" placeholder="MODIFIED_ON" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="modified_by">
            <Input value={inputs.modified_by}
              onChange={handleChange} type="textarea" placeholder="MODIFIED_BY" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="modified_at">
            <Input value={inputs.modified_at}
              onChange={handleChange} type="textarea" placeholder="MODIFIED_AT" />
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
    axios.post(`https://londry-backend.herokuapp.com/create_rider`,  values
    )
      .then(res => {
        console.log(res);
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
        Rider
      </Button>
      <Riders
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <Ridertable/>
    </div>
    
  );
};

export default Orders;