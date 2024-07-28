@echo off

mkdir backend
cd backend
type nul > Dockerfile
type nul > requirements.txt
mkdir app
cd app
type nul > __init__.py
type nul > routes.py
type nul > models.py
cd ..\..

mkdir frontend
cd frontend
type nul > Dockerfile
type nul > package.json
mkdir src
cd src
type nul > index.js
type nul > App.js
type nul > Login.js
type nul > App.css
cd ..\..

type nul > docker-compose.yml
type nul > README.md
