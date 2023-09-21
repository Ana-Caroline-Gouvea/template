import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8826c3',
      light: '#9c5cb9',
      dark: '#501a71',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e696ff',
      dark: '#aa2ad0',
      light: '#d96aff',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    text: {
      disabled: 'rgba(88,88,88,0.38)',
    },
    error: {
      main: '#d4372c',
      light: '#ff0000',
      dark: '#d01f1f',
    },
    divider: 'rgba(0,0,0,0.12)',
    warning: {
      main: '#b302ed',
    },
    info: {
      main: '#a502d1',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <RouterProvider router={router} />
  </ThemeProvider>
);
