import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import CasesPage from './pages/CasesPage.jsx'
import PracticeArea from './pages/PracticeArea.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Notfound from './components/not-found.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/cases", element: <CasesPage /> },
      { path: "/practice-area", element: <PracticeArea /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/*", element: <Notfound /> },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
