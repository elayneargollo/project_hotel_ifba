import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { login, servicos, registrarCliente, registrarReserva, editarCliente, caracteristicas, editReserva } from '../../routes/paths';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import AppsIcon from '@material-ui/icons/Apps';
import ExitToApp from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import EditIcon from '@material-ui/icons/Edit';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import InfoIcon from '@material-ui/icons/Info';
import ReceiptIcon from '@material-ui/icons/Receipt';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },

  }),
);

export default function ButtonAppBar() {

  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const redirectLogin = () => {
    setAnchorEl(null);
    history.push(login);
  }

  const redirectService = () => {
    setAnchorEl(null);
    history.push(servicos);
  }

  const redirectHome = () => {
    setAnchorEl(null);
    history.push("/");
  }

  const redirectRegister = () => {
    setAnchorEl(null);
    history.push(registrarCliente);
  }

  const redirectEdit = () => {
    setAnchorEl(null);
    history.push(editarCliente);
  }

  const redirectCaracteristicasGerais = () => {
    setAnchorEl(null);
    history.push(caracteristicas);
  }

  const redirectReservation = () => {
    setAnchorEl(null);
    history.push(registrarReserva);
  }

  const redirectEditReservation = () => {
    setAnchorEl(null);
    history.push(editReserva);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <AppsIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Menu
          </Typography>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem
              onClick={redirectService}>
              <RoomServiceIcon color="primary" />
              Serviços e Preços</MenuItem>
            <MenuItem
              onClick={redirectReservation}>
              <PermContactCalendarIcon color="primary" />
              Realizar Reserva</MenuItem>
            <MenuItem
              onClick={redirectEditReservation}>
              <ReceiptIcon color="primary" />
              Alterar Reserva</MenuItem>
            <MenuItem
              onClick={redirectLogin}>
              <PersonIcon color="primary" />
              Login</MenuItem>
            <MenuItem
              onClick={redirectRegister}>
              <PersonAddIcon color="primary" />
              Registrar-se</MenuItem>
            <MenuItem
              onClick={redirectHome}>
              <HomeIcon color="primary" />
              Home</MenuItem>
            <MenuItem
              onClick={redirectEdit}>
              <EditIcon color="primary" />
              Alterar Dados Cadastrais</MenuItem>
            <MenuItem
              onClick={redirectCaracteristicasGerais}>
              <InfoIcon color="primary" />
              Características Gerais</MenuItem>
          </Menu>
          <Button
            color="inherit"
            onClick={redirectLogin}>
            <ExitToApp />
            Entrar</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}