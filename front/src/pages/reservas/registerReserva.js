import React from 'react';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getAllServico } from "../../services/api/servicos";
import { getQuartosDisponiveis } from "../../services/api/quartos";
import { addReserva } from "../../services/api/reservas";
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
    table: {
        minWidth: 700,
      },
}));

export default function ControlledOpenSelect() {
    const classes = useStyles();
    const [servicoId, setServico] = React.useState('');
    const [servicos, setServicoCombo] = useState('');
    const [open, setOpen] = React.useState(false);
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

    function cleanField() {
        setNumeroQuarto("");
        setServico("");
        setData_entrada("");
        setData_saida("");
        setQuantidade_pessoas("");
        setNumeroQuarto("");
        setCartao("")
        setClienteId("")
    }

    async function handleSave() {

        if (!validationField(data_entrada, data_saida, quantidade_pessoas, cliente, servicoId, quartoId)) {
            let reserva = { data_entrada, data_saida, quantidade_pessoas: parseInt(quantidade_pessoas), cliente, servico: parseInt(servicoId), quarto: parseInt(quartoId), cartao }

            async function getResponse() {

                const data = await addReserva(reserva);

                if (data != null) {
                    swal("Reserva cadastrada!", "", "success");
                }
                else
                    swal("Houve um erro", "Verifique as informações e tente novamente", "error");
            }
            getResponse();
            cleanField()
        }
    }

    const handleChangeQuarto = (event) => {
        setQuantidade_pessoas(event.target.value);

        async function getQuartos() {
            try {
                const data = await getQuartosDisponiveis(event.target.value);
                setNumeroQuarto(data.data.numero);
                setQuarto(data.data.id);
            } catch (error) {
            }
        }
        getQuartos();
    };

    useEffect(() => {
        async function getServicos() {
            try {
                const data = await getAllServico();
                setServicoCombo(data.data);
            } catch (error) {
            }
        }
        getServicos();
    }, []);

    const handleChange = (event) => {
        setServico(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className='conteudoReserva'>
        <React.Fragment>
            <CssBaseline />
            <Container>
                <div className="texto">
                    <h1>Registre uma Reserva</h1>
                </div>
                <div className="texto">
                    <TextField
                        id="date"
                        label="Quantidade de Pessoas *"
                        type="int"
                        defaultValue="2"
                        className={classes.textField}
                        value={quantidade_pessoas}
                        onChange={handleChangeQuarto}
                    />
                </div>

                <div className="texto">

                    <TextField
                        id="date"
                        label="Número do Cartão *"
                        type="int"
                        defaultValue="5381579886310193"
                        className={classes.textField}
                        value={cartao}
                        onChange={(e) => setCartao(e.target.value)}
                    />
                </div>
                <div className="texto">
                    <TextField disabled
                        id="date"
                        label="Número do Quarto *"
                        type="int"
                        defaultValue="0"
                        className={classes.textField}
                        value={quartoNumber}
                    />
                </div>
                <div className="texto">
                    <FormControl className={classes.textField}>
                        <InputLabel id="demo-controlled-open-select-label">Serviços *</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={servicoId}
                            onChange={handleChange}
                        >
                            {servicos.length > 0 && servicos.map(servico => (
                                    <MenuItem value={servico.id}>{servico.tipo}</MenuItem>
                                ))};
                        </Select>
                    </FormControl>
                </div>
                <div className="texto">
                    <TextField
                        id="date"
                        label="Data de Entrada *"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        className={classes.textField}
                        value={data_entrada}
                        onChange={(e) => setData_entrada(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <div className="texto">
                    <TextField
                        id="date"
                        label="Data de Saída *"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        className={classes.textField}
                        value={data_saida}
                        onChange={(e) => setData_saida(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className="texto">
                    <Button size="small" variant="contained" color="primary" onClick={() => handleSave()}>Registrar</Button>
                </div>
            </Container>
        </React.Fragment>
        </div>
    );
}