import { Table , Space } from 'antd';
import './table.css'
import { EditOutlined , DeleteOutlined } from '@ant-design/icons';

const TableEmp= ()=>{
    const dataSource = [];
    for (let i = 0; i < 10; i++) {
      dataSource.push({
        key: i,
        employee_name: `muneeb ${i}`,
        emp_cnic: 32123214342,
        emp_pin: 12332,
      });
    }
const columns = [
    {
      title: 'Employee name',
      dataIndex: 'employee_name',
      key: 'employee_name',
      fixed: 'left',
    },
    {
      title: 'Employee cnic',
      dataIndex: 'emp_cnic',
      key: 'emp_cnic',
    },
    {
        title: 'Employee pin',
        dataIndex: 'emp_pin',
        key: 'emp_pi',
      },
      {
        title: 'Branch ID',
        dataIndex: 'emp_cnic',
        key: 'emp_cnic',
      },
      {
        title: 'Is active',
        dataIndex: 'is_act',
        key: 'is_act',
      },
      {
        title: 'Created on',
        dataIndex: 'created_on',
        key: 'created_on',
      },
      {
        title: 'Created by',
        dataIndex: 'created_by',
        key: 'created_by',
      },
      {
        title: 'Created at',
        dataIndex: 'created_at',
        key: 'created_at',
      },
      {
        title: 'Modified on',
        dataIndex: 'modified_on',
        key: 'modified_on',
      },
      {
        title: 'Modified by',
        dataIndex: 'modified_by',
        key: 'modified_by',
      },
      {
        title: 'Modified at',
        dataIndex: 'modified_at',
        key: 'modified_at',
      },

    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (text, record) => (
    //       <Space size="middle">
    //         <button><EditOutlined /></button>
    //         <button><DeleteOutlined /></button>
    //       </Space>
    //     ),
    //   },
  ];
  return(
      <div className='table-bank'>
      <h4>Vendor employee</h4>
  <Table dataSource={dataSource} columns={columns} pagination={{pageSize:50}} scroll={{ x: 1100, y: 500 }} size='large'
  />
  </div>
  )
}
// onRow={(record, recordIndex) => ({
//   onClick: event => { console.log("onRow onClick", event.target, event.target.className, record, recordIndex) } 
// })}
export default TableEmp;