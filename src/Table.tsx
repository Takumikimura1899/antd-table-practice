import { Table, Layout } from 'antd';
import { Link, useHistory } from 'react-router-dom';
const TableContent = ({ showModal }: any) => {
  const TableState = [
    {
      id: 1,
      key: 'a',
      title: 'test1',
      body: 'antdの使い方',
      link: <Link to='/'>Home</Link>,
    },
    {
      id: 2,
      key: 'b',
      title: 'test2',
      body: 'react-routerの使い方',
      link: <Link to='/about'>About</Link>,
    },
    {
      id: 3,
      key: 'c',
      title: 'test3',
      body: (
        <button onClick={showModal}>
          ページネーション確認用モーダルを開く
        </button>
      ),
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

  const history = useHistory();
  const getCurrent = (page: number) => {
    history.push('', { pageNumber: page });
  };

  let defaultCurrent: number = 1;
  if (history.location.state) {
    const pageState: any = history.location.state;
    defaultCurrent = pageState.pageNumber;
  }
  return (
    <Layout>
      <Table
        dataSource={TableState}
        columns={columns}
        pagination={{
          pageSize: 1,
          defaultCurrent: defaultCurrent,
          onChange: getCurrent,
        }}
      />
    </Layout>
  );
};
export default TableContent;

// const pageHistory = useHistory();
// const handleLink = (page: number) => {
//   pageHistory.push(`study_reports`, { pageNumber: page });
// };

// // let defaultCurrent: number = 1;
// // if (pageHistory.location.state) {
// //   const pageState: any = pageHistory.location.state;
// //   defaultCurrent = pageState.pageNumber;
// // } else {
// //   defaultCurrent = 1;
// }
