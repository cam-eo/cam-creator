import { lazy } from "solid-js";
import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
const Home = lazy(() => import("./Home"));
const Links = lazy(() => import("./Links"));
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <Routes>
      <div class={styles.App}>
        <header class={styles.header}>
          <a href="https://cam-wright.web.app/">HI</a>
        </header>
      </div>
      <Route path="/" component={Home} />
      <Route path="/links" component={Links} />
    </Routes>
  );
};

export default App;
