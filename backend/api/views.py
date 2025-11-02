from django.shortcuts import render
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings
from api import serializer as api_serializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from rest_framework.permissions import AllowAny 
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
import random
from userauths.models import User, Profile


# Create your views here.

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = api_serializer.MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = api_serializer.RegisterSerializer

def generate_randomly_one_time_password(length = 7):
     otp = ''.join([str(random.randint(0 , 9)) for _ in range(length)])
     return otp


class PasswordResetEmailVerifyAPIView(generics.RetrieveAPIView):
        permission_classes = [AllowAny]
        serializer_class = api_serializer.UserSerializer

        def get_object(self):
             email = self.kwargs['email']
             user = User.objects.filter(email = email).first()

             if user:
                  
                  uidb64 = user.pk
                  refresh = RefreshToken.for_user(user)
                  refresh_token = str(refresh.access_token)
                  user.refresh_token = refresh_token
                  user.otp = generate_randomly_one_time_password()  
                  user.save()
                  link = f"http://localhost:5173/create-new-password/?otp={user.otp}&uidb64={uidb64}&refresh_token={refresh_token}"

                  context = {
                       "link": link,
                       "username": user.username
                  }

                  subject = "Password reset email"
                  text_body = render_to_string("email/password_reset.txt", context)
                  html = render_to_string("email/password_reset.html", context)

                  email_msg = EmailMultiAlternatives(
                       subject = subject,
                       from_email = settings.FROM_EMAIL,
                       to = [user.email],
                       body = text_body,
                  )

                  email_msg.attach_alternative(html, "text/html")
                  email_msg.send()

              
                  print("link:==> ", link)
                  return user

#we define a new API view that inherits data from generics.CreateAPIView, for creating a new password for a user             
class PasswordChangeAPIView(generics.CreateAPIView):
     permission_classes = [AllowAny] # AllowAny means that any user can access this view
     serializer_class = api_serializer.UserSerializer

     def create(self, request, *args, **kwargs):
          otp = request.data['otp']
          uidb64 = request.data['uidb64']
          password = request.data['password']
         #we get the user with the same otp and uidb64/id and check if user exist and sets, clear the otp field and save the new changes
          user = User.objects.get(id=uidb64, otp=otp)

          if user:
               user.set_password(password)
               user.otp= ""
               user.save()

               return Response("password changed successfully", status= status.HTTP_201_CREATED)
          
          else:
               return Response("oops something went wrong, try again", status= status.HTTP_404_NOT_FOUND)



          
                