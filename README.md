## CRUD application CPf-CNPJ-Register using NodeJS Express, MongoDB and React Hooks

This project is based in a user register;

Backend is build using NodeJS Express, and Frontend is build using React Hooks, the database used to perform data persistence is MongoDB.

The application works as follows: 
* Frontend performs a request to the backend >
* Backend performs a request to the database > 
* The database returns the response > 
* The backend processes the response > And returns the response to the frontend.

The `api` uri preceeds all API endpoints and the following endpoints are currently available
* GET `/users/` - Get All users.
* POST `/users/` - Create a new User(it is required: name, cpfcnpj and blacklist(boolean) in the body).
* PUT `/users/:id` - Update a User.
* DELETE `/users/:id` - Delete a User.

* GET `/status` - Get uptime server.

To configure this project, follow the steps below:
