import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getByIdQuarto } from "../../services/api/quartos";
import { updateReserva, getById } from "../../services/api/reservas";
import { getByIdServico } from "../../services/api/servicos";
import { ReservaFieldsValidation } from "./reservaFieldsValidation.js";
import swal from 'sweetalert';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function ControlledOpenSelect() {
    const classes = useStyles();
    const [servicoDescricao, setServico] = React.useState('');
    const [servicoId, setServicoId] = useState('');
    const [reserva, setReserva] = useState('');
    const [reservaId, setReservaId] = useState('');
    const [data_entrada, setData_entrada] = useState('');
    const [data_saida, setData_saida] = useState('');
    const [quantidade_pessoas, setQuantidade_pessoas] = useState('');
    const [cliente, setClienteId] = useState('');
    const [quartoNumber, setNumeroQuarto] = React.useState('');
    const [quartoId, setQuarto] = React.useState('');
    const [cartao, setCartao] = useState('');
    const id = localStorage.getItem('id');

    function validationField(data_entrada, data_saida, quantidade_pessoas, cliente, servico, quarto) {
        cliente = id
        var error = ReservaFieldsValidation(data_entrada, data_saida, quantidade_pessoas, cliente, servico, quarto);

        if (error) {
            swal(`${error}`);
            return true;
        }
    }

    async function handleSave() {

        if (!validationField(data_entrada, data_saida, quantidade_pessoas, cliente, servicoId, quartoId)) {
        let reserva = {id: reservaId, data_entrada, data_saida, quantidade_pessoas: parseInt(quantidade_pessoas), cliente, servico: parseInt(servicoId), quarto: quartoId, cartao }

            async function getResponse() {

                const data = await updateReserva(reserva);

                if (data != null) {
                    swal("Reserva atualizada!", "", "success");
                }
                else
                    swal("Houve um erro", "Verifique as informações e tente novamente", "error");
            }
            getResponse();
        }
    }

    async function getDescricaoServico(id)  {

        async function getServico() {
            try {
                const data = await getByIdServico(id);
                setServico(data.data.tipo);
                setServicoId(data.data.id)
            } catch (error) {
            }
        }
        getServico();
    };

    async function getNumeroQuarto(id)  {

        async function getQuartos() {
            try {
                const data = await getByIdQuarto(id);
                setNumeroQuarto(data.data.numero);
                setQuarto(data.data.id)
            } catch (error) {
            }
        }
        getQuartos();
    };

    const handleSearchReserva = () => {

        async function getReserva() {
            try {
                const data = await getById(reservaId);
                setReserva(data.data);
                getNumeroQuarto(reserva.quarto)
                getDescricaoServico(reserva.servico) 
                setQuantidade_pessoas(reserva.quantidade_pessoas)
                setCartao(reserva.cartao)
                setData_entrada(reserva.data_entrada)
                setData_saida(reserva.data_saida)
                setClienteId(id)
            } catch (error) {
            }
        }
        getReserva();
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>

                <div className="texto">
                    <h1>Atualizar Reserva</h1>
                </div>

                <div className="texto">
                    <TextField
                        id="date"
                        label="Número da reserva *"
                        type="int"
                        defaultValue="13"
                        className={classes.textField}
                        value={reservaId}
                        onChange={(e) => setReservaId(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </div>
                <div className="texto">
                    <Button size="small" variant="contained" color="primary" onClick={() => handleSearchReserva()}>Procurar Reserva</Button>
                </div>

                <div className="texto">
                    <TextField
                        id="date"
                        label="Quantidade de Pessoas *"
                        type="int"
                        style={{ margin: 8 }}
                        defaultValue={quantidade_pessoas}
                        className={classes.textField}
                        value={reserva.quantidade_pessoas}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        //onChange={handleChangeQuarto}
  
                    />
                </div>
                <div className="texto">
                    <TextField
                        id="margin-none"
                        className={classes.textField}
                        defaultValue={reserva.cartao}
                        label="Número do cartão *"
                        value={reserva.cartao}
                        onChange={(e) => setCartao(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className="texto">
                    <TextField 
                        id="date"
                        type="int"
                        label="Número do quarto*"
                        defaultValue="0"
                        className={classes.textField}
                        value={quartoNumber}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className="texto">
                    <div className="texto">
                        <TextField 
                            id="date"
                            type="int"
                            defaultValue="0"
                            label="Serviço*"
                            className={classes.textField}
                            value={servicoDescricao}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                </div>
                <div className="texto">
                    <TextField
                        id="date"
                        type="datetime-local"
                        className={classes.textField}
                        //value={data_entrada}
                        label="Data Entrada*"
                        onChange={(e) => setData_entrada(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <div className="texto">
                    <TextField
                        id="date"
                        type="datetime-local"
                        className={classes.textField}
                        //value={reserva.data_saida}
                        label="Data Saída*"
                        onChange={(e) => setData_saida(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className="texto">
                    <Button size="small" variant="contained" color="primary" onClick={() => handleSave()}>Alterar</Button>
                </div>
            </Container>
        </React.Fragment>
    );
}