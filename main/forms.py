from django import forms
from movies2.models import Comment

class CommentForm(forms.Form):
    parent_comment = forms.IntegerField(
        widget=forms.HiddenInput,
        required=False
    )

    comment_area = forms.CharField(
        label="",widget=forms.Textarea(
                attrs={'class': 'sppb-form-control not-resize', 'placeholder': 'Напишите что-нибудь','rows':'0','cols':'0'}
            )
    )
