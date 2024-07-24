import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import ComponentLayout from "./components/component-layout";

import Linkone from "./components/custom/link-one";
import ComponentHome from "./components/custom/component-home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <main className="flex-grow container mx-auto">
          <Navbar />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Nested Routes for new components */}
            <Route path="/components" element={<ComponentLayout />}>
              <Route index element={<ComponentHome />} />
              <Route path="link1" element={<Linkone />} />
            </Route>
            {/* Nested Routes for new components */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* Routes */}
          <Footer />
        </main>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
