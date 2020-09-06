from rest_framework import serializers
from .models import SubscribeModel

class SubscribeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubscribeModel
        fields = '__all__'
