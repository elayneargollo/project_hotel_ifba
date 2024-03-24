import axios from '../../config/axios'; 

export const getCaracteristicas = () =>
{
    return axios
    .get(`/empresas/`)
    .then(response => {
   
        return response;
    })
    .catch(error => {
        return null;
    });
}