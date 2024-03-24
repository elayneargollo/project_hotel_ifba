import axios from '../../config/axios'; 

export const addCliente = cliente =>
{
    return axios
    .post(`/clientes/`, cliente)
    .then(response => {
   
        return response;
    })
    .catch(error => {
        return null;
    });
}

export const getAllCliente = () =>
{
    return axios
    .get(`/clientes/`)
    .then(response => {
   
        return response;
    })
    .catch(error => {
        return null;
    });
}

export const getById = id =>
{
    return axios
    .get(`/clientes/${id}`)
    .then(response => {
        return response;
    })
    .catch(error => {
        return null;
    });
}


export const editCliente = cliente =>
{
    return axios
    .put(`clientes/edit/`, cliente)
    .then(response => {
        return response;
    })
    .catch(error => {
        return null;
    });
}

