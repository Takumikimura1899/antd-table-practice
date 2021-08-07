import { Table, Layout } from 'antd';
import { Link } from 'react-router-dom';
const TableContent = ({ showModal }: any) => {
  const TableState = [
    {
      id: 1,
      key: 'a',
      title: 'a',
      body: 'b',
      link: <Link to='/'>Home</Link>,
    },
    {
      id: 2,
      key: 'a',
      title: 'a',
      body: 'b',
      link: <Link to='/about'>About</Link>,
    },
    {
      id: 3,
      key: 'a',
      title: 'a',
      body: <button onClick={showModal}>ページネーション確認画面</button>,
      link: <Link to='/contact'>Contact</Link>,
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
    },
  ];
  return (
    <Layout>
      <Table
        dataSource={TableState}
        columns={columns}
        pagination={{ pageSize: 1 }}
      />
    </Layout>
  );
};
export default TableContent;
