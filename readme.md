# NodeDBService

This project is a Node.js-based application that uses MongoDB as a database. The application is built around a REST API architecture, which enables easy and efficient data management.

## Features

- CRUD operations (Create, Read, Update, Delete) on data
- Authentication and authorization of users using JWT (JSON Web Tokens)
- Sending emails to users using Mailgun

## Requirements

- Node.js
- MongoDB

## Getting started instructions

1. Clone the repository to your local environment using `git clone https://github.com/RafalCeglinsk/NodeDBService.git`.
2. Navigate to your project folder using `cd NodeDBService`.
3. Install the dependencies using `npm install`.
4. Create an `.env` file in the root directory of the project and copy the following environment variables into it, adjusting them to your environment:

```properties
DATABASE_URL=YOUR_DATABASE_URL
PORT=3000
JWT_SECRET=YOUR_SECRET
MAILGUN_USER=YOUR_MAILGUN_USER
MAILGUN_API_KEY=YOUR_MAILGUN_API_KEY
MAILGUN_EMAIL=YOUR_MAILGUN_EMAIL

Start the project using npm start.

Now the application should be available at http://localhost:3000.
```
