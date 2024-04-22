#! /bin/bash

echo "Applying migratons"
python3 manage.py makemigrations
python3 manage.py migrate

echo "Staring the Server"
python3 manage.py runserver 0.0.0.0:8000
exec"$@"