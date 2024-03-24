from django.contrib.auth.models import User, Group
from rest_framework import serializers
from hotelifba.models import Empresa, Empregado, Quarto, Cliente, Servico, Reserva, Estadia, Estatistica

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = ['id','nome','endereco','telefone','email','categoria']
        
class EmpregadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empregado
        fields = ['id','nome','funcao','empresa', 'password','login']
        
class QuartoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quarto
        fields = ['id','numero','capacidade','isDisponivel']        

class ServicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servico
        fields = ['id','tipo','preco','estacao_ano','numero_pessoas']        

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id','data_nascimento','email','endereco','nacionalidade','nome','telefone','numero_identificacao','data_expedicao']

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields = ['id','data_entrada','data_saida','quantidade_pessoas','servico','cliente','cartao','quarto']
    
class EstadiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estadia
        fields = ['id','cartao','checkin','checkout','data_saida_prevista','quantidade_pessoas','quantidade_quartos','cliente','reserva','isMudancaDeQuarto']

class EstatisticaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estatistica
        fields = ['id','trimestre','taxaOcupacaoQuartos','taxaQuartosVendidos','faturamentoDoTrimestre','faturamentoAnual','ano','clientePremium']  
