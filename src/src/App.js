import React from 'react';
import Header from './componentes/Header';
import WonderItemContextProvider from '../js/contexts/WonderItem';
import AllList from './componentes/AllLists';

function App() {
  return (
    <div className="app">
      <WonderItemContextProvider>
        <Header />
        <div className="content">
          <AllList />
        </div>
      </WonderItemContextProvider>
    </div>
  );
}

export default App;
