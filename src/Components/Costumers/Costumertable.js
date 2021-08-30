import { Table , Space } from 'antd';
import { EditOutlined , DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import './Costumer.css'
import { useState, useEffect } from 'react';
import axios from 'axios'

const Costumertable = ()=>{

  const history = useHistory();

  const [res, setres] = useState([]);
    
  useEffect(()=>{
    axios.get('https://londry-backend.herokuapp.com/all_customer')
    .then(response=>{
        if(response.data.success){
          setres(response.data.customer)
            console.log(response.data.customer)
        }else {
            alert('Unable to get chart Data')
        }
    }) 
    .catch((error) => {
      console.log(error)
    })
},[])   

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
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
      history.push('/customersdetails')} 
  })}
  />
  </div>
  )
}
export default Costumertable;