from django.views.generic.base import ContextMixin
from django.conf import settings
from works.models import Work


class CategoryListMixin(ContextMixin):

	def get_context_data(self,**kwargs):
		context = super(CategoryListMixin,self).get_context_data(**kwargs)
		context["current_url"] = self.request.path
		context["works"] = Work.objects.only("pk")
		return context
