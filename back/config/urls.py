from django.contrib import admin
from django.urls import path
from rest_framework import routers
from hotelifba import views
from hotelifba.views import  UserViewSet, GroupViewSet
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

router= routers.DefaultRouter()
router.register(r'users',UserViewSet)
router.register(r'groups', GroupViewSet)

schema_view = get_schema_view(
   openapi.Info(
      title="Hotel IFBA API",
      default_version='v1',
      description="Subsistema para empregados (recepcionistas e gerente), acessível apenas na rede interna (aplicação de gestão) realizada em Django",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),

    # autorização
    path('login/', views.login_startup),
    path('logout/', views.logout_startup),

    # empresas
    path('empresas/', views.empresa_list),
    path('empresas/<int:pk>', views.empresa_detail),

    # quartos
    path('quartos/', views.quarto_list),
    path('quartos/<int:pk>', views.quarto_detail),
    path('quartoDisponivel/<int:capacidade>',views.quarto_disponivel_capacidade),

    # estadias
    path('estadias/', views.estadia_list),
    path('estadias/<int:pk>', views.estadia_detail),
    path('checkout/<int:pk>', views.checkout),

    # reservas
    path('reservas/', views.reserva_list),
    path('reservas/<int:pk>', views.reserva_detail),
    path('reservas/edit/', views.reserva_update),

    # servico
    path('servicos/', views.servico_list),
    path('servicos/<int:pk>', views.servico_detail),

    # cliente
    path('clientes/', views.cliente_list),
    path('clientes/<int:pk>', views.client_detail),
    path('clientes/edit/', views.update),

    # empregados
    path('empregados/', views.empregado_list),
    path('empregados/<int:pk>', views.empregado_detail),
   
    # estatisticas
    path('estatisticas/', views.estatistica),
   
    #swagger
    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc')
]