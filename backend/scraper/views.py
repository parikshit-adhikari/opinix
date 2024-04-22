from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from bs4 import BeautifulSoup
import requests
import re
from datetime import datetime

class MyScraperView(APIView):
    def post(self, request, *args, **kwargs):
        # Parse incoming product link
        product_link = request.data.get('productLink', '')

        # Check if product link is empty
        if not product_link:
            return Response({'message': 'No product link provided'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Perform web scraping
            response = requests.get(product_link)
            response.raise_for_status()  # Raise an exception for non-200 status codes
            soup = BeautifulSoup(response.content, 'html.parser')

            # Extract reviews and ratings (adjust according to the structure of the webpage)
            reviewText = [] # Store extracted reviews
            dates=[] 

            # Example extraction
            review_elements = soup.find_all('div',class_='a-expander-content reviewText review-text-content a-expander-partial-collapse-content')
            date_elements = soup.find_all('span',class_='review-date')


            for review in review_elements:
                reviewText.append(review.get_text().strip())


            for date in date_elements:
                dates_text=date.get_text().strip()
                date_matches = re.findall(r'\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}\b', dates_text)
                dates.append(date_matches)


            # Convert date strings to %Y-%m-%d format
            dates = [datetime.strptime(date[0], "%B %d, %Y").strftime("%Y-%m-%d") for date in dates]

            # Prepare JSON response
            response_data = {
                'message': 'Data scraped successfully',
                'productLink': product_link,
                'reviews': reviewText,
                'dates':dates
            }

            # Return JSON response
            return Response(response_data, status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
