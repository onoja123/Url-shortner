# URL Shortener with Node.js, Express, MongoDB, and TypeScript

This is a simple URL shortener web application built using Node.js, Express, MongoDB, and TypeScript. It allows users to shorten long URLs into more manageable and shareable short URLs.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authors](#authors)


## Features

- Shorten long URLs into unique short URLs.
- Retrieve the original URL by using a short URL.
- Error handling for invalid URLs and server errors.
- MongoDB database for storing URL mappings.
- TypeScript for strong typing.

## Getting Started

To get started with this project, follow these steps:

* Clone the repository:

   ```bash
   git clone https://github.com/onoja123/Url-shortner.git

* Change Directory

    ```bash
    cd Url-shortner
    ```
* Install Dependecies
    ```bash
    npm install
    ```

* Create a .env file in the project root and add your MongoDB connection string
    ```bash
    MONGODB_URI=mongodb://localhost/url-shortener
    ```
* Start the server:
    ```bash
    npm start
    ```

## Usage
* To shorten a URL, make a POST request to the /api/shorten endpoint with a JSON body:
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"originalUrl": "https://example.com/long-url-to-be-shortened"}' http://localhost:3000/api/shorten
    ```

* This will return a JSON response with the shortened URL

    ```bash
    http://localhost:3000/<short-url>
    ```
## API Endpoints

### Shorten a URL

- **POST /api/shorten**: Shorten a long URL.
  - Request body: `{ "originalUrl": "your-long-url-here" }`
  - Example:

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"originalUrl": "https://example.com/long-url-to-be-shortened"}' http://localhost:3000/api/shorten
    ```

    Response:

    ```json
    {
        "status": true,
        "message": "URL shortened successfully.",
        "data": {
            "originalUrl": "https://example.com/long-url-to-be-shortened",
            "shortUrl": "http://localhost:3000/shortened-url",
            "createdAt": "2023-09-07T18:57:22.999Z",
            "_id": "64fa1d3168ccb449535a8ec5",
            "__v": 0
        }
    }
    ```

### Access a Shortened URL

- **GET /:shortUrl**: Redirect to the original URL associated with the short URL.
  - Example:

    ```
    http://localhost:3000/shortened-url
    ```

Please note that the actual URLs and the server address should be adjusted according to your project's configuration.


## Authors

- Okpe Onoja  - [GitHub](https://github.com/onoja123)

