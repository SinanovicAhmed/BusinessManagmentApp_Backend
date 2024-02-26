## BMS Backend API Documentation

### Introduction
This documentation outlines the API endpoints and functionality provided by the Backend Management System (BMS) backend, built using Express.

### Authentication
Authentication is handled using JSON Web Tokens (JWT). Certain routes require authentication with different levels of access (admin vs. regular user).

### Base URL
The base URL for all endpoints is `/api`.

### Endpoints

#### Dashboard
- `GET /dashboard/get`
  - Requires: Admin JWT Token
  - Retrieves dashboard data.

#### Employees
- `GET /employee/getAll`
  - Requires: Admin JWT Token
  - Retrieves all employees.
- `POST /employee/add-employee`
  - Requires: Admin JWT Token
  - Adds a new employee.
- `GET /employee/employee-details/:id`
  - Requires: Admin JWT Token
  - Retrieves details of a specific employee.
- `DELETE /employee/dismiss-employee/:id`
  - Requires: Admin JWT Token
  - Dismisses an employee.

#### Materials
- `GET /material/get-materials`
  - Requires: JWT Token
  - Retrieves all materials.
- `POST /material/add-material`
  - Requires: JWT Token
  - Adds a new material.
- `PUT /material/update-material/:id`
  - Requires: JWT Token
  - Updates a material.

#### Orders
- `GET /order/get-orders`
  - Requires: JWT Token
  - Retrieves all orders.
- `GET /order/get-order/:id`
  - Requires: JWT Token
  - Retrieves details of a specific order.
- `POST /order/add-order`
  - Requires: JWT Token
  - Adds a new order.
- `PATCH /order/finish-order`
  - Requires: JWT Token
  - Marks an order as finished.
- `PATCH /order/update-orderstatus`
  - Requires: JWT Token
  - Updates order status.

#### Products
- `GET /product/get-all`
  - Requires: JWT Token
  - Retrieves all products.
- `POST /product/add-product`
  - Requires: JWT Token
  - Adds a new product.
- `PATCH /product/create-product`
  - Requires: JWT Token
  - Creates a product.

#### Suggestions
- `GET /suggestion/get-all`
  - Requires: Admin JWT Token
  - Retrieves all suggestions.
- `GET /suggestion/get-suggestion-byID/:id`
  - Requires: JWT Token
  - Retrieves details of a specific suggestion.
- `POST /suggestion/add-suggestion`
  - Requires: JWT Token
  - Adds a new suggestion.
- `DELETE /suggestion/delete-suggestion-byID/:id`
  - Requires: JWT Token
  - Deletes a suggestion.

#### Suppliers
- `GET /supplier/get-suppliers`
  - Requires: JWT Token
  - Retrieves all suppliers.
- `GET /supplier/supplier-details/:id`
  - Requires: JWT Token
  - Retrieves details of a specific supplier.
- `POST /supplier/add-supplier`
  - Requires: JWT Token
  - Adds a new supplier.
- `PUT /supplier/update-supplier/:id`
  - Requires: JWT Token
  - Updates supplier information.

#### User Management
- `POST /user/register`
  - Requires: Admin JWT Token
  - Registers a new user.
- `POST /user/login`
  - Authenticates user.
- `GET /user/user-info`
  - Requires: JWT Token
  - Retrieves user information.
- `GET /user/logout`
  - Logs out user.
- `PUT /user/change-password/:id`
  - Requires: JWT Token
  - Changes user password.

### Error Handling
- The API returns appropriate HTTP status codes along with error messages in case of errors.
- Errors are categorized as unauthorized access, bad requests, or internal server errors.

