function ReservaFieldsValidation(data_entrada, data_saida, quantidade_pessoas, cliente, servico, quarto)
{
  if(data_entrada === "")
  {
    return "Data de entrada é obrigatório";
  }
  else if(data_saida === ""){
    return "Data de saída é obrigatório";
  }
  else if(quantidade_pessoas === "")
  {
    return "Quantidade de pessoas é obrigatório";
  } 
  else if(cliente === "")
  {
    return "Cliente é obrigatório";
  } 
  else if(servico === "")
  {
    return "Serviço é obrigatório";
  } 
  else if(typeof quarto === "undefined")
  {
    return "Não há quartos disponíveis para esta quantidade de pessoas";
  } 
}

module.exports = {
    ReservaFieldsValidation: ReservaFieldsValidation,
};