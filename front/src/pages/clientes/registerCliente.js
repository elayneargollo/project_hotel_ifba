import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { addCliente } from "../../services/api/clientes";
import { login } from '../../routes/paths';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(4),
        width: 1200,
    }
}));

export default function LayoutTextFields() {
    const classes = useStyles();
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero_identificacao, setDataIdentificacao] = useState('');
    const [data_expedicao, setDataExpedicao] = useState('');
    const [data_nascimento, setDataNascimento] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSave() {

        setLoading(true)
        let cliente = { data_nascimento, email, endereco, nacionalidade, nome, telefone, numero_identificacao, data_expedicao };

        async function getResponse() {

            const data = await addCliente(cliente);
            setLoading(false);

            if (data != null) {
                swal("Usuário criado!", "Sua senha será enviada por email", "success");
                history.push(login);
            }

            else
                swal("Houve um erro", "Verifique as informações e tente novamente", "error");

        }

        getResponse();

    }

    if (loading) {
        return (
            <div className="loading">
                <CircularProgress />
            </div>
        );
    }
    return (
        <div className="conteudoLogin">
            <div className="boxLogin">
                <h1>Registre-se como cliente</h1>
                <div className={classes.root}>

                    <div>
                        <TextField
                            id="filled-full-width"
                            label="Nome *"
                            style={{ margin: 8 }}
                            placeholder="Digite seu nome"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <TextField
                            label="Telefone/Celular *"
                            id="margin-none"
                            defaultValue="07199124578"
                            className={classes.textField}
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                        <TextField
                            label="Nacionalidade *"
                            id="margin-none"
                            defaultValue="Brasileira"
                            className={classes.textField}
                            value={nacionalidade}
                            onChange={(e) => setNacionalidade(e.target.value)}
                        />

                        <TextField
                            label="E-mail *"
                            id="margin-none"
                            defaultValue="teste@teste.com.br"
                            className={classes.textField}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            id="filled-full-width"
                            label="Endereço *"
                            style={{ margin: 8 }}
                            placeholder="Digite seu endereço"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />

                        <TextField
                            id="date"
                            label="Número de identificação *"
                            type="int"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            value={numero_identificacao}
                            onChange={(e) => setDataIdentificacao(e.target.value)}
                        />

                        <TextField
                            id="date"
                            label="Data de expedição *"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            value={data_expedicao}
                            onChange={(e) => setDataExpedicao(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="date"
                            label="Data de nascimento *"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            value={data_nascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                </div>
                <div className={classes.button}>
                    <Button size="small" variant="contained" color="primary" onClick={() => handleSave()}>Registrar</Button>
                </div>
            </div>
        </div>
    );
}
