# Upbase Limited Backend Developer Test

## INFORMATION

### Codebase

1. JavaScript(Language)
2. Node Js(Environment)
3. MongoDB(Database)

### Project Structure

    |-config
        custom-environment-variable.json
        default.json
        development.json
        production.json
    |-containers
        config.js
        database.js
        logger.js
        routes.js
        upload.js
    |-middleware
        admin.js
        auth.js
        error.js
    |-models
        Admin.js
        Podcast.js
        User.js
    |-public
        |-podcast

        robots.txt
    |-routes
        admin.js
        adminAuth.js
        index.js
        podcast.js
        userAuth.js
        users.js
    |-views
        index.pug
        layout.pug
    index.js
    .gitignore
    package.json
    package-lock.json
    README.md

### Dependencies

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
    "multer": "^1.4.2",
    "winston": "^3.3.3",

## RUNNING THE APPLICATION

Open your terminal in your folder root directory

or

Navigate to your project root directory from your terminal

To install all dependencies at once,
Run

```shell
npm install
```

Note: If you wish to installed the dependencies by yourself, make sure to add the version to avoid minor update breaking the code. e.g

```shell
npm install lodash@4.17.19
```

### STARTING THE APPLICATION

Run (using Node)

```shell
npm start
```

Run (using Nodemon)

```shell
npm run start:dev
```

## Endpoints

1. http://localhost:5000/
2. http://localhost:5000/api/user/
3. http://localhost:5000/api/admin/
4. http://localhost:5000/api/podcast/
5. http://localhost:5000/api/auth/user/
6. http://localhost:5000/api/auth/admin/

## 1. [Landing](http://localhost:5000/api/user) Route

### Request Available

     GET

### Response: a simple landing page form to try out the Podcast Uploads.

## 2. User [Sign Up](http://localhost:5000/api/user) Route

### Request Available

     POST

Data:

```shell
    {
        "firstName":"Lazy",//required min 5 && max 60

        "middleName":"Dev", //min 5 && max 60

        "lastName":"Otaku",  //required min 5 && max 60

        "email":"hello@igmrrf.com", //required min 10 && max 100

        "mobile":"081370454", //min 8 && max 8

        "password":"igmrrf" //required min 8 && max 1024
    }
```

Response:

```shell
{
    "id":"9090582405982049582475258"
}

```

## 3. Admin [Sign Up](http://localhost:5000/api/user) Route

### Request Available

     POST

Data

```shell
    {
        "username":"Lazy",//required min 5 && max 60

        "email":"hello@igmrrf.com", //required min 10 && max 100

        "password":"igmrrf" //required min 8 && max 1024
    }
```

### Response:

```shell
{
    "id":"9090582405982049582475258", //id of admin

    "isAdmin":true //the current status of the admin user
}
```

## 4. Podcast [Queries](http://localhost:5000/api/user) Route

### Request Available

    i. GET

Data

```shell
    {
        "username":"Lazy",//required min 5 && max 60

        "email":"hello@igmrrf.com", //required min 10 && max 100

        "password":"igmrrf" //required min 8 && max 1024
    }
```

### Response:

```shell
    {
        "id":"9090582405982049582475258", //id of admin

        "isAdmin":true //the current status of the admin user
    }
```

    ii. POST

Data

```shell
    {
        "username":"Lazy",//required min 5 && max 60

        "email":"hello@igmrrf.com", //required min 10 && max 100

        "password":"igmrrf" //required min 8 && max 1024
    }
```

### Response:

```shell
{
    "id":"9090582405982049582475258", //id of admin

    "isAdmin":true //the current status of the admin user
}
```

    iii. PUT

Data

```shell
    {
        "username":"Lazy",//required min 5 && max 60

        "email":"hello@igmrrf.com", //required min 10 && max 100

        "password":"igmrrf" //required min 8 && max 1024
    }
```

### Response:

```shell
{
    "id":"9090582405982049582475258", //id of admin

    "isAdmin":true //the current status of the admin user
}
```

    iv. DELETE

Data

```shell
    {
        "username":"Lazy",//required min 5 && max 60

        "email":"hello@igmrrf.com", //required min 10 && max 100

        "password":"igmrrf" //required min 8 && max 1024
    }
```

### Response:

```shell
{
    "id":"9090582405982049582475258", //id of admin

    "isAdmin":true //the current status of the admin user
}
```

### Response: a simple landing page form to try out the Podcast Uploads.

## 5. User [Sign In](http://localhost:5000/api/user) Route

### Request Available

     POST

Data

```shell
    {
        "username":"Lazy",//required min 5 && max 60

        "email":"hello@igmrrf.com", //required min 10 && max 100

        "password":"igmrrf" //required min 8 && max 1024
    }
```

### Response:

```shell
{
    "id":"9090582405982049582475258", //id of admin

    "isAdmin":true //the current status of the admin user
}
```

## 6. Admin [Sign Ip](http://localhost:5000/api/user) Route

### Request Available

     POST

Data

```shell
    {
        "username":"Lazy",//required min 5 && max 60

        "email":"hello@igmrrf.com", //required min 10 && max 100

        "password":"igmrrf" //required min 8 && max 1024
    }
```

### Response:

```shell
{
    "id":"9090582405982049582475258", //id of admin

    "isAdmin":true //the current status of the admin user
}
```
