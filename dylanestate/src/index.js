import ReactDOM from 'react-dom/client'
import App from './App.js'
import { RecoilRoot } from 'recoil';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Componenets/Dashboard.js';
import Listing from './Componenets/Listing.js';
import PreviewPage from './Componenets/PreviewPage.js';
import PropertyOverview from './Componenets/PropertyOverview.js';

const router = createBrowserRouter([
  {
    path: '/dylanEstate/',
    element: <App />,
    children: [
      {
        path: '/dylanEstate/',
        element: <Dashboard />
      },
      {
        path: '/dylanEstate/list',
        element: <Listing />
      },
      {
        path: '/dylanEstate/preview',
        element: <PreviewPage />
      },
      {
        path: '/dylanEstate/a',
        element: <PropertyOverview />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>,
)