import { Table , Space } from 'antd';
import { EditOutlined , DeleteOutlined } from '@ant-design/icons';
import './table.css'

const TableBranches= ()=>{
    const dataSource = [];
    for (let i = 0; i < 10; i++) {
      dataSource.push({
        key: i,
        Business_Name: `Edrward ${i}`,
        Business_Address: 32,
        Business_GPS: `London Park no. ${i}`,
      
      });
    }
const columns = [
    {
      title: 'Business Name',
      dataIndex: 'Business_Name',
      key: 'Business_Name',
      fixed: 'left',
    },
    {
      title: 'Business Address ',
      dataIndex: 'Business_Address',
      key: 'Business_Address',
    },
    {
      title: 'Business GPS ',
      dataIndex: 'Business_GPS',
      key: 'Business_GPS',
    },
    {
      title: 'Business St Hours ',
      dataIndex: 'Business_St_Hours',
      key: 'Business_St_Hours',
    },
    {
      title: 'Business En Hours ',
      dataIndex: 'Business_En_Hours',
      key: 'Business_En_Hours',
    },
    {
      title: 'Business Days ',
      dataIndex: 'Business_Days',
      key: 'Business_Days',
    },
    {
      title: 'Business_Website ',
      dataIndex: 'Business_Website',
      key: 'Business_Website',
    },
    {
      title: 'Reg Date',
      dataIndex: 'Reg_Date',
      key: 'Reg_Date',
    },
    {
      title: 'Is Active ',
      dataIndex: 'Is_Active',
      key: 'Is_Active',
    },
    {
      title: 'Is Online ',
      dataIndex: 'Is_Online',
      key: 'Is_Online',
    },
    {
      title: 'Policy ',
      dataIndex: 'Policy',
      key: 'Policy',
    },
    {
      title: 'Terms ',
      dataIndex: 'Terms',
      key: 'Terms',
    },
    {
      title: 'Created On ',
      dataIndex: 'Created_On',
      key: 'Created_On',
    },
    {
      title: 'Created By',
      dataIndex: 'Created_By',
      key: 'Created_By',
    },
    {
      title: 'Created At ',
      dataIndex: 'Created_At',
      key: 'Created_At',
    },
    {
      title: 'Modified On ',
      dataIndex: 'Modified_On',
      key: 'Modified_On',
    },
    {
      title: 'Modified By ',
      dataIndex: 'Modified_By',
      key: 'Modified_By',
    },
    {
      title: 'Modified At ',
      dataIndex: 'Modified_At',
      key: 'Modified_At',
    },
  ];
  return(
    <div className='table-bank'>
    <h4>Vendor branches</h4>
  <Table dataSource={dataSource} columns={columns} pagination={{pageSize:50}} scroll={{x:1800, y: 500 }} size='large'
  />
  </div>
  )
}
// onRow={(record, recordIndex) => ({
//   onClick: event => { console.log("onRow onClick", event.target, event.target.className, record, recordIndex) } 
// })}
export default TableBranches;