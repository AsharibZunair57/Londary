import { Table , Space } from 'antd';
import { EditOutlined , DeleteOutlined } from '@ant-design/icons';
import './table.css'

const TableItems= ()=>{
    const dataSource = [];
    for (let i = 0; i < 10; i++) {
      dataSource.push({
        key: i,
        Price: `Edrward ${i}`,
        Last_price: 32,
        
      
      });
    }
const columns = [
    {
      title: 'Price',
      dataIndex: 'Price',
      key: 'Price',
    },
    {
      title: 'Last Price ',
      dataIndex: 'Last_Price',
      key: 'Last_Price',
    },
    {
      title: 'Is Hidden ',
      dataIndex: 'Is_Hidden',
      key: 'Is_Hidden',
    },
    
    {
      title: 'Created On',
      dataIndex: 'Created_On',
      key: 'Created_On',
    },
    {
      title: 'Created By ',
      dataIndex: 'Created_By',
      key: 'Created_By',
    },
    {
      title: 'Created At ',
      dataIndex: 'Created_At',
      key: 'Created_At',
    },
    {
      title: 'Modified On',
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
      dataIndex: 'Modified At',
      key: 'Modified At',
    },
   
  ];
  return(
    <div className='table-bank'>
    <h4>Vendor Items</h4>
  <Table dataSource={dataSource} columns={columns} pagination={{pageSize:50}} scroll={{ y: 500 }} size='large'
  />
  </div>
  )
}
// onRow={(record, recordIndex) => ({
//   onClick: event => { console.log("onRow onClick", event.target, event.target.className, record, recordIndex) } 
// })}
export default TableItems;