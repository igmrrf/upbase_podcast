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

### SETTING UP ENVIRONMENTAL VARIABLES

Run

```shell
    $ touch .env
    $ code .env
```

Note: _code_ is a command that comes with [VsCode](https://code.visualstudio.com/). Only run it if you have VsCode install and configured correctly on your machine

Then configure the file as follows

```shell
    PORT=port_to_run_server
    UPBASE_PASSWORD=random_password
    UPBASE_USERNAME=random_username
    UPBASE_DATABASE=mongodb_url
    UPBASE_JWT_SCECRET_KEY=json-web_token_secret_key
```

### STARTING THE APPLICATION

To install all dependencies at once,
Run

```shell
npm install
```

Note: If you wish to installed the dependencies by yourself, make sure to add the version to avoid minor update breaking the code. e.g

```shell
npm install lodash@4.17.19
```

Run (using Node)

```shell
npm start
```

Run (using Nodemon)

```shell
npm run start:dev
```

## ENDPOINTS

1. http://localhost:5000/
2. http://localhost:5000/api/user/
3. http://localhost:5000/api/admin/
4. http://localhost:5000/api/podcast/
5. http://localhost:5000/api/auth/user/
6. http://localhost:5000/api/auth/admin/

## 1. [Landing](http://localhost:5000/) Route

### CRUD OPTIONS AVAILABLE

     GET

### Response: a simple landing page form to try out the Podcast Uploads.

## 2. User [Sign Up](http://localhost:5000/api/user) Route

### CRUD OPTIONS AVAILABLE

     POST

Data:

```shell
    {
        "firstName":"Lazy",//required min 5 && max 60

        "middleName":"Dev", //min 5 && max 60

        "lastName":"Otaku",  //required min 5 && max 60

        "email":"hello@igmrrf.com", //required min 10 && max 100

        "mobile":"081370454", //min 8 && max 8

        "password":"tldo1234" //required min 8 && max 1024
    }
```

Response:

```shell
{
    "_id":"9090582405982049582475258" //id of user

    "email":"hello@igmrrf.com",

}

```

## 3. Admin [Sign Up](http://localhost:5000/api/admin) Route

### CRUD OPTIONS AVAILABLE

     POST

Data

```shell
    {
        "username":"lazydev",//required min 5 && max 60

        "email":"hello@igmrrf.com", //required min 10 && max 100

        "password":"tldo1234" //required min 8 && max 1024
    }
```

### Response:

```shell
{
    "id":"9090582405982049582475258", //id of admin

    "isAdmin":true //the current status of the admin
}
```

## 4. Podcast [Queries](http://localhost:5000/api/podcast) Route

### CRUD OPTIONS AVAILABLE

```shell
1. GET
2. POST
3. PUT
4. DELETE
```

    i. GET

url: http://localhost:5050/api/podcasts/ (Admin Only)

Data

```shell
    //No Data Needed
```

### Response:

```shell
   [
        {
            "title":"Crud Operations",

            "description":"CRUD operations are the basics of backend development. As basically every other operations will be based on your understanding of this.",

            "tags":["crud","server","node"],

            "file": "public/podcasts/12334484fffffff393933fdfddfdg.mp3",

            "dateUploaded": "21 July 2020"
        },
        {
            "title":"Hello World",

            "description":"Hello world is the first thing you'll print or possibly learn in any programming langaue and surely you'll understand why",

            "tags":["basic","developer","helloworld"],

            "file": "public/podcasts/1233448484939393933fdfddfdg.mp3",

            "dateUploaded": "22 July 2020"
        }
        ......
   ]
```

    ii. POST

url: http://localhost:5050/api/podcasts/ (Admin && User)

Data

```shell
    {
        "title":"Hello World",//required min 5 && max 60

        "description":"Hello world is the first thing you'll print or possibly learn in any programming langaue and surely you'll understand why", //required min 10 && max 100

        "tags":["basic","developer","helloworld"], //required an array min 1 and max 4

        "file": podcast.mp3,

    }
```

### Response:

```shell
    {
         "id":"3fkdflkjdfdfdfahdfjhadfd8fadf09adf90",

        "title":"Hello World",

        "description":"Hello world is the first thing you'll print or possibly learn in any programming langaue and surely you'll understand why",

        "tags":["basic","developer","helloworld"],

        "file": "public/podcasts/1233448484939393933fdfddfdg.mp3",

        "dateUploaded": "22 July 2020"
    }
```

    iii. PUT

url: http://localhost:5050/api/podcasts/:id (Admin Only)

Data

```shell
    Params {

        "id":"3fkdflkjdfdfdfahdfjhadfd8fadf09adf90" //id of podcast

    },

    //Body Options are based on the Changes made.

    body:{
        "title":"lazydev",//required min 5 && max 60

        "description":"Hello world is the first thing you'll print or possibly learn in any programming langaue and surely you'll understand why", //required min 100 && max 1000

        "tags":["newbie","programmer","coder"] //required an array min 1 and max 4

        "file": podcast.mp3,

    }
```

### Response:

```shell
    {
        "_id":"3fkdflkjdfdfdfahdfjhadfd8fadf09adf90",

        "title":"lazydev",//required min 5 && max 60

        "description":"hello@igmrrf.com", //required min 10 && max 100

        "tags":["crud","podcast","love"] //required an array min 1 and max 4

        "file": "public/podcasts/1233448484939393933fdfddfdg.mp3",

        "dateUploaded": "22 July 2020"
    }
```

    iv. DELETE

url: http://localhost:5050/api/podcasts/:id (Admin Only)

Data

```shell
  Params {

        "id":"3fkdflkjdfdfdfahdfjhadfd8fadf09adf90"

    }
```

### Response:

```shell
    {
        "_id":"3fkdflkjdfdfdfahdfjhadfd8fadf09adf90",

        "title":"lazydev",//required min 5 && max 60

        "description":"hello@igmrrf.com", //required min 10 && max 100

        "tags":["crud","podcast","love"] //required an array min 1 and max 4

        "file": "public/podcasts/1233448484939393933fdfddfdg.mp3",

        "dateUploaded": "22 July 2020"
    }
```

## 5. User [Sign In](http://localhost:5000/api/auth/user) Route

### Request Available:

     POST

Data

```shell
    {
        "email":"hello@igmrrf.com", //required min 10 && max 100

        "password":"tldo1234",//required min 8 && max 1024
    }
```

### Response:

```shell
{
    "token":"909058240598204958247525.dfaodifune0a9jd833fadf03e.fedafadfadfa3faeaeaee", //id of admin
}
```

## 6. Admin [Sign Up](http://localhost:5000/api/auth/admin) Route

### Request Available

     POST

Data

```shell
    {
        "username":"lazydev",//required min 5 && max 60

        "password":"tldo1234" //required min 8 && max 1024
    }
```

### Response:

```shell
{
    "token":"909058240598204958247525.dfaodifune0a9jd833fadf03e.fedafadfadfa3faeaeaee", //id of admin
}
```

## A working copy of the application can be found at: [Upbase_Podcast](https://upbase_podcast.herokuapp.com)

# [Upbase_Test](https://github.com/igmrrf).
