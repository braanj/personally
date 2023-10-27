# Technical Documentation: Personally

<img alt="Personally app' cover" src="./public/personally.png">

## Introduction

This technical document provides an overview of,, **Personally**, a simple blog application built using Vue.js version 2. The application includes a home page, a category page, and a single article page with a recommended articles section. This document will cover the architecture, components, and key features of the application.

### Application Structure

The application is structured as follows:

- **Home Page**: This is the landing page of the blog, displaying a list of recent articles.

- **Category Page**: Users can filter articles by category on this page.

- **Single Article Page**: This page displays a single article's content, and includes a recommended articles section based on the current article's category.

## Prerequisites

Before diving into the technical details, ensure that you have the following tools and technologies installed:

- Vue.js 2.x
- Node.js and yarn (Node Package Manager)
- A code editor (e.g., Visual Studio Code)
- Basic knowledge of HTML, CSS, and JavaScript

## Project Setup

To create the Vue.js blog app, follow these steps:

1. **Vue CLI Installation**: If you haven't already installed Vue CLI, do so by running the following command:

   ```bash
   npm install -g @vue/cli
   ```

2. **Project Creation**: Create a new Vue project by running the following commands:

   ```bash
   vue create vue-blog-app
   ```

   Follow the prompts to configure the project.
   **Note**: this part is already done so that you'll focus only on learning vue js syntax.

3. **Run the application**: Clone this repository and install the packages:

   - Clone the project:

   ```bash
   git clone https://github.com/braanj/personally.git

   git checkout dev
   ```

   - Install dependencies:

   ```bash
   yarn
   ```

   - Run the project:

   ```
   yarn serve
   ```

4. **Component Setup**: Create components for the Home Page, Category Page, and Single Article Page.

5. **Routing**: Set up Vue Router to handle navigation between these pages.

6. **Sample Data**: For testing purposes, create sample data in the form of JSON files to represent articles and categories.

7. **Styling**: Style the application using CSS or a CSS framework (e.g., Bootstrap).

8. **Implement Logic**: Implement the logic for displaying articles, filtering by category, and showing recommended articles.

9. **Testing**: Test the application to ensure it functions correctly.

## Components

### Home Page

- **Component Name**: `HomePage`
- **Description**: The Home Page component displays a list of recent articles.

### Category Page

- **Component Name**: `CategoryPage`
- **Description**: The Category Page component allows users to filter articles by category.

### Single Article Page

- **Component Name**: `SingleArticlePage`
- **Description**: The Single Article Page component displays a single article's content and includes a recommended articles section.

## Routing

### Vue Router

- Use Vue Router to define routes for the Home Page, Category Page, and Single Article Page.

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import CategoryPage from './components/CategoryPage.vue';
import SingleArticlePage from './components/SingleArticlePage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
  { path: '/category/:category', component: CategoryPage },
  { path: '/article/:id', component: SingleArticlePage },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
```

## Data

### Sample Data

For this sample application, we'll create JSON files (simple API) to store article and category data.

- **articles.json**: Contains information about blog articles, including title, content, category, and ID.
- **categories.json**: Stores a list of categories.

We'll use this data to populate the components with content.

## Styling

We'll style the application using CSS or a CSS framework of our choice. We'll make sure that the styling is consistent across all components and that the user experience is visually appealing.

## Implementation Details

The implementation details for the key features of each component are as follows:

### Home Page

- Fetch the list of recent articles from `articles.json`.
- Display a list of articles with titles and excerpts.
- Implement navigation links to view the full article.

### Category Page

- Fetch the list of categories from `categories.json`.
- Allow users to select a category to filter articles.
- Display a list of articles in the selected category.

### Single Article Page

- Accept a parameter for the article ID in the route.
- Fetch the article content and category from `articles.json`.
- Display the article's title, content, and category.
- Implement a section for recommended articles in the same category.

## Testing

Thoroughly test the application to ensure that all components, routes, and features work as expected. Pay attention to edge cases and potential errors.

## Conclusion

This technical document provides an overview of, **Personally**, a simple Vue.js blog application. By following the steps outlined here, you can create a functional and visually appealing blog app using Vue.js version 2. Remember to continuously improve and expand the app's features to make it more engaging for users.
