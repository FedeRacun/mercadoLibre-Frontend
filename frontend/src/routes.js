import Home from './views/Home';
import Products from './views/Products';
import Detail from './views/Detail';
import NotFoundPage from './views/NotFoundPag';

//creo un array de rutas para recorrer con un map por si despues necesito agregar mas
const routes = [

  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/items",
    component: Products,
    exact: true
  },
  {
      path: "/items/:id",
      component: Detail,
      exact: true
    },
    {
      component : NotFoundPage
    }
  ];

  export default routes;