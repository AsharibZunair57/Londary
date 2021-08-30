import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input, Switch, Upload, Select } from 'antd';
import OrderTable from './OrderTable';
import Axios from 'axios'
import { UploadOutlined } from '@ant-design/icons';
import './order.css'

const OrderForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const { Option } = Select;

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
    is_completed: "false",
    completion_date: "",
    is_cancelled: "false",
    cancellation_date: "",
    modified_on: "",
    modified_by: "",
    modified_at: "",

  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const [res, setres] = useState([]);
  const [stat, setstat] = useState([]);

  useEffect(() => {
    Axios.get('https://londry-backend.herokuapp.com/all_customer')
      .then(response => {
        if (response.data.success) {
          setres(response.data.customer)
        } else {
          alert('Unable to get chart Data')
        }
      })
      .catch((error) => {
        console.log(error)
      })
    Axios.get('http://localhost:3000/status_order')
      .then(response => {
        if (response) {
          setstat(response.data)
        } else {
          alert('Unable to get orderstatus Data')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    // axios.post(`https://londry-backend.herokuapp.com/`, { inputs })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    // setErrors(validate(inputs));
  };

  return (

    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={() => {
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
            <Form.Item name="costumer_id" rules={[
              {
                required: true,
                message: 'Please input customer name!',
              },
            ]}>
              <Select placeholder='Costumer'>
                <Option value="⬇️ Select a fruit ⬇️"> -- Select Customer -- </Option>
                {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
                */}
                {res.map((res) => <Option value={res._id}>{res.name}</Option>)}
              </Select>
              {/* <Input value={inputs.costumer_id}
                onChange={handleChange} type="email" placeholder='Email' /> */}
            </Form.Item>
          </div>
          <div>
            <Form.Item name="vendor_id" >
              <Select placeholder='VENDOR'>
                <Option value="⬇️ Select a fruit ⬇️"> -- Select Vendor -- </Option>
                {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
                */}
                {res.map((res) => <Option value={res._id}>{res.name}</Option>)}
              </Select>
            </Form.Item>
          </div>
          <div>
            <Form.Item name="order_date" >
              <Input value={inputs.order_date}
                onChange={handleChange} type="textarea" placeholder="ORDER_DATE" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="order_amount" >
              <Input value={inputs.order_amount}
                onChange={handleChange} type="textarea" placeholder="ORDER_AMOUNT" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="order_gp">
              <Input value={inputs.order_gp}
                onChange={handleChange} type="textarea" placeholder="ORDER_GP" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="payment_type_id" >
              <Input value={inputs.payment_type_id}
                onChange={handleChange} type="textarea" placeholder="PAYMENT_TYPE" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="order_type">
              <Input value={inputs.order_type}
                onChange={handleChange} type='time' placeholder="ORDER_TYPE" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="order_status_id">
            <Select placeholder='Order Status'>
                <Option value="⬇️ Select a fruit ⬇️"> -- Select a Status -- </Option>
                {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
                */}
                {stat.map((res) => <Option value={res.status_order}>{res.status_order}</Option>)}
              </Select>
            </Form.Item>
          </div>
          <div>
            <Form.Item name="pickup_date">
              <Input value={inputs.pickup_date}
                onChange={handleChange} type="textarea" placeholder="PICKUP_DATE" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="time_slab_id" >
              <Input value={inputs.time_slab_id}
                onChange={handleChange} type="textarea" placeholder="TIME_SLAB_ID" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="delivery_time_id">
              <Input value={inputs.delivery_time_id}
                onChange={handleChange} type="textarea" placeholder="DELIVERY_TIME_ID" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="delivery_date">
              <Input value={inputs.delivery_date}
                onChange={handleChange} type="textarea" placeholder="DELIVERY_DATE" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="last_delivery_date">
              <Input value={inputs.last_delivery_date}
                onChange={handleChange} type="textarea" placeholder="LAST_DELIVERY_DATE" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="delivery_notes">
              <Input value={inputs.delivery_notes}
                onChange={handleChange} type="textarea" placeholder="DELIVERY_NOTES" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="is_completed" label="IS_COMPLETED">
              <Switch />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="completion_date">
              <Input value={inputs.completion_date}
                onChange={handleChange} type="textarea" placeholder="COMPLETION_DATE" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="is_cancelled" label="IS_CANCELLED">
              <Switch />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="cancellation_date">
              <Input value={inputs.cancellation_date}
                onChange={handleChange} type="textarea" placeholder="CANCELLATION_DATE" />
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
    Axios.post(`https://londry-backend.herokuapp.com/create_order`, values
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
        Order
      </Button>
      <OrderForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <OrderTable />
    </div>

  );
};

export default Orders;