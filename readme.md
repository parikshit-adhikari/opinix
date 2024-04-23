# Opinix

#### About Project

The project Opinix is an extensive effort aimed at tackling the growing problems related to e-commerce. Currently, this is the era of e-commerce, and most people prefer purchasing products online. There are thousands of reviews on each product and to go through each review and analyze the sentiment of every customer is a complicated task. Through the use of machine learning, web scraping (Browserless), and sentiment analysis (Bi-LSTM), the Opinix web application analyzes user evaluations and presents the opinions of a customer in a visually pleasing way.

#### Project goal

The goal of this project is to create a platform through which companies can easily analyze the sentiments of customers on their products and look out for room for improvement if there is any. Through the extraction of significant data from the huge world of consumer evaluations, Opinix hopes to transform decision-making processes across a range of application domains, including online shopping platforms, brand feedback, and customer service improvement.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [License](#license)

## Demo

https://github.com/parikshit-adhikari/opinix/assets/148355925/29edfc7a-c99d-4c7a-a149-773d8267c433

## Features

- Web scraping using browserless
- Highly efficient and accurate sentiments of individual reviews, sentiments over time, keywords and overall sentiments
- Authentication and storage using firebase

## Technologies

- Browserless
- React, D3, Chart.js
- Redux Toolkit
- Django
- Node.js
- Bi-LSTM
- Firebase

## Installation

### Prerequisites

You will need to install git lfs.
You can install it by [here](https://git-lfs.com/)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Rajendrakhanal/Opinix.git
   ```

2. Change directory to `Opinix`

   ```bash
   cd Opinix
   ```

3. Pull from git lfs

   ```bash
   git lfs pull
   ```

4. Track the large files
   ```bash
   git lfs track "*.txt"
   ```

#### FrontEnd

1. Change directory to `frontend`

   ```bash
   cd frontend
   ```

2. Installation of node packages

   ```bash
    npm i
   ```

3. Running the project:

   ```bash
   npm run dev
   ```

#### Backend

1. Change directory to `backend`

   ```bash
   cd backend
   ```

2. Installation of necessary modules

   ```bash
    pip install -r requirement.txt
   ```

3. Create migration files

   ```bash
   python3 manage.py makemigrations
   ```

4. Apply the migrations to the database

   ```bash
   python3 manage.py migrate
   ```

5. Running the project:

   ```bash
   python3 manage.py runserver
   ```

6. Navigate to browserless directory and run:

```bash
npm i
```

then:

```bash
npm start
```

## License

This project is licensed under the [MIT License](/LICENSE).
