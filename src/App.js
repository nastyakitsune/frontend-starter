import React from "react";
import { Provider } from "react-redux";
import { Routes } from "./config/routes";
import { configureStore } from "../src/store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
