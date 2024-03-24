import React, { useState, useEffect } from "react";
import { getAllServico } from "../../services/api/servicos";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function Servico() {

  const [servicos, setServico] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    async function getItems() {
      try {
        const data = await getAllServico();
        setServico(data.data);
        setLoading(false);
      } catch (error) {
        alert("Opis ... ocorreu um erro", "", "error"); 
        history.replace('/');
      }
    }
    getItems();
  },[]);


  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <div className='espacamento'>
          <Grid container spacing={3} justify="center" alignItems="center" display='grid'>
            {servicos.map(servico => (
              <Grid item xs={5} key={servico.id}>
                <CardHeader
                title={servico.tipo}
                subheader= {new Date().toDateString()}
              />
                <CardMedia
                  className={classes.media}
                  image="/static/almoco.jpg"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                   O serviço {servico.tipo} está disponível no nosso hotel para {servico.numero_pessoas} pessoas a partir de R$ {servico.preco}
                  </Typography>
                </CardContent>
              </Grid>
            ))};
        </Grid>
        </div >
    );
  }
}