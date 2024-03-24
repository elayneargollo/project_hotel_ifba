from django.db import models

class Empresa(models.Model):
    """Modelo que representa empresa."""

    nome = models.CharField(max_length=100, help_text='Nome da Empresa', blank=False, null=True)
    endereco = models.CharField(max_length=200, help_text='Endereço da Empresa', blank=False, null=True)
    telefone =  models.CharField( max_length=15, blank=True, null=True, help_text='Número do telefone com DDD')
    email = models.EmailField(max_length=256, blank=False, null=True, help_text='Email da Empresa')
    categoria = models.CharField(max_length=100, help_text='Categoria da empresa', blank=False, null=True)

    def __str__(self):
        return self.nome

class Empregado(models.Model):
    """Modelo que representa empregado."""

    FUNCAO_CHOICES = (
        ("R", "Recepcionista"),
        ("G", "Gerente"),
    )

    nome = models.CharField(max_length=100, help_text='Nome do colaborador', blank=False, null=True,)
    login = models.CharField(max_length=200, help_text='Login de acesso', blank=False, null=True,)
    password = models.CharField(max_length=13, blank=False, null=False, help_text='Senha de acesso')
    funcao = models.CharField(max_length=1, choices=FUNCAO_CHOICES, blank=False, null=False)
    empresa = models.ForeignKey(Empresa,on_delete=models.CASCADE, related_name="client", blank=False, null=True)

    def __str__(self):
        return self.nome


class Quarto(models.Model):
    """Modelo que representa quartos."""

    numero = models.CharField(max_length=4, default=0, blank=False, null=False, unique=True, help_text='Número do Quarto')
    capacidade = models.IntegerField(default=0, blank=False, null=False, help_text='Capacidade do Quarto')
    isDisponivel = models.BooleanField(default=True, help_text='Quarto está reservado')

    def __str__(self):
        return self.numero

class Servico(models.Model):
    """Modelo que representa serviço."""

    EPOCA_CHOICES = (
        ("Primavera", "Primavera"),
        ("Outono", "Outono"),
        ("Inverno", "Inverno"),
        ("Verão", "Verão"),
    )

    tipo = models.CharField(max_length=20, blank=False, null=False)
    preco = models.DecimalField(max_digits=8, decimal_places=2, help_text='Preço Diário')
    numero_pessoas = models.IntegerField(default=0, blank=False, null=False, help_text='Número de pessoas')
    estacao_ano = models.CharField(max_length=50,  help_text='Função do colaborador', choices=EPOCA_CHOICES, blank=False, null=False)

    def str(self):
        return self.tipo

class Cliente(models.Model):
    """Modelo que representa cliente."""

    data_nascimento= models.DateField(help_text='Data de Nascimento')
    email = models.EmailField(max_length=256, blank=True, null=True, help_text='Email do Cliente')
    endereco = models.CharField(max_length=200, help_text='Endereço do Cliente')
    nacionalidade = models.CharField(max_length=20, help_text='Nacionalidade do Cliente')
    nome = models.CharField(max_length=100, help_text='Nome do Cliente')
    telefone = models.CharField(max_length=13, blank=True, null=True, help_text='Número do telefone com DDD')
    numero_identificacao= models.IntegerField(help_text='Número do Documento')
    data_expedicao = models.DateField(help_text='Data de Expedição') 
    senha = models.CharField(max_length=20, help_text='Senha do cliente')

    def __str__(self):
        return self.nome

class Reserva(models.Model):
    """Modelo que representa reserva."""
    
    cartao = models.CharField(max_length=20, help_text='Dados do Cartao')
    data_entrada= models.DateTimeField(help_text='Data de Entrada')
    data_saida = models.DateTimeField(help_text='Data de Saida') 
    quantidade_pessoas = models.IntegerField(help_text='Quantidade de Pessoas')   
    quarto = models.ForeignKey(Quarto,on_delete=models.CASCADE, related_name="hotelifbaReservaQuarto", blank=False, null=True)
    servico = models.ForeignKey(Servico,on_delete=models.CASCADE, related_name="hotelifbaReservaServico", blank=False, null=True)
    cliente = models.ForeignKey(Cliente,on_delete=models.CASCADE, related_name="hotelifbaReservaCliente", blank=False, null=True)
    
    def get_list(self):
        return [self.servico]

class Estadia(models.Model):
    """Modelo que representa estadia."""

    checkin= models.DateTimeField(help_text='CheckIn')
    checkout= models.DateTimeField(help_text='CheckOut')
    data_saida_prevista= models.DateField(help_text='Data de Entrada')
    quantidade_pessoas = models.IntegerField(help_text='Quantidade de Pessoas')    
    quantidade_quartos = models.IntegerField(help_text='Quantidade de Quartos')    
    servico_pretendido = models.CharField(max_length=20, help_text='Serviço Pretendido')
    cliente = models.ForeignKey(Cliente,on_delete=models.CASCADE, related_name="client", blank=False, null=True)
    reserva = models.ForeignKey(Reserva,on_delete=models.CASCADE, related_name="client", blank=False, null=True)
    cartao = models.CharField(max_length=20, help_text='Dados do Cartao')
    servico = models.ForeignKey(Servico,on_delete=models.CASCADE, related_name="hotelifbaEstadiaTipo", blank=False, null=True)
    isMudancaDeQuarto = models.BooleanField(default=False, help_text='Solicitou mudança de quarto')
    
    def __str__(self):
        return self.servico_pretendido

class Estatistica(models.Model):
    """Modelo que representa Estatistica."""

    trimestre = models.CharField(help_text='Período correspondente ao cálculo', max_length=256)
    clienteId = models.CharField(help_text='Id do cliente', max_length=256)
    custoTotalCliente = models.FloatField(help_text='Custo total de um determinado cliente')
    taxaOcupacaoQuartos = models.FloatField(help_text='Relação entre pessoas alojadas e capacidade máxima')
    taxaQuartosVendidos = models.FloatField(help_text='Número de quartos vendidos em relação ao número total de quartos')
    faturamentoDoTrimestre = models.FloatField(help_text='Total do faturamento referente ao trimestre')
    faturamentoAnual = models.FloatField(help_text='Faturamento do ano')
    clientePremium = models.CharField(help_text='Cliente com maior gasto', max_length=256)
    ano = models.CharField(help_text='Ano', max_length=256)   
    
    def __str__(self):
        return self.trimestre
