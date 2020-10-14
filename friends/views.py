from django.views.generic import ListView
from friends.models import Friend
from generic.mixins import CategoryListMixin


class FriendsView(ListView, CategoryListMixin):
	model = Friend
	template_name="friends.html"

	def get_queryset(self):
		friends = Friend.objects.only("pk")
		return friends
