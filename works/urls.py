from proects.views import WorksListView, WorkView
from django.conf.urls import url


urlpatterns = [
	url(r'^$', WorksListView.as_view(), name="works_index"),
	url(r'^(?P<slug>[\w\-]+)/$', WorkView.as_view(), name="work_detail"),
]
