from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Testimonial
from .serializers import TestimonialSerializer
from rest_framework.parsers import MultiPartParser, FormParser

class TestimonialListCreateView(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request):
        testimonials = Testimonial.objects.order_by('-created_at')
        serializer = TestimonialSerializer(testimonials, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TestimonialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


#######################

from .models import Contact
from .serializers import ContactSerializer

from django.core.mail import send_mail

class ContactCreateView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()

            # Send email notification
            subject = f"New Contact from {contact.name}"
            message = f"Subject: {contact.subject}\n\nMessage:\n{contact.message}\n\nEmail: {contact.email}"
            send_mail(subject, message, 'paenterpriseslimited@gmail.com', ['paenterpriseslimited@gmail.com'])

            return Response({'message': 'Contact message received and emailed.'}, status=201)
        return Response(serializer.errors, status=400)
