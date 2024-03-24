import axios from '../../config/axios'; 

export const addReserva = reserva =>
{
    return axios
    .post(`/reservas/`, reserva)
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
    .get(`/reservas/${id}`)
    .then(response => {
        return response;
    })
    .catch(error => {
        return null;
    });
}

export const updateReserva = reserva =>
{
    return axios
    .put(`reservas/edit/`, reserva)
    .then(response => {
        return response;
    })
    .catch(error => {
        return null;
    });
}