import { NavLink, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/a-propos">A propos</NavLink>
          <NavLink to="/bonjour/fiorella">Bonjour</NavLink>
          <NavLink to="/exo/state">Exo State</NavLink>
          <NavLink to="/exo/lifecycle">Exo Lifecycle</NavLink>
        </nav>

        {/* Outlet prend la forme de la page sur laquelle on est */}
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
