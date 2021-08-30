import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './vendor.css';
import { Button, Modal, Form, Input,Switch,Upload } from 'antd';

const VendorCreateEmp = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
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
        <Form.Item name="EMP_NAME">
          <Input type='text' placeholder='EMP NAME'/>
        </Form.Item>
        </div>
        <div>
        <Form.Item name="EMP_CNIC" >
          <Input type='text' placeholder="EMP CNIC" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="IS_ACTIVE" label="IS_ACTIVE">
          <Switch/>
        </Form.Item>
        </div>
        <div>
        <Form.Item name="EMP_PIN">
          <Input type='text' placeholder="EMP PIN" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="CREATED_ON">
          <Input type='date' placeholder="CREATED_ON" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="CREATED_BY">
          <Input type='text' placeholder="CREATED_BY" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="MODIFIED_ON">
          <Input type='date' placeholder="MODIFIED_ON" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="MODIFIED_BY">
          <Input type='text' placeholder="MODIFIED_BY" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="MODIFIED_AT">
          <Input type='text' placeholder="MODIFIED_AT" />
        </Form.Item>
        </div>
        </div>
      </Form>
    </Modal>
    
    
  );
};

const VendorEmp = () => {
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
        Vendor Emp
      </Button>
      <VendorCreateEmp
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
    
  );
};

export default VendorEmp;