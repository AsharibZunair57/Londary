import { Descriptions, Avatar ,Modal , Button} from 'antd';
import React,{useState} from 'react';
import './vendor.css'
import VendorItem from './VendorItem';
import VendorPromo from './VendorPromo';
import VendorEmp from './VendorEmp';
import VendorBranches from './VendorBracnches';
import VendorBanks from './VendorBanks';
import TableBanks from './tables/TableBanks';
import TableEmp from './tables/TableEmp';
import TableBranches from './tables/TableBranches';
import TableItems from './tables/TableItems';
import TablePromo from './tables/TablePromo';

const VendorDetails = () => {
 
    // const status = (value)=>{

    //   if(value===true)return <span> yes </span>
    //   else return <span> no </span>
    // }
    return(
      <div className='main-body'>
        <div className='avatar'>
        <Avatar size={250} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <div className = 'vendor'>
        <div className ='vendor-item'>
        <VendorItem/>
        </div>
        <div className='vendor-promo'>
        <VendorPromo/>
        </div>
        <div className='vendor-EMP'>
        <VendorEmp/>
        </div>
        <div className='vendor-branches'>
        <VendorBranches/>
        </div>
        <div className='vendor-branches'>
        <VendorBanks/>
        </div>
        </div>
        </div>
      <Descriptions title="Vendor Info" className='discription'>
       <Descriptions.Item label="UserName">muneeb</Descriptions.Item>
      <Descriptions.Item label="Email">Muneeb ur rehman</Descriptions.Item>
      <Descriptions.Item label="MOBILE">032098765</Descriptions.Item>
      <Descriptions.Item label="CNIC">123456789012</Descriptions.Item>
      <Descriptions.Item label="BUSINESS_NAME">abcd</Descriptions.Item>
      <Descriptions.Item label="BUSINESS_ADDRESS">1234</Descriptions.Item>
      <Descriptions.Item label="BUSINESS_GPS">1234</Descriptions.Item>
      <Descriptions.Item label="BUSINESS_ST_HOURS">123abc</Descriptions.Item>
      <Descriptions.Item label="BUSINESS_EN_HOURS">5 hr</Descriptions.Item>
      <Descriptions.Item label="BUSINESS_DAYS">6</Descriptions.Item>
      <Descriptions.Item label="BUSINESS_GEO_ID">5</Descriptions.Item>
      <Descriptions.Item label="BUSINESS_WEBSITE">www.abc.com</Descriptions.Item>
      <Descriptions.Item label="REG_DATE">1/1/2021</Descriptions.Item>
      <Descriptions.Item label="END_DATE">11/2/2020</Descriptions.Item> 
      <Descriptions.Item label="IS_ACTIVE">yes</Descriptions.Item>
      <Descriptions.Item label="IS_ONLINE">yes</Descriptions.Item>
      <Descriptions.Item label="POLICT">ABC...</Descriptions.Item>
      <Descriptions.Item label="TERMS">ABC...</Descriptions.Item>
      <Descriptions.Item label="CREATED_ON">11/2/2020</Descriptions.Item>
      <Descriptions.Item label="CREATED_BY">muneeb</Descriptions.Item>
      <Descriptions.Item label="CREATED_AT">muneeb</Descriptions.Item>
      <Descriptions.Item label="MODIFIED_ON">1/2/2021</Descriptions.Item>
      <Descriptions.Item label="MODIFIED_BY">ABC..</Descriptions.Item>
      <Descriptions.Item label="MODIFIED_AT">ABC..</Descriptions.Item>
    </Descriptions>
    <div>
    <TableBanks/>
    </div>
    <div>
    <TableEmp/>
    </div>
    <div>
    <TableBranches/>
    </div>
    <div>
    <TableItems/>
    </div>
    <div>
    <TablePromo/>
    </div>
    </div>
    )

}

export default VendorDetails;