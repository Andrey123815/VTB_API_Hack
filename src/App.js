import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import SideNavbar from "./components/SideNavbar/SideNavbar";
import {NAV_ITEMS} from "./configurations/navItems";
import './App.css';

export const App = () => (
  <div className="app">
    <Router>
      <SideNavbar />
      <main>
        <Routes>
          {NAV_ITEMS.map(({path, element}) =>
            <Route key={path} path={path} element={element} />
          )}
        </Routes>
      </main>
    </Router>
  </div>
);

export default App;
