import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import swal from 'sweetalert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getCaracteristicas } from "../../services/api/caracteristicas";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function User() {

  const classes = useStyles();
  const [caracteristicas, setCaracteristicas] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItems() {

      try {
        const { data } = await getCaracteristicas();
        setCaracteristicas(data);
        setLoading(false);
      } catch (error) {
        swal("Ocorreu um erro", "", "error");
      }
    }
    getItems();
  }, []);


  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  } else {

    return (
      <React.Fragment>
      <CssBaseline />
        <Container fixed>
        <h1>Características Gerais</h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow >
                <StyledTableCell align="right">Nome</StyledTableCell>
                <StyledTableCell align="right">Endereço</StyledTableCell>
                <StyledTableCell align="right">Telefone</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Categoria</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {caracteristicas.map((row) => (
                <StyledTableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.nome}
                  </TableCell>
                  <TableCell align="right">{row.endereco}</TableCell>
                  <TableCell align="right">{row.telefone}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.categoria}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      </React.Fragment>
    );
  }
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});