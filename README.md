# Ecommerce Inventory Management API

## Contributed By: Arpan Choudhury

![image](https://github.com/DataWorker2001/E-COMMERCE-API/assets/123379937/9b5f4fd9-391f-4f4c-99d8-cedaf8f97aab)


This project implements an API for an ecommerce platform admin to manage product inventory using Node.js and MongoDB. It provides endpoints to add, list, update, and delete products from the inventory.

Tech Stack:- 
Node.js and MongoDB

Folder Structure:- <br/> 
ecommerce-api <br/>
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
└── package-lock.json <br/>
└── README.md <br/>
└── .gitattributes <br/>
└── .gitignore <br/>
└── Test 1 - Ecommerce API.docx <br/>

Setup:-
To set up the project on your local system, follow these steps:

1) Clone the repository:- <br/>
$ Shell/Terminal:<br/>
git clone https://github.com/DataWorker2001/E-COMMERCE-API.git

3) Install dependencies:- <br/>
$ Shell/Terminal:<br/>
cd ecommerce-api<br/>
npm install


4) Configure the MongoDB connection in db.js using the dbURI variable as: <br/>
const dbURI = 'mongodb+srv://<username>:<password>@cluster0.hciafyn.mongodb.net/ecom';<br/>
 after creating a db.js file in the config folder in the root directory and the rest code.

5) Start the server:<br/>
$ Shell/Terminal <br/>
npm start <br/>
The server will start running on http://localhost:3000.<br/>
---------------------------------------------------------------------------x----------------------------------------------------------------------------- 
API Endpoints:-

i) Add a product to the database
URL [POST]: /products/create

Request body:

$json: <br/>
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

Response body: <br/>

$json <br/>

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

Response body: <br/>

$json: <br/>
{
  "message": "product deleted"
}

iv) Update quantity of a product
URL [POST]: /products/:id/update_quantity/?number=10

Response body:

$json: <br/>
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





