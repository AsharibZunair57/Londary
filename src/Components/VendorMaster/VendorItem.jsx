import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './vendor.css';
import { Button, Modal, Form, Input,Switch,Upload } from 'antd';

const VendorCreateItems = ({ visible, onCreate, onCancel }) => {
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
        <Form.Item name="PRICE">
          <Input type='number' placeholder='PRICE'/>
        </Form.Item>
        </div>
        <div>
        <Form.Item name="LAST_PRICE" >
          <Input type='number' placeholder="LAST PRICE" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="IS_HIDDEN" label="IS_HIDDEN">
          <Switch/>
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
        <Form.Item name="CREATED_AT">
          <Input type='text' placeholder="CREATED_AT" />
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

const VendorItem = () => {
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
        Vendor items
      </Button>
      <VendorCreateItems
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
    
  );
};

export default VendorItem;