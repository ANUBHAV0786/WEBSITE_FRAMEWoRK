from django.urls import path


from .views import TestimonialListCreateView, ContactCreateView

urlpatterns = [
  
    path('testimonials/', TestimonialListCreateView.as_view()),
    path('contact/', ContactCreateView.as_view()),  
]

