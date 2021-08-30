import { Table , Space } from 'antd';
import { EditOutlined , DeleteOutlined } from '@ant-design/icons';
import './table.css'

const TablePromo= ()=>{
    const dataSource = [];
    for (let i = 0; i < 10; i++) {
      dataSource.push({
        key: i,
        Promo_Code: `${i}`,
        Discount_Type: 32,
        Discount_Perc:``,
      });
    }
const columns = [
    {
      title: 'Promo Code',
      dataIndex: 'Promo_Code',
      key: 'Promo_Code',
      fixed: 'left',
    },
    {
      title: 'Discount Type',
      dataIndex: 'Discount_Type',
      key: 'Discount_Type',
    },
    {
      title: 'Discount Perc ',
      dataIndex: 'Discount_Perc',
      key: 'Discount_Perc',
    },
    {
      title: 'Discount Perc ',
      dataIndex: 'Discount_Perc',
      key: 'Discount_Perc',
    },
    {
      title: 'Discount Amt ',
      dataIndex: 'Discount_Amt',
      key: 'Discount_Amt',
    },
    {
      title: 'Discount Desc ',
      dataIndex: 'Discount_Desc',
      key: 'Discount_Desc',
    },
    {
      title: 'Is Active ',
      dataIndex: 'Is_Active ',
      key: 'Is_Active ',
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
    <h4>Vendor promo</h4>
  <Table dataSource={dataSource} columns={columns} pagination={{pageSize:50}} scroll={{x:1400, y: 500 }} size='large'
  />
  </div>
  )
}
// onRow={(record, recordIndex) => ({
//   onClick: event => { console.log("onRow onClick", event.target, event.target.className, record, recordIndex) } 
// })}
export default TablePromo;