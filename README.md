!! working in progress !!
## Description

Reference architecture for NodeJs API projects with Typescript.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```
## Test - To be implemented

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
**This is the source code tree:**

```
src
  |-- business
  |-- controller
  |-- data
    |--BaseDatabase.ts
  |-- error
  |-- model
  |-- routes
  |-- services
  |-- index.ts
...

```

**These are the folders and their functions:**

`./business`

Is the part of the application that takes care of tasks related to the processes of a business.

`./controller`

The Controller layer handles requests from users.

`./data`

This layer handles the connection to the database.

`./BaseDatabase.ts`

Database connection configuration.

`./error`

Error handling functions.

`./model`

Organizes Class, Interface and DOTs files.

`./routes`

Application routes bundler.

`./services`

Services are responsible to handle the connection with all external elements, like APIs.

`./utils`

Directory to keep all utils functions to share all over the project.

### Stay in touch

- Author - [Jailsom Nogueira](https://github.com/Jailsom-Nogueira)