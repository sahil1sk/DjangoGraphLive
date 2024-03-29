"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView   # This is for showing at one template

urlpatterns = [
    path("", TemplateView.as_view(template_name="index.html")),   # so this will help to go to the all the pages # we make this endpoint at last so that our app will discover all the endpoints    
    path('admin/', admin.site.urls),
    path('graphqlApi/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
]
