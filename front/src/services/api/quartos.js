import axios from '../../config/axios';

export const getQuartosDisponiveis = numerode_pessoas =>
{
    return axios
    .get(`/quartoDisponivel/${numerode_pessoas}`)
    .then(response => {
        return response;
    })
    .catch(error => {
        console.log(error)
    });
}

export const getByIdQuarto = id =>
{
    return axios
    .get(`/quartos/${id}`)
    .then(response => {
        return response;
    })
    .catch(error => {
        return null;
    });
}