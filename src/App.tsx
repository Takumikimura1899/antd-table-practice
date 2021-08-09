import { useState } from 'react';
// BrowserRouter as Routerはエイリアス(別名)なので、BrowserRouterそのまま使用しても良し。
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import TableContent from './Table';

import { Layout } from 'antd';
import 'antd/dist/antd.css';
import GetPhoto from './GetPhoto';
import GetFoodPhoto from './GetFoodPhoto';
import GetAnimalPhoto from './GetFoodPhoto copy';

const { Content } = Layout;

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = (): void => {
    setModalOpen(true);
  };
  const closeModal = (): void => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen ? (
        <PaginationCheck closeModal={closeModal} />
      ) : (
        <Router>
          <Layout style={{ textAlign: 'center' }}>
            <Content>
              <h1>Hello React Router</h1>
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/about'>
                  <About />
                </Route>
                <Route exact path='/contact'>
                  <Contact showModal={showModal} />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
              <TableContent showModal={showModal} />
            </Content>
          </Layout>
        </Router>
      )}
    </>
  );
}

const Home = () => {
  return (
    <>
      <hr />
      <h2>Home</h2>
      <GetPhoto />
    </>
  );
};
const About = () => {
  return (
    <>
      <hr />
      <h2>About</h2>
      <GetFoodPhoto />
    </>
  );
};

const Contact = ({ showModal }: any) => {
  return (
    <>
      <hr />
      <h2>Contact</h2>
      <GetAnimalPhoto />
      <button onClick={showModal}>ページネーション確認用モーダルを開く</button>
    </>
  );
};
const NotFound = () => {
  return (
    <>
      <h2>Not Found Page</h2>;
    </>
  );
};
const PaginationCheck = ({ closeModal }: any) => {
  return (
    <>
      <h1>ページネーションの画面遷移を確認しましょう</h1>
      <button onClick={closeModal}>モーダルを閉じる</button>
    </>
  );
};

export default App;
