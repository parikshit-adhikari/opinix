from collections import defaultdict
from datetime import datetime

# Assuming you already have the tokenizer, model, max_len, and overall defined

def sentimentOverTime(df, sentiment):
    reviewTime = df['reviewTime'].tolist()

    sentiment_over_time = defaultdict(lambda: {"positive": 0, "negative": 0, "neutral": 0})
    for time, sent in zip(reviewTime, sentiment):
        date = datetime.strptime(time, "%Y-%m-%d")
        month_year = date.strftime("%B %Y")
        if sent == "Positive":
            sentiment_over_time[month_year]["positive"] += 1
        elif sent == "Negative":
            sentiment_over_time[month_year]["negative"] += 1
        else:
            sentiment_over_time[month_year]["neutral"] += 1

    result = [{"date": date, **counts} for date, counts in sentiment_over_time.items()]
    return result
