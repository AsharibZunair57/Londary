import React, { useEffect,useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input,Switch,Upload } from 'antd';
import OrderTable from'./OrderTable';
import { axios } from "axios";
import { UploadOutlined } from '@ant-design/icons';
import './order.css'

const OrderForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const [inputs, setInputs] = useState({
    order_id: "",
    costumer_id: "",
    vendor_id: "",
    order_date: "",
    order_amount: "",
    order_gp: "",
    payment_type_id: "",
    order_type: "",
    order_status_id: "",
    pickup_date: "",
    time_slab_id: "",
    delivery_time_id: "",
    delivery_date: "",
    last_delivery_date: "",
    delivery_notes: "",
    is_completed: "",
    completion_date: "",
    is_cancelled: "",
    cancellation_date: "",
    modified_on : "",
    modified_by : "",
    modified_at: "",
   
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const[options, setOptions] = useState([]);

  useEffect(() => {
    axios.get('https://londry-backend.herokuapp.com/')
        .then(response => {
            if (response) {
              setOptions(response.data)
            } else {
                alert('Unable to get Data')
            }
        })
        .catch((error) => {
            console.log(error)
        })
}, [])

  const handleSubmit = e => {
    e.preventDefault();

    axios.post(`https://londry-backend.herokuapp.com/`, { inputs })
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
            name="NAME"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input value={inputs.order_id}
              onChange={handleChange} placeholder='order id' />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="Email" rules={[{ type: 'email', message: 'please enter valid email' },]}>
            <Input value={inputs.costumer_id}
              onChange={handleChange} type="email" placeholder='Email' />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="VENDOR_ID" >
            <Input value={inputs.vendor_id}
              onChange={handleChange}
              type="textarea" placeholder="VENDOR_ID" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="ORDER_DATE" >
            <Input value={inputs.order_date}
              onChange={handleChange} type="textarea" placeholder="ORDER_DATE" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="ORDER_AMOUNT" >
            <Input value={inputs.order_amount}
              onChange={handleChange} type="textarea" placeholder="ORDER_AMOUNT" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="ORDER_GP">
            <Input value={inputs.order_gp}
              onChange={handleChange} type="textarea" placeholder="ORDER_GP" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="PAYMENT_TYPE_ID" >
            <Input value={inputs.payment_type_id}
              onChange={handleChange} type="textarea" placeholder="PAYMENT_TYPE_ID" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="ORDER_TYPE">
            <Input value={inputs.order_type}
              onChange={handleChange} type='time' placeholder="ORDER_TYPE" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="ORDER_STATUS_ID">
            <Input value={inputs.order_status_id}
              onChange={handleChange} type="textarea" placeholder="ORDER_STATUS_ID" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="PICKUP_DATE">
            <Input value={inputs.pickup_date}
              onChange={handleChange} type="textarea" placeholder="PICKUP_DATE" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="PROFILE_PIC" label="PROFILE_PIC" >
            < Upload value={inputs.profile_pic}
              onChange={handleChange} type='file' listType="picture">
              <UploadOutlined />
            </Upload>
          </Form.Item>
        </div>
        <div>
          <Form.Item name="BUSINESS_GEO_ID">
          {/* <MultiSelect
        options={options}
        value={inputs.geo_masterId}
        onChange={handleChange}
        placeholder="BUSINESS_GEO_ID"
        type="textarea"
      
      /> */}
          
          </Form.Item>
        </div>
        <div>
          <Form.Item name="TIME_SLAB_ID" >
            <Input value={inputs.time_slab_id}
              onChange={handleChange} type="textarea" placeholder="TIME_SLAB_ID" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="DELIVERY_TIME_ID">
            <Input value={inputs.delivery_time_id}
              onChange={handleChange} type="textarea" placeholder="DELIVERY_TIME_ID" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="DELIVERY_DATE">
            <Input value={inputs.delivery_date}
              onChange={handleChange} type="textarea" placeholder="DELIVERY_DATE" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="LAST_DELIVERY_DATE">
            <Input value={inputs.last_delivery_date}
              onChange={handleChange} type="textarea" placeholder="LAST_DELIVERY_DATE" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="DELIVERY_NOTES">
            <Input value={inputs.delivery_notes}
              onChange={handleChange} type="textarea" placeholder="DELIVERY_NOTES" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="IS_COMPLETED" label="IS_COMPLETED">
            <Switch value={inputs.is_completed}
              onChange={handleChange} />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="COMPLETION_DATE">
            <Input value={inputs.completion_date}
              onChange={handleChange} type="textarea" placeholder="COMPLETION_DATE" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="IS_CANCELLED" label="IS_CANCELLED">
            <Switch value={inputs.is_cancelled}
              onChange={handleChange} />
          </Form.Item>
        </div>
            <div>
          <Form.Item name="CANCELLATION_DATE">
            <Input value={inputs.cancellation_date}
              onChange={handleChange} type="textarea" placeholder="CANCELLATION_DATE" />
          </Form.Item>
        </div>
          <div>
          <Form.Item name="MODIFIED_ON">
            <Input value={inputs.modified_on}
              onChange={handleChange} type="textarea" placeholder="MODIFIED_ON" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="MODIFIED_BY">
            <Input value={inputs.modified_by}
              onChange={handleChange} type="textarea" placeholder="MODIFIED_BY" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="MODIFIED_AT">
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
        Order
      </Button>
      <OrderForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <OrderTable/>
    </div>
    
  );
};

export default Orders;