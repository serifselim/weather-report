import { render } from 'react-dom';
import App from './App';
import './style.css';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
