import { Table , Space } from 'antd';
import { EditOutlined , DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import './order.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const OrderTable = ()=>{

  const history = useHistory();

  const [res, setres] = useState([]);
    
  useEffect(()=>{
    axios.get('https://londry-backend.herokuapp.com/s_order')
    .then(response=>{
        if(response.data.success){
          setres(response.data.order)
        }else {
            alert('Unable to get chart Data')
        }
    }) 
    .catch((error) => {
      console.log(error)
    })
},[])  

const columns = [
    // {
    //   title: 'Name',
    //   dataIndex: 'name',
    //   key: 'name',
    // },
    {
      title: 'Order Date',
      dataIndex: 'order_date',
      key: 'age',
    },
    {
      title: 'Completeion Date',
      dataIndex: 'completion_date',
      key: 'age',
    },
    {
      title: 'Amount',
      dataIndex: 'order_amount',
    },
    {
      title: 'Status',
      dataIndex: 'Order_status',
      key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <EditOutlined className='edit-icon'/>
            <DeleteOutlined className='delete-icon' />
          </Space>
        ),
      },
  ];
  return(
    <div>
  <Table dataSource={res} columns={columns} pagination={{pageSize:50}} scroll={{ y: 500 }} size='large'
  onRow={(record, recordIndex) => ({
    onClick: () => {
      history.push('/ordersdetails')} 
  })}
  />
  </div>
  )
}
export default OrderTable;