# Employee Management REST API - Project Prompt

## Project Overview
This is a Node.js/Express.js REST API application that provides employee data management with JSON-based CRUD operations. The application runs on a local server and uses JSON file storage (`emp.json`) for persisting employee records.

## Tech Stack
- **Runtime**: Node.js (ES6 modules)
- **Framework**: Express.js v5.2.1
- **Dependencies**:
  - `express`: Web framework for building REST APIs
  - `dotenv`: Environment variable management
  - `morgan`: HTTP request logger middleware
  - `nodemon`: Development server with auto-restart capability

## Project Structure
```
class-7-JSON-CRUD/
├── app.js                    # Main application entry point
├── package.json              # Project dependencies and scripts
├── config/
│   └── dev.env              # Environment configuration (PORT, HOST)
├── data/
│   └── emp.json             # JSON file storing employee records
└── routes/
    └── empRouter.js         # Employee router with CRUD endpoints
```

## Key Features

### 1. Application Setup (app.js)
- Initializes Express.js server with middleware:
  - `express.json()`: Parses JSON request bodies
  - `express.urlencoded()`: Parses form data
  - `morgan('tiny')`: HTTP request logging
- Loads environment variables from `config/dev.env`
- Runs server on `http://127.0.0.1:8080/`

### 2. Complete CRUD Operations (routes/empRouter.js)
Full-featured employee management with all CRUD endpoints:

#### Root Request
- **Endpoint**: `GET /emp/`
- **Description**: Test endpoint returning employee router status
- **Response**: `{"msg":"Employee Router - Root Request"}`

#### Create Employee
- **Endpoint**: `POST /emp/create`
- **Description**: Create a new employee record
- **Required Fields**: `eid`, `ename`, `esal`, `gender`
- **Validation**: Checks if employee ID already exists
- **Response**: Success or duplicate error message
- **Example**:
  ```
  POST http://127.0.0.1:8080/emp/create
  Body: {"eid":108,"ename":"John","esal":60000,"gender":"Male"}
  ```

#### Read All Employees
- **Endpoint**: `GET /emp/read`
- **Description**: Retrieve all employee records from JSON file
- **Response**: Array of all employee objects
- **Example**:
  ```
  GET http://127.0.0.1:8080/emp/read
  ```

#### Update Employee
- **Endpoint**: `PUT /emp/update/:eid`
- **Description**: Update an existing employee's details
- **URL Parameter**: `eid` - Employee ID
- **Request Body Fields**: `ename`, `esal`, `gender` (all optional, only provided fields will be updated)
- **Validation**: Checks if employee ID exists before updating
- **Response**: Success or not found error message
- **Example**:
  ```
  PUT http://127.0.0.1:8080/emp/update/101
  Body: {"ename":"Rahul Kumar","esal":50000,"gender":"Male"}
  ```

#### Delete Employee
- **Endpoint**: `DELETE /emp/delete/:eid`
- **Description**: Delete an employee record by ID
- **URL Parameter**: `eid` - Employee ID to delete
- **Validation**: Checks if employee exists before deletion
- **Response**: Success or not found error message
- **Example**:
  ```
  DELETE http://127.0.0.1:8080/emp/delete/101
  ```

### 3. Data Model
Employee object structure:
```json
{
  "eid": 101,          // Employee ID (unique identifier)
  "ename": "Rahul",    // Employee Name
  "esal": 45000,       // Employee Salary
  "gender": "Male"     // Employee Gender
}
```

### 4. File Operations
- **Read**: `getEmployees()` - Reads and parses employee data from emp.json
- **Write**: `saveEmployee()` - Writes employee array to emp.json file
- Uses Node.js `fs` module for synchronous file operations
- Uses `path` module for cross-platform file path handling

## Current Data
The application includes 7 sample employee records (IDs 101-107) with names, salaries, and gender information.

## Development Workflow
- **Start Server**: `npm start`
- Uses `nodemon` for auto-restart on file changes
- Runs on port 8080 by default

## Future Enhancement Opportunities
- Add comprehensive input validation and error handling
- Implement database (MongoDB, PostgreSQL) instead of JSON file storage
- Add authentication and authorization (JWT tokens)
- Create response standardization and custom middleware
- Add search and filter functionality
- Implement pagination for large datasets
- Add employee salary range validation
- Implement update history/audit logging
- Add bulk operations support
