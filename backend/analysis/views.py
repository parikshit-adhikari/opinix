from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import MyFileSerializer
from rest_framework import status
from .machineLearning.preprocessing.dataProcessing import preprocess_data
from .machineLearning.predict import predictions

class MyFileView(APIView):
    def post(self, request, *args, **kwargs):
        fileSerializer = MyFileSerializer(data=request.data)
        if fileSerializer.is_valid():
            fileSerializer.save()
            
            # Extract and preprocess data
            filePath = fileSerializer.instance.file.path
            data = preprocess_data(filePath)

            value=predictions(data)
            response= Response(value, status=status.HTTP_201_CREATED)
            return response
        else:
            return Response(fileSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
        



