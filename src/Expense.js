import React, { useState } from 'react';
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Expense = () => {
    const { data: blogs } = useFetch('https://web-app-op8t.onrender.com/blogs/');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredBlogs = selectedCategory 
        ? blogs.filter(blog => blog.category === selectedCategory) 
        : blogs;

    return (
        <div className="box">
            {/* {blogs && <BlogList blogs={blogs} title="All Expenses!"/>} */}
            {/* <h1>Filter Expenses by Category</h1> */}
               <div className='Buttons'><button onClick={() => handleCategoryClick('')}>All Expenses</button>
                <button onClick={() => handleCategoryClick('Home')}>Home</button>
                <button onClick={() => handleCategoryClick('Office')}>Office</button>
                <button onClick={() => handleCategoryClick('Personal')}>Personal</button>
                <button onClick={() => handleCategoryClick('Others')}>Others</button>
                {blogs && <BlogList blogs={filteredBlogs} title={`${selectedCategory || 'All'}`} />}
                </div>
        </div>
    );
}

export default Expense;
