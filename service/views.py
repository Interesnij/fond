from django.views.generic.base import TemplateView


class ServiceView(TemplateView):
    template_name = "service.html"
