import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../App.css'
import { Button, Modal, Form, Input,Switch } from 'antd';

const VendorCreatePromo = ({ visible, onCreate, onCancel }) => {
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
        <Form.Item name="PROMO_CODE">
          <Input type='text' placeholder='PROMO CODE'/>
        </Form.Item>
        </div>
        <div>
        <Form.Item name="DISCOUNT_TYPE" >
          <Input type='number' placeholder="DISCOUNT TYPE" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="DISCOUNT_PERC" >
          <Input type='number' placeholder="DISCOUNT PERCENT" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="DISCOUNT_AMT" >
          <Input type='number' placeholder="DISCOUNT AMMOUNT" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="DISCOUNT_DESC" >
          <Input type='text' placeholder="DISCOUNT DESC" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="IS_ACTIVE" label="IS ACTIVE">
          <Switch defaultChecked/>
        </Form.Item>
        </div>
        <div>
        <Form.Item name="EXPIRY_DATE">
          <Input type='date' placeholder="EXPIRY DATE" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="CREATED_ON">
          <Input type='date' placeholder="CREATED ON" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="CREATED_BY">
          <Input type='text' placeholder="CREATED BY" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="CREATED_AT">
          <Input type='text' placeholder="CREATED AT" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="MODIFIED_ON">
          <Input type='date' placeholder="MODIFIED ON" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="MODIFIED_BY">
          <Input type='text' placeholder="MODIFIED BY" />
        </Form.Item>
        </div>
        <div>
        <Form.Item name="MODIFIED_AT">
          <Input type='text' placeholder="MODIFIED AT" />
        </Form.Item>
        </div>
        </div>
      </Form>
    </Modal>
    
    
  );
};

const VendorPromo = () => {
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
        Vendor Promo
      </Button>
      <VendorCreatePromo
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
    
  );
};

export default VendorPromo;