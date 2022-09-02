import React, { Fragment, useEffect } from 'react';
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import Settings from './components/settings';
import ScrollToTop from './components/ScrollToTop';
import NotistackProvider from './components/NotistackProvider';
import ThemePrimaryColor from './components/ThemePrimaryColor';
import { LOGOUT } from './actions/types';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';
// Multi-Language
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
// ----------------------------------------------------------------------

export default function App() {

  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) {
        store.dispatch({ type: LOGOUT });
        window.location.href('/');
      }
    });
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemeConfig>
          <ThemePrimaryColor>
            <NotistackProvider>
              {/* <Settings /> */}
              <ScrollToTop />
              <Router />
            </NotistackProvider>
          </ThemePrimaryColor>
        </ThemeConfig>
      </Provider>
    </I18nextProvider>
  );
}
