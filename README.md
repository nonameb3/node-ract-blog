## Install package and start

- add config.js file and add mongoDB url to this file

```
module.exports = {
  DB_URL:
    'YOUR URL'
};
```

## Run Server

```
 $cd node && npm i && npm start // server
 $cd blog-appt && npm i && npm start // client
```
## Register

use localhost:9000/api/auth/register to register user

```
{
    "username": "admin",
    "password" : "adminadmin"
}
```
