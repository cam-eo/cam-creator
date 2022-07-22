import type { Component } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <a href="https://cam-wright.web.app/">HI</a>
      </header>
    </div>
  );
};

export default App;
