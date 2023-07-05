Ecommerce Inventory Management API
Contributed By: Arpan Choudhury

This project implements an API for an ecommerce platform admin to manage product inventory using Node.js and MongoDB. It provides endpoints to add, list, update, and delete products from the inventory.

Tech Stack:- 
Node.js and MongoDB

Folder Structure:- 
ecommerce-api
├── models <br/>
│   └── product.js <br/>
├── controllers <br/>
│   └── productController.js <br/>
├── routes <br/>
│   └── productRoutes.js <br/>
├── config <br/>
│   └── db.js <br/>
├── server.js <br/>
└── package.json <br/>


Setup:-
To set up the project on your local system, follow these steps:

1) Clone the repository:-
$ Shell/Terminal
echo
git clone https://github.com/DataWorker2001/E-COMMERCE-API.git

3) Install dependencies:
$ Shell/Terminal
echo
cd ecommerce-api
npm install


4) Configure the MongoDB connection in db.js using the dbURI variable as: <br/>
const dbURI = 'mongodb+srv://username:password@cluster0.hciafyn.mongodb.net/ecom';

after creating a db.js file in the config folder in the root directory and the rest code.

5) Start the server:

$npm start
The server will start running on http://localhost:3000.
--------------------------------------------------------------------------------x-----------------------------------------------------------------------------------
API Endpoints:-

i) Add a product to the database
URL [POST]: /products/create

Request body:

json
Copy code
{
  "name": "laptop",
  "quantity": 10
}
Response body:

json
Copy code
{
  "product": {
    "name": "laptop",
    "quantity": 10
  }
}

ii) List all products
URL [GET]: /products

Response body:

json
Copy code
{
  "products": [
    {
      "id": 1,
      "name": "laptop",
      "quantity": 10
    },
    {
      "id": 2,
      "name": "camera",
      "quantity": 5
    },
    {
      "id": 3,
      "name": "smartwatch",
      "quantity": 8
    }
  ]
}
iii) Delete a product
URL [DELETE]: /products/:id

Response body:

json
Copy code
{
  "message": "product deleted"
}

iv) Update quantity of a product
URL [POST]: /products/:id/update_quantity/?number=10

Response body:

json
$echo
{
  "product": {
    "id": 1,
    "name": "laptop",
    "quantity": 20
  },
  "message": "updated successfully"
}

This README provides an overview of the project, setup instructions, and details about the available API endpoints.


Good luck with this project! If you find any problems in the code, feel free to start the forking of this repo. and using pull requests.





