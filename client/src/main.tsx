import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createContext } from 'react';
import UserStore from './store/UserStore.ts';
import DeviceStore from './store/DeviceStore.ts';

export const Context = createContext<any | null>(null);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{ user: new UserStore(), device: new DeviceStore() }}>
    <App />
  </Context.Provider>,
);
