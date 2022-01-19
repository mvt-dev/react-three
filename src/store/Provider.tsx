import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';

function Provider({ children }: { children?: React.ReactChild | React.ReactChild[] }) {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  )
}

export default Provider;
