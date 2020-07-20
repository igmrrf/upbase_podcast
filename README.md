# Upbase Limited Backend Developer Test

## Constituents

1. JavaScript(Language)
2. Node Js(Platform)
3. MongoDB(Database)

## Project Structure

    |-config
        config.js
        custom-environment-variable.json
        default.json
        development.json
        production.json
    |-database
        index.js
    |-middleware
        auth.js
        logger.js
    |-models
        Customer.js
        Genre.js
        Movie.js
        Rental.js
        User.js
    |-public
        readme.md
        readme.txt
    |-routes
        auth.js
        customer.js
        genre.js
        index.js
        movie.js
        rental.js
        user.js
    |-src
        index.js
    |-views
        auths.pug
        customers.pug
        genres.pug
        index.pug
        movies.pug
        rentals.pug
        users.pug
    .gitignore
    package.json
    package-lock.json
    README.md

## Dependencies

    "@hapi/joi": "^17.1.1",
    "bcrypt": "^5.0.0",
    "body-parser": "^1.19.0",
    "config": "^3.3.1",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-async-errors": "^3.1.1",
    "jsonwebtoken": "^8.5.1",
    "lodash": "^4.17.19",
    "mongoose": "^5.9.25",
    "morgan": "^1.10.0",
    "winston": "^3.3.3",
    "winston-mongodb": "^5.0.1"

Run the following in your terminal to install all the dependencies

```shell
npm install
```

But if you wish to install them yourself, make sure to add the version e.g

```shell
npm install lodash@4.17.19
```

# Starting the Server

Run the following to start,

```shell
npm start
```

Run this to start the server with all development features

```shell
npm run start:dev
```

## Endpoints

1. http://localhost:5000/api/user/
2. http://localhost:5000/api/admin/
3. http://localhost:5000/api/podcast/
4. http://localhost:5000/api/auth/user/
5. http://localhost:5000/api/auth/admin/

### 1. User [Sign Up](http://localhost:5000/api/user) Route

### 1. Admin [Sign Up](http://localhost:5000/api/user) Route

### 1. Podcast [Queries](http://localhost:5000/api/user) Route

### 1. User [Sign In](http://localhost:5000/api/user) Route

### 1. Admin [Sign Ip](http://localhost:5000/api/user) Route
