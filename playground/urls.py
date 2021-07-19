from django.urls import path
from . import views
urlpatterns = [
    #path('hello/', views.say_hello),
    path('index/', views.index),
    path('index/list/', views.list),
    path('index/shop/', views.shop),
    path('index/achieve/', views.achieve),
    path('index/custom/', views.custom),
    path('index/study/', views.study)
    
]