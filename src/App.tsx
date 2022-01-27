import React from 'react';
import GroupBox from './components/GroupBox';
import Shoes from './components/Shoes';

function App() {
  return (
    <>
      <section style={{ height: '100%' }}>
        <Shoes />
      </section>
      <section style={{ width: '100%', height: '20%', position: 'fixed', bottom: 0 }}>
        <GroupBox />
      </section>
    </>
  );
}

export default App;
