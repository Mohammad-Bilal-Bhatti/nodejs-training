# Assignment 02

## Run Application

```sh
# run application in development mode
$ npm run start
```

## Test

```sh
# Login
$ curl --request POST \
  --url http://localhost:8443/auth/login \
  --header 'Content-Type: application/json' \
  --data '{
	"email": "david@domain.com",
	"password": "Abcd@1234"
}'

# Get Users list
$ curl --request GET \
  --url http://localhost:8443/users \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBkb21haW4uY29tIiwiaWF0IjoxNjg3MTg4ODYxLCJleHAiOjE2ODcxOTI0NjF9.YnrNjhNOuUVzA0MzpyjHPb5XS7MCqFdGuMQKN_rEE7g'

# Create new user
$ curl --request POST \
  --url http://localhost:8443/users \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBkb21haW4uY29tIiwiaWF0IjoxNjg3MTg4ODYxLCJleHAiOjE2ODcxOTI0NjF9.YnrNjhNOuUVzA0MzpyjHPb5XS7MCqFdGuMQKN_rEE7g' \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "David",
	"email": "david@domain.com",
	"password": "Abcd@1234"
}'

# Delete existing user
$ curl --request DELETE \
  --url http://localhost:8443/users/3 \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBkb21haW4uY29tIiwiaWF0IjoxNjg3MTg4ODYxLCJleHAiOjE2ODcxOTI0NjF9.YnrNjhNOuUVzA0MzpyjHPb5XS7MCqFdGuMQKN_rEE7g'

# Update existing user
$ curl --request PATCH \
  --url http://localhost:8443/users/2 \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBkb21haW4uY29tIiwiaWF0IjoxNjg3MTg4ODYxLCJleHAiOjE2ODcxOTI0NjF9.YnrNjhNOuUVzA0MzpyjHPb5XS7MCqFdGuMQKN_rEE7g' \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "David",
	"email": "david@domain.com",
	"password": "Qwerty@1234"
}'
```

