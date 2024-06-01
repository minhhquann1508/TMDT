import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { routes } from './routes';

import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { Fragment } from 'react';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <route.element />
                </Layout>
              }
              />
            )
          })}
        </Routes>
      </Router>
    </div>
  )

}

export default App;
