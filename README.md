# ProductAppSimple
# Angular Product App

## Project Description

This is a simple Angular project that displays a list of products and allows users to view detailed information about each product. The project fetches product data from the Fake Store API.

## Features

- **All Products Page**: Displays a list of products retrieved from the API.
- **Product Details Page**: Shows detailed information about a selected product.
- **Responsive Design**: Works well on different screen sizes.

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (Latest LTS recommended)
- **Angular CLI** (`npm install -g @angular/cli`)

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Project Locally

1. Start the development server:
   ```sh
   ng serve
   ```
2. Open your browser and go to:
   ```
   http://localhost:4200
   ```

## API Used

The project fetches product data from: [Fake Store API](https://fakestoreapi.com/products)

## Folder Structure

```
project-directory/
│── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── pages/
│   ├── assets/
│   ├── environments/
│── angular.json
│── package.json
│── README.md
```

## Future Enhancements

- Add a shopping cart feature
- Implement filtering and sorting options

## License

This project is open-source and free to use.

