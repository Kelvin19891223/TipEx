from django.conf.urls import include, url  # noqa
from django.urls import path
from django.contrib import admin
from django.shortcuts import redirect
from django.views.generic import TemplateView
import django_js_reverse.views
from django.views import generic
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/subscribe/', views.SubscribeView.as_view()),
    path("tipex_admin/", admin.site.urls, name="admin"),

    path("jsreverse/", django_js_reverse.views.urls_js, name="js_reverse"),
    # url(r'^jsreverse/$', django_js_reverse.views.urls_js, name='js_reverse'),
    # url('', TemplateView.as_view(template_name='itworks.html'), name='home'),
    url(r"^.*$", generic.TemplateView.as_view(template_name='itworks.html')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

