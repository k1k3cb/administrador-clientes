import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import NuevoCliente, {
	action as nuevoClienteAction
} from './pages/NuevoCliente';
import Index, { loader as clientesLoader } from './pages/Index';
import ErrorPage from './components/ErrorPage';
import EditarCliente,{ loader as editarClienteLoader, action as  editarClienteAction} from './pages/EditarCliente';


const container = document.getElementById('root');
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Index />,
				loader: clientesLoader,
				errorElement: <ErrorPage />
			},
			{
				path: '/clientes/nuevo',
				element: <NuevoCliente />,
				action: nuevoClienteAction,
				errorElement: <ErrorPage />
			},
			{
				path: '/clientes/:clienteId/editar',
				element: <EditarCliente />, 
				loader: editarClienteLoader,
				action: editarClienteAction,
				errorElement: <ErrorPage />

			}
		]
	}
]);

createRoot(container).render(<RouterProvider router={router} />);
