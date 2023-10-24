import * as React from "react";
import { createRoot } from "react-dom/client";
import "../src/index.css";

import { Router } from "./Router";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<Router />);
