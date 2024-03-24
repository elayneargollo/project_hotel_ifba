import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Menu from '../components/navbar/menu';
import Navbar from '../components/navbar/navbar';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Servicos from '../pages/servicos/Servicos';
import RegisterCliente from '../pages/clientes/registerCliente';
import RegisterReserva from '../pages/reservas/registerReserva';
import EditeCliente from '../pages/clientes/editeCliente';
import Caracteristicas from '../pages/caracteristicas/caracteristicas';
import EditarReserva from '../pages/reservas/editReserva';
import React, { useContext } from "react";
import { Context } from '../contexts/auth'
import swal from 'sweetalert';
import Footer from '../components/navbar/footer';

export const paths = require('./paths');

function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated } = useContext(Context);

  if (isPrivate && !authenticated) {
    swal("", "Realize o login para continuar ... ", "");
    return <Redirect to="/login" />
  }
  return <Route {...rest} />;
}

function Rotas() {

  return (
    <BrowserRouter>
      <Navbar />
      <Menu />
      <Switch>
        <CustomRoute exact path={paths.root} component={Home} />
        <CustomRoute exact path={paths.login} component={Login} />
        <CustomRoute exact path={paths.servicos} component={Servicos} />
        <CustomRoute exact path={paths.registrarCliente} component={RegisterCliente} />
        <CustomRoute exact path={paths.caracteristicas} component={Caracteristicas} />
        <CustomRoute isPrivate exact path={paths.registrarReserva} component={RegisterReserva} />
        <CustomRoute isPrivate exact path={paths.editarCliente} component={EditeCliente} />
        <CustomRoute isPrivate exact path={paths.editReserva} component={EditarReserva} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Rotas;