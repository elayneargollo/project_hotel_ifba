from django.contrib import admin
from hotelifba.models import Empresa, Empregado, Quarto, Cliente, Servico, Reserva, Estadia, Estatistica

class Quartos(admin.ModelAdmin):
    list_display = ('id', 'numero', 'capacidade', 'isDisponivel')   
    search_fields = ('id','numero', 'capacidade', 'isDisponivel')

admin.site.register(Quarto, Quartos)

class Empresas(admin.ModelAdmin):
    list_display = ('id', 'nome', 'endereco', 'telefone','email','categoria')   
    search_fields = ('nome','categoria')

admin.site.register(Empresa, Empresas)

class Empregados(admin.ModelAdmin):
    list_display = ('id', 'nome', 'login', 'password','funcao')   
    search_fields = ('nome', 'funcao','password')

admin.site.register(Empregado, Empregados)

class Servicos(admin.ModelAdmin):
    list_display = ('id','preco','estacao_ano','tipo')   
    search_fields = ('id','preco','estacao_ano','tipo')

admin.site.register(Servico, Servicos)

class Clientes(admin.ModelAdmin):
    list_display = ('id', 'data_nascimento', 'email','endereco','nacionalidade','nome','telefone','numero_identificacao','data_expedicao')   
    search_fields = ('id', 'nome', 'email')

admin.site.register(Cliente, Clientes)

class Reservas(admin.ModelAdmin):
    list_display = ('id', 'data_entrada', 'data_saida','quantidade_pessoas','servico', 'quarto', 'cliente', 'cartao')   
    search_fields = ('id', 'data_entrada', 'data_saida','quarto__numero', 'cliente','cartao')

admin.site.register(Reserva, Reservas)

class Estadias(admin.ModelAdmin):
    list_display = ('id', 'id','checkin','checkout','data_saida_prevista','quantidade_pessoas','quantidade_quartos','servico_pretendido', 'cliente','isMudancaDeQuarto')   
    search_fields = ('id', 'data_entrada', 'data_saida')

admin.site.register(Estadia, Estadias)

class Estatisticas(admin.ModelAdmin):
    list_display = ('id','trimestre','taxaOcupacaoQuartos','taxaQuartosVendidos','faturamentoDoTrimestre','faturamentoAnual','ano','clienteId', 'clientePremium','custoTotalCliente')
    search_fields = ('id','trimestre','taxaOcupacaoQuartos','taxaQuartosVendidos','faturamentoDoTrimestre','faturamentoAnual','ano','clienteId', 'clientePremium','custoTotalCliente')

admin.site.register(Estatistica, Estatisticas)
