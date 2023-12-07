import React from 'react';
import Header from './components/Header';
import WonderItemContextProvider from './contexts/WonderItem';
import AllList from './components/AllLists';

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