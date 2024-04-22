from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation
import pandas as pd


def topicModeling(reviewText):

# Creating a document-term matrix using CountVectorizer
    vectorizer = CountVectorizer(stop_words='english')
    dtm = vectorizer.fit_transform(reviewText)

# Fitting the LDA model
    num_topics = 1  # Here we can adjust the number of topics based as our need
    lda = LatentDirichletAllocation(n_components=num_topics, random_state=42)
    lda.fit(dtm)

# Displaying the top words for each topic
    feature_names = vectorizer.get_feature_names_out()
    topic_words = []

    for topic_idx, topic in enumerate(lda.components_):
        top_words_idx = topic.argsort()[:-50-1:-1]  # Displaying top 50 words for each topic
        topic_words = [feature_names[i] for i in top_words_idx]

    return topic_words