import React, { useContext, useState} from "react";
import { Context } from '../../contexts/auth'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import '../login/Sytle.css';
import { registrarCliente, editarCliente } from '../../routes/paths';
import { useHistory } from 'react-router-dom';


export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { authenticated, handleLogin} = useContext(Context);

  if(authenticated)
  {
    history.push(editarCliente);
  }

   return (
      <div className="conteudoLogin">
        <div className="boxLogin">
          <h1>Login</h1>
          <div>
            <TextField
              required
              id="standard-required"
              label="Enter your username"
              defaultValue="Hello World"
              size="small"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />       
          </div>

          <div className="texto">
            <TextField
              required
              id="standard-required"
              label="Enter your password"
              defaultValue="Hello World"
              size="small"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="senhas">
            <Link href={registrarCliente} >
              Cadastrar uma conta
            </Link>
          </div>

          <div className="button">
            <Button size="small" variant="contained" color="primary" onClick={() => handleLogin(username, password, history)}>Entrar</Button>
          </div>

        </div>
      </div>
    );
  }