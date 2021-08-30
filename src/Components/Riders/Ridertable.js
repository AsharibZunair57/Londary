import { Table , Space } from 'antd';
import { EditOutlined , DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import './riders.css'
import { useState, useEffect } from 'react';
import axios from 'axios'

const Ridertable = ()=>{

  const history = useHistory();

    const [res, setres] = useState([]);
    
    useEffect(()=>{
      axios.get('https://londry-backend.herokuapp.com/riders')
      .then(response=>{
          if(response.data.success){
            setres(response.data.rider)
              console.log(response.data.rider)
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
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'home_address',
      key: 'home_address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <EditOutlined className='edit-icon'/>
            <DeleteOutlined className='delete-icon'/>
          </Space>
        ),
      },
  ];
  return(
    <div>
  <Table dataSource={res} columns={columns} pagination={{pageSize:50}} scroll={{ y: 500 }} size='large'
  onRow={(record, recordIndex) => ({
    onClick: () => {
      history.push('/riderdetails/'+ res[recordIndex]._id)
    }
  })}
  />
  </div>
  )
}
export default Ridertable;