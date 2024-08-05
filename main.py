import requests
from bs4 import BeautifulSoup
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate

# Load environment variables
load_dotenv()

# Set up OpenAI API
openai_api_key = os.getenv('OPENAI_API_KEY')
llm = ChatOpenAI(api_key=openai_api_key, model_name="gpt-3.5-turbo")

# Function to get recommendations from OpenAI
def get_movie_recommendations(movies):
    movie_details = "\n".join(
        [f"{movie['title']} - Score: {movie['score']}, Weekend Gross: {movie['weekend_gross']}, Total Gross: {movie['total_gross']}, Weeks Released: {movie['weeks']}"
         for movie in movies]
    )
    
    prompt_template = PromptTemplate(
        input_variables=["movie_details"],
        template="""Based on the following box office and rating information, recommend one movie to watch. Provide reasons for your recommendations and highlight the best features of the movies.
        
        Movie Details:
        {movie_details}
        """
    )

    sequence = prompt_template | llm
    response = sequence.invoke({"movie_details": movie_details})
    return response.content

# URL of the IMDb box office chart
url = "https://www.imdb.com/chart/boxoffice/"

# Set headers to mimic a browser visit
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}

try:
    # Send a GET request to the URL
    response = requests.get(url, headers=HEADERS)

    # Check if the request was successful
    if response.status_code == 200:
        print("Page retrieved successfully.")

        # Parse the content of the response with BeautifulSoup
        soup = BeautifulSoup(response.content, 'html.parser')

        # Find all movie containers
        movies = soup.find_all('li', class_='ipc-metadata-list-summary-item')

        movie_list = []

        # Extract movie titles, box office earnings, and scores
        for index, movie in enumerate(movies, start=1):
            title_tag = movie.find('h3', class_='ipc-title__text')
            title = title_tag.get_text(strip=True) if title_tag else "N/A"

            # Extract gross earnings and weeks
            gross_info = movie.find_all('span', class_='sc-8f57e62c-2 ftiqYS')
            weekend_gross = gross_info[0].get_text(strip=True) if len(gross_info) > 0 else "N/A"
            total_gross = gross_info[1].get_text(strip=True) if len(gross_info) > 1 else "N/A"
            weeks = gross_info[2].get_text(strip=True) if len(gross_info) > 2 else "N/A"

            # Extract IMDb rating
            score_tag = movie.find('span', class_='ipc-rating-star--rating')
            score = score_tag.get_text(strip=True) if score_tag else "N/A"

            movie_list.append({
                "title": title,
                "weekend_gross": weekend_gross,
                "total_gross": total_gross,
                "weeks": weeks,
                "score": score
            })

        # Get movie recommendations
        recommendations = get_movie_recommendations(movie_list)
        print(recommendations)

    else:
        print(f"Failed to retrieve the page. Status code: {response.status_code}")

except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")
