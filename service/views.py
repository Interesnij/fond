from django.views.generic.base import TemplateView
from generic.mixins import CategoryListMixin


class ServiceView(TemplateView, CategoryListMixin):
    template_name = "service.html"
