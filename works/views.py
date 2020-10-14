from django.views.generic.base import TemplateView
from django.views.generic import ListView
from works.models import Work


class WorksListView(ListView):
	template_name="works_index.html"

	def get_queryset(self):
		works = Work.objects.only("pk")
		return works


class WorkView(TemplateView):
	template_name = "work.html"

	def get(self,request,*args,**kwargs):
		self.work = Work.objects.get(slug=self.kwargs["slug"])
		return super(WorkView,self).get(request,*args,**kwargs)

	def get_context_data(self,**kwargs):
		context=super(WorkView,self).get_context_data(**kwargs)
		context["object"] = self.work
		return context
