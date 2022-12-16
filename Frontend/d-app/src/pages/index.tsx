import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import  Game  from '../components/Game/Game'

const routes = [{ path: '/', Page: Home }, {path: 'RPS', Page: Game}];

function Routing() {
  const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page />} />);

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
