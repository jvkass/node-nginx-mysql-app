# Node-Nginx-MySQL App

This project is a simple web application that demonstrates the use of Node.js with Express, MySQL, and Nginx as a reverse proxy. The application allows users to add names to a MySQL database and retrieve a list of names, displaying them in a formatted HTML response.

## Project Structure

```
node-nginx-mysql-app
├── src
│   ├── app.js          # Main entry point of the Node.js application
│   └── db
│       └── index.js    # Database connection and query handling
├── nginx
│   └── nginx.conf      # Nginx configuration for reverse proxy
├── docker-compose.yml   # Docker Compose configuration
├── Dockerfile           # Dockerfile for building the Node.js application image
├── package.json         # npm configuration and dependencies
└── README.md            # Project documentation
```

## Requirements

- Docker
- Docker Compose

## Setup Instructions

1. Clone the repository:

   ```
   git clone <repository-url>
   cd node-nginx-mysql-app
   ```

2. Create a `.env` file in the root directory with the following content:

   ```
   MYSQL_ROOT_PASSWORD=root
   MYSQL_DATABASE=mydb
   MYSQL_USER=user
   MYSQL_PASSWORD=password
   ```

3. Build and run the application using Docker Compose:

   ```
   docker-compose up -d
   ```

4. Access the application at `http://localhost:8080`.

## Results

![alt text](./img/{4EFF5265-B457-4FB1-99D6-82DDAB246D3F}.png)
![alt text](./img/{B84B4F7D-5B5C-47EE-8FDD-0267CD091ED7}.png)

## Usage

- To add a name to the database, send a request to the root URL (`/`). The application will insert the name and return a list of all names stored in the database.

## License

This project is licensed under the MIT License.

### Obs:
```
docker-compose logs db
```
```
docker-compose logs app
```
```
docker-compose logs nginx
```
```
docker-compose logs 
```

## Remove all Docker images and volumes

To remove all Docker images and volumes, run the following commands:

```sh
# Remove all containers
docker rm -f $(docker ps -a -q)

# Remove all images
docker rmi -f $(docker images -q)

# Remove all volumes
docker volume rm $(docker volume ls -q)