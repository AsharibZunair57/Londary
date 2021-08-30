import { Table , Space ,Popconfirm} from 'antd';
import { EditOutlined , DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import './vendor.css'
import { useState, useEffect } from 'react';
import axios from 'axios'

const BusinessTable = ()=>{

  const history = useHistory();

  const [res, setres] = useState([]);
    
  useEffect(()=>{
    axios.get('https://londry-backend.herokuapp.com/all_vendor')
    .then(response=>{
        if(response.data.success){
          setres(response.data.vendor)
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
      title: 'Busines',
      dataIndex: 'bussiness_name',
      key: 'busines',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'busines',
    },
    {
      title: 'Address',
      dataIndex: 'bussiness_address',
      key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <EditOutlined className='edit-icon'/>            
            <Popconfirm title="Sure to delete?" onConfirm={(e) => e.preventDefault() }>
            <DeleteOutlined className='delete-icon' />
            </Popconfirm>
          </Space>
        ),
        
        width:150
      },
  ];
  return(
  <Table dataSource={res} columns={columns} pagination={{pageSize:50}} scroll={{ y: 500 }} size='large' 
  onRow={(record, recordIndex) => ({
    onClick: (record) => {
      // history.push('/vendordetails')
    } 
  })}
  />
  )
}
// onRow={(record, recordIndex) => ({
//   onClick: event => { console.log("onRow onClick", event.target, event.target.className, record, recordIndex) } 
// })}
export default BusinessTable;