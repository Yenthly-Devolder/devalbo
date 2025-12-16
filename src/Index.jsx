import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import Offerte from "./pages/Offerte.jsx";
import './main.css';
import './embla.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Terrassen from "./pages/Terrassen.jsx";
import Verbouwingen from "./pages/Verbouwingen.jsx";
import PrivacyPolicy from "./pages/privacy-policy.jsx";
import './i18n';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },  
      {
        path: "/contact",
        children: [
          {
            index: true,
            element: <Contact />,
          }
        ]
      }, 
      {
        path: "/offerte",
        children: [
          {
            index: true,
            element: <Offerte />
          }
        ] 
      },
      {
        path: "/terrassen",
        children: [
          {
            index: true,
            element: <Terrassen />
          }
        ] 
      },
      {
        path: "/verbouwingen",
        children: [
          {
            index: true,
            element: <Verbouwingen />
          }
        ], 
      },
      {
        path: "/privacy-policy",
        children: [
          {
            index: true,
            element: <PrivacyPolicy />
          }
        ]
      },
    ], 
  },
], {
  basename: "/", // Update with your actual basename
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>  
    <RouterProvider router={router} />
  </React.StrictMode>
);