FROM python:3.10 
WORKDIR /usr/src/backend
COPY ./requirement.txt .
RUN apt-get update && apt-get install -y \
    build-essential \
 && pip install --upgrade pip \
 && pip install -r requirement.txt \
 && apt-get purge -y --auto-remove build-essential \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

EXPOSE 8000

COPY . .

CMD [ "sh", "startup.sh" ]