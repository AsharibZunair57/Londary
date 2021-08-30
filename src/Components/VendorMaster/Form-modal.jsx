import React, { useState,useEffect } from 'react';
import 'antd/dist/antd.css';
import '../../App.css'
import { Button, Modal, Form, Input, Switch, Upload, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import BusinessTable from './BusinessTable';
import Axios from "axios"
const { Option } = Select;


const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobile: "",
    cnic: "",
    bussiness_name: "",
    business_address: "",
    business_gps: "",
    business_st_hours: "",
    business_en_hours: "",
    business_days: "",
    business_logo: "",
    business_website: "",
    reg_date: "",
    end_date: "",
    is_active: "false",
    is_online: "false",
    policy: "",
    terms: "",
    last_ip: "",
    last_mac: "",
    last_mobile_model: "",
    last_os: "",
    created_on: "",
    created_by: "",
    created_at: "",
    modified_on : "",
    modified_by : "",
    modified_at: "",
    geo_masterId : "",
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
    Axios.get('https://londry-backend.herokuapp.com/geo_master')
        .then(response => {
            if (response) {
              setOptions(response.data.geo_master)
              console.log(response.data.geo_master)
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
          <Form.Item name="cnic" >
            <Input value={inputs.cnic}
              onChange={handleChange} type="textarea" placeholder="CNIC" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="bussiness_name" >
            <Input value={inputs.bussiness_name}
              onChange={handleChange} type="textarea" placeholder="BUSSINESS_NAME" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="bussiness_address">
            <Input value={inputs.bussiness_address}
              onChange={handleChange} type="textarea" placeholder="BUSSINESS_ADD" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="bussiness_gps" >
            <Input value={inputs.bussiness_gps}
              onChange={handleChange} type="textarea" placeholder="BUSSINESS_GPS" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="bussiness_st_hours">
            <Input value={inputs.bussiness_st_hours}
              onChange={handleChange} type='time' placeholder="BUSSINESS_ST_HOURS" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="bussiness_en_hours">
            <Input value={inputs.bussiness_en_hours}
              onChange={handleChange} type="textarea" placeholder="BUSSINESS_HOURS" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="bussiness_days
          ">
            <Input value={inputs.bussiness_days}
              onChange={handleChange} type="textarea" placeholder="BUSSINESS_DAYS
              " />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="bussiness_logo" label="PROFILE_PIC" >
            < Upload value={inputs.bussiness_logo}
              onChange={handleChange} type='file' listType="picture">
              <UploadOutlined />
            </Upload>
          </Form.Item>
        </div>
        <div>
          <Form.Item name="bussiness_website">
            <Input value={inputs.bussiness_website}
              onChange={handleChange} type="textarea" placeholder="BUSSINESS_WEBSITE" />
          </Form.Item>
        </div>
        <div>          
          <Form.Item name="policy">
            <Input value={inputs.policy}
              onChange={handleChange} type="textarea" placeholder="POLICY" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="terms
          ">
            <Input value={inputs.terms}
              onChange={handleChange} type="textarea" placeholder="TERMS
              " />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="last_ip"  >
            < Input value={inputs.last_ip} placeholder="LAST_IP"
              onChange={handleChange} type='text' >
            </Input>
          </Form.Item>
        </div>
        <div>
          <Form.Item name="last_mac">
            <Input value={inputs.last_mac}
              onChange={handleChange} type="textarea" placeholder="LAST_MAC" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="last_mobile_model
          ">
            <Input value={inputs.last_mobile_model}
              onChange={handleChange} type="textarea" placeholder="LAST_MOBILE_MODEL
              " />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="last_os"  >
            < Input value={inputs.last_os} placeholder="LAST_OS"
              onChange={handleChange} type='text' >
            </Input>
          </Form.Item>
        </div>
        <div>
          <Form.Item name="geo_masterId">
           <Select placeholder='Geo_Master'>
                <Option value="⬇️ Select a fruit ⬇️"> -- Select Geo -- </Option>
                {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
                */}
                {options.map((res) => <Option value={res._id}>{res.area_name}</Option>)}
              </Select> 
          
          </Form.Item>
        </div>
        <div>
          <Form.Item name="reg_date">
            <Input value={inputs.reg_date} label="REG_DATE"
              onChange={handleChange} type="date" placeholder="REG_DATE" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="end_date">
            <Input value={inputs.end_date} label="END_DATE"
              onChange={handleChange} type="date" placeholder="END_DATE" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="is_active" label="IS_ACTIVE">
            <Switch value={inputs.is_active}
               />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="is_online" label="IS_ONLINE">
            <Switch value={inputs.is_online}
               />
          </Form.Item>
        </div>
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
  </Modal >


);
};

const CollectionsPage = () => {
  const [visible, setVisible] = useState(false);
    const onCreate = (values) => {
      console.log('Received values of form: ', values);
      Axios.post(`https://londry-backend.herokuapp.com/create_vendor`, values
      )
        .then(res => {
          console.log(res);
        })
  
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
        BUSINESS CREATE
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />

      <div className='table'>
        <BusinessTable></BusinessTable>
      </div>
    </div>

  );
};

export default CollectionsPage;