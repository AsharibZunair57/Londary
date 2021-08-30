import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './vendor.css';
import { Button, Modal, Form, Input} from 'antd';
import axios from "axios"

const VendorCreateBanks = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const [inputs, setInputs] = useState({
    accountnum: "",
    ibannum: "",
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
        <Form.Item name="ACCOUNT_NUM">
          <Input value={inputs.accountnum}
              onChange={handleChange} type='num' placeholder='ACCOUNT NUM'/>
        </Form.Item>
        </div>
        <div>
        <Form.Item name="IBAN_NUM" >
          <Input value={inputs.ibannum}
              onChange={handleChange} type='num' placeholder="IBAN NUM" />
        </Form.Item>
        </div>
        </div>
      </Form>
    </Modal>
    
    
  );
};

const VendorBanks = () => {
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
        Vendor Banks
      </Button>
      <VendorCreateBanks
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
    
  );
};

export default VendorBanks;