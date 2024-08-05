# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

CREATING A FILE MANAGEMENT APP

1) backend:
done in golang using redis as the database and docker to host redis
to run :  go run main.go
to install dependencies: go mod tidy (required especially for redis v9 installation, or else might show error)
the functionalities added are: 
-creating a new user
-getting user details from the username
-deleting a user
-creating a new file
-deleting a file
-renaming a file

-the router contains the paths of the APIs
-the handler contains the path logic
-the service contains the main business logic
-the infra contains the code for connection to redis
-the docker compose file contains the file for hosting redis via docker
-used cors middleware for cross origin of the ports of backend(:1323) and frontend(:5000)

2)frontend:
done using the npm framework of 'react+vite'
to run : npm run dev
to install dependencies : installed npm and 'npm i' used to install dependencies to run
-pages created like login, delete user, dashboard(where file handling takes place) and page not found
-the .css files created for each of them
-used react router for navigation of the pages (eg. from login to dashbord)
(all th files that are outside the backend are for frontend, installing npm react+vite in necessary for running it)
