import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './vendor.css';
import { Button, Modal, Form, Input,Switch,Upload } from 'antd';
import axios from "axios"

const VendorCreateBranches = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  
  const [inputs, setInputs] = useState({
    businessname: "",
    businessaddress: "",
    isonline: "",
    businessgps: "",
    businesssthours: "",
    businessenhours: "",
    businessdays: "",
    businesslogo: "",
    businesswebsite: "",
    regdate: "",
    enddate: "",
    policy: "",
    terms: "",
    createdon: "",
    createdby: "",
    createdat: "",
    modifiedon: "",
    modifiedby: "",
    modifiedat: ""

  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios.post(`http://localhost:3000/Add/Login`, { inputs })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

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
        <Form.Item name="BUSINESS_NAME">
          <Input value={inputs.businessname}
              onChange={handleChange} type='text' placeholder='BUSINESS NAME'/>
        </Form.Item>
        </div>
        <div>
        <Form.Item name="BUSINESS_ADDRESS" >
          <Input value={inputs.businessaddress}
              onChange={handleChange} type='text' placeholder="BUSINESS ADDRESS" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="IS_ACTIVE" label="IS_ACTIVE">
          <Switch/>
        </Form.Item>
        </div>
        <div>
        <Form.Item value={inputs.isonline}
              onChange={handleChange} name="IS_ONLINE" label="IS_ONLINE">
          <Switch/>
        </Form.Item>
        </div>
        <div>
        <Form.Item name="BUSINESS_GPS">
          <Input value={inputs.businessgps}
              onChange={handleChange} type='text' placeholder="BUSINESS GPS" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="BUSINESS_ST_HOURS">
          <Input value={inputs.businesssthours}
              onChange={handleChange} type='time' placeholder="BUSINESS ST HOURS" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="BUSINESS_EN_HOURS">
          <Input value={inputs.businessenhours}
              onChange={handleChange} type='time' placeholder="BUSINESS EN HOURS" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="BUSINESS_DAYS">
          <Input value={inputs.businessdays}
              onChange={handleChange} type='text' placeholder="BUSINESS DAYS" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="BUISNESS_LOGO">
          <Input value={inputs.businesslogo}
              onChange={handleChange} type='text' placeholder="BUISNESS LOGO" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="BUSINESS_WEBSITE">
          <Input value={inputs.businesswebsite}
              onChange={handleChange} type='text' placeholder="BUSINESS WEBSITE" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="REG_DATE">
          <Input value={inputs.regdate}
              onChange={handleChange} type='date' placeholder="REG DATE" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="END_DATE">
          <Input value={inputs.enddate}
              onChange={handleChange} type='date' placeholder="END DATE" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="POLICY">
          <Input  value={inputs.policy}
              onChange={handleChange} type='text' placeholder="POLICY" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="TERMS">
          <Input  value={inputs.terms}
              onChange={handleChange} type='text' placeholder="TERMS" />
        </Form.Item>
        </div>
        <div>
        <Form.Item  name="CREATED_ON">
          <Input  value={inputs.createdon}
              onChange={handleChange} type='date' placeholder="CREATED ON" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="CREATED_BY">
          <Input  value={inputs.createdby}
              onChange={handleChange} type='text' placeholder="CREATED_BY" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="CREATED_AT">
          <Input  value={inputs.createdat}
              onChange={handleChange} type='text' placeholder="CREATED_AT" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="MODIFIED_ON">
          <Input  value={inputs.modifiedon}
              onChange={handleChange} type='date' placeholder="MODIFIED ON" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="MODIFIED_BY">
          <Input  value={inputs.modifiedby}
              onChange={handleChange} type='text' placeholder="MODIFIED BY" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="MODIFIED_AT">
          <Input  value={inputs.modifiedat}
              onChange={handleChange} type='text' placeholder="MODIFIED AT" />
        </Form.Item>
        </div>
        </div>
      </Form>
    </Modal>
    
    
  );
};

const VendorBranches = () => {
  const [visible, setVisible] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };
  return (
    <div>
      <Button
        type="primary"
        size='large'
        shape='round'
        onClick={() => {
          setVisible(true);
        }}
      >
        Vendor Branches
      </Button>
      <VendorCreateBranches
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
    
  );
};

export default VendorBranches;