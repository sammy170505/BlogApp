import React from "react";

import PropTypes from "prop-types";

import "./index.css";

export default function Categories({ blogPost }) {
  return (
    <div className="flex-wrap">
      {blogPost.categories.map((category, index) => {
        return (
          <p
            key={index}
            className="category-tag"
            style={{
              color: category.color,
              backgroundColor: category.color + "33",
            }}
          >
            {category.title}
          </p>
        );
      })}
    </div>
  );
}
async function fetchCategories() {
  try {
      const response = await fetch('https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories');
      const data = await response.json();
      console.log('Fetched data: ', data);
  } catch (error) {
      console.log('Error fetching data', error);
  }
}

Categories.prototype = {
  blogPost: PropTypes.object.isRequired,
};
