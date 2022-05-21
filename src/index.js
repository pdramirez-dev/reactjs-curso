
import React from "react";
import { createRoot } from "react-dom/client";
//import PrimeraApp from "./PrimeraApp";

import './index.css';
import CounterApp from "./CounterApp";


const container = document.getElementById('app');
const root = createRoot(container);

root.render(<CounterApp value={24} />);