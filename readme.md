# Opinix


## Table of Contents

- [Demo](#demo)
- [Technologies](#technologies)
- [Installation](#installation)


## Demo



## Technologies

- Browserless
- React
- Redux Toolkit
- Django
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
2. Pull from git lfs
   ```bash
   git lfs pull
   ```

3. Track the large files
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


