from django.conf.urls import url, include
from django.contrib.auth import views as auth_views
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', include ('main.urls')),
    url(r'^terms/', include('terms.urls')),
    url(r'^policy/', include('policy.urls')),
    url(r'^friends/', include('friends.urls')),
    url(r'^proects/', include('works.urls')),
    url(r'^service/', include('service.urls')),

    url(r'^ckeditor/', include('ckeditor_uploader.urls')),

]  +static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
