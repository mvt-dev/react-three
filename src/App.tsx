import React from 'react';
import GroupBox from './components/GroupBox';
import Shoes from './components/Shoes';

function App() {
  return (
    <>
      <section style={{ height: "80%" }}>
        <Shoes />
      </section>
      <section style={{ height: "20%" }}>
        <GroupBox />
      </section>
    </>
  );
}

export default App;
