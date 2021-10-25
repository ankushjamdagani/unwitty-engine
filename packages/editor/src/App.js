import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./modules/Home'));
const Login = lazy(() => import('./modules/Login'));
const Project = lazy(() => import('./modules/Project'));
const AddProject = lazy(() => import('./modules/AddProject'));

const ROUTES = [
  {
    path: '/project/:id',
    component: Project
  },
  {
    path: '/project',
    component: AddProject
  },
  {
    path: '/auth',
    component: Login
  },
  {
    path: '/',
    component: Home
  }
];

const Loading = () => <div>loading...</div>;

export default function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            {ROUTES.map(el => (
              <Route key={el.path} exact {...el} />
            ))}
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
