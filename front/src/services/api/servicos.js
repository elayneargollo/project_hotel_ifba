import axios from '../../config/axios';

export const getAllServico = () =>
{
    return axios
    .get(`/servicos/`)
    .then(response => {
        return response;
    })
    .catch(error => {
        console.log(error)
    });
}


export const getByIdServico = id =>
{
    return axios
    .get(`/servicos/${id}`)
    .then(response => {
        return response;
    })
    .catch(error => {
        return null;
    });
}