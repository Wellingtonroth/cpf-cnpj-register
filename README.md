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

### Installation

First of all you will have to download the project, run the following command:

```sh
$ git clone https://github.com/Wellingtonroth/cpf-cnpj-register.git
```

You need to access the application folder:

```sh
$ cd cpf-cnpj-register
```

You will se 2 folders, backend and frontend;

You can start the frontend with

```sh
$ yarn start
```

And start the backend with

```sh
$ yarn dev
```

Now you can access in the browser using the following URL

```sh
http://localhost:3000/
```
