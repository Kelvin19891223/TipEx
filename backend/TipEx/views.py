from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import SubscribeModel
from .serializers import SubscribeSerializer
from django.http import HttpResponse
import json

# Save the email for the subscribe
class SubscribeView(APIView):
    def post(self, request, format = None):
        serial = SubscribeSerializer(data=request.data)
        if serial.is_valid():
            serial.save()
        else:
            print(serial.errors)

        return HttpResponse(json.dumps({"Status": True}), content_type="application/json")
