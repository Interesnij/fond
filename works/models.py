from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from django.contrib.postgres.indexes import BrinIndex
from pilkit.processors import ResizeToFill, ResizeToFit, Transpose
from imagekit.models import ProcessedImageField


class Work(models.Model):
	title = models.CharField(max_length=200, verbose_name="Название")
	slug = models.CharField(max_length=200, unique=True, verbose_name="Английский аналог для вставки в ссылку")
	description = RichTextUploadingField(config_name='default')
	created = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name="Создан")

	class Meta:
		ordering = ["-created"]
		verbose_name = "Проект"
		verbose_name_plural = "Проекты"
		indexes = (BrinIndex(fields=['created']),)

	def __str__(self):
		return self.title

	@classmethod
	def get_next_work(cls, self):
		return cls.objects.filter(pk__gt=self.pk).order_by('pk').first()
	@classmethod
	def get_prev_work(cls, self):
		return cls.objects.filter(pk__lt=self.pk).order_by('-pk').first()

	def get_first_photo(self):
		return self.photo_work.last().file.url
	def get_first_preview(self):
		return self.photo_work.last().preview.url


class WorkPhoto(models.Model):
    work = models.ForeignKey(Work, on_delete=models.CASCADE, related_name="photo_work", blank=True)
    file = ProcessedImageField(format='JPEG', options={'quality': 90}, upload_to="work/", processors=[Transpose(), ResizeToFit(width=1024, upscale=False)])
    preview = ProcessedImageField(format='JPEG', options={'quality': 60}, upload_to="work/", processors=[Transpose(), ResizeToFit(width=102, upscale=False)])
    created = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name="Создано")

    class Meta:
        indexes = (BrinIndex(fields=['created']),)
        verbose_name = 'Фото'
        verbose_name_plural = 'Фото'
        ordering = ["-created"]
