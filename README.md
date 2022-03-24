modified version from lab

# Express Redis Docker app

Requirements: [Docker Community Edition](https://www.docker.com/community-edition)

To start the app run: `docker-compose up`.

It will then be started on port 3000.

# Endpoints

## View all orders
Create another page in your web app where admins can retrieve all orders placed so far sorted based on the order dates.
```sh
curl http://localhost:3000
```

## Placing orders
```sh
curl http://localhost:3000/place_order/$user_name/$item
```
