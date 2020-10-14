from django.contrib import admin
from works.models import Work, WorkPhoto


class WorkAdmin(admin.ModelAdmin):
    search_fields = ('title',)
    list_display = ['title', 'slug', 'created']
    list_filter = ['created']
    class Meta:
        model = Work

admin.site.register(Work, WorkAdmin)
admin.site.register(WorkPhoto)
