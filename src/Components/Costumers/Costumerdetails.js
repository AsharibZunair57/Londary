import { Descriptions, Avatar ,Modal , Button} from 'antd';
import React,{useState} from 'react';
import './Costumer.css'

const Costumerdetails =()=>{
 
    const status = (value)=>{

      if(value===true)return <span> yes </span>
      else return <span> no </span>
    }
    return(
      <div className='main-body'>
        <div className='avatar'>
        <Avatar size={250} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </div>
        <Descriptions title="order Info" className='discription'>
       <Descriptions.Item label="UserName">muneeb</Descriptions.Item>
      <Descriptions.Item label="Email">Muneeb ur rehman</Descriptions.Item>
      <Descriptions.Item label="MOBILE">032098765</Descriptions.Item>
      <Descriptions.Item label="CNIC">123456789012</Descriptions.Item>
      <Descriptions.Item label="DRIVING_LICENSE_NUMBER">1234</Descriptions.Item>
      <Descriptions.Item label="HOME_ADDRESS">1234</Descriptions.Item>
      <Descriptions.Item label="VEHICLE_TYPE">1234</Descriptions.Item>
      <Descriptions.Item label="VEHICLE_MODEL">123abc</Descriptions.Item>
      <Descriptions.Item label="BUSINESS_EN_HOURS">5 hr</Descriptions.Item>
      <Descriptions.Item label="VEHICLE_REG_NUM">12334</Descriptions.Item>
      <Descriptions.Item label="WORKING_DAYS">5</Descriptions.Item>
      <Descriptions.Item label="AREA_ID">12332</Descriptions.Item>
      <Descriptions.Item label="BUSINESS_WEBSITE">www.abc.com</Descriptions.Item>
      <Descriptions.Item label="REG_DATE">11/2/2020</Descriptions.Item> 
      <Descriptions.Item label="END_DATE">11/2/2020</Descriptions.Item>
      <Descriptions.Item label="IS_ACTIVE">yes</Descriptions.Item>
      <Descriptions.Item label="IS_ONLINE">yes</Descriptions.Item>
      <Descriptions.Item label="CREATED_ON">11/2/2020</Descriptions.Item>
      <Descriptions.Item label="CREATED_BY">muneeb</Descriptions.Item>
    </Descriptions>
    </div>
    
    )

}

export default Costumerdetails;