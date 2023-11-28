import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import NuevoCliente from './pages/NuevoCliente';
import Index from './pages/Index';

const container = document.getElementById('root');
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Index />
			},
			{
				path: '/clientes/nuevo',
				element: <NuevoCliente />
			}
		]
	}
]);

createRoot(container).render(<RouterProvider router={router} />);
