import { Table , Space } from 'antd';
import './table.css'
import { EditOutlined , DeleteOutlined } from '@ant-design/icons';

const TableBanks= ()=>{
    const dataSource = [];
    for (let i = 0; i < 100; i++) {
      dataSource.push({
        key: i,
        account_num: `${i}`,
        IBAN_number: 32,
      });
    }
const columns = [
    {
      title: 'Account number',
      dataIndex: 'account_num',
      key: 'account_num',
    },
    {
      title: 'IBAN number',
      dataIndex: 'IBAN_number',
      key: 'IBAN_number',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <button><EditOutlined /></button>
            <button><DeleteOutlined /></button>
          </Space>
        ),
      },
  ];
  return(
      <div className='table-bank'>
      <h4>Vendor banks</h4>
  <Table dataSource={dataSource} columns={columns} pagination={{pageSize:50}} scroll={{ y: 500 }} size='large'
  />
  </div>
  )
}
// onRow={(record, recordIndex) => ({
//   onClick: event => { console.log("onRow onClick", event.target, event.target.className, record, recordIndex) } 
// })}
export default TableBanks;