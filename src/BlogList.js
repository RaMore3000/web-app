import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const BlogList = ({ blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);
    const navigate = useNavigate();

    const { id } = useParams();
    const { data: blog } = useFetch('https://web-app-op8t.onrender.com' + id);
    const [totalAmount, setTotalAmount] = useState(0);
    // const navigate = useNavigate(); 
    // const location = useLocation();

    useEffect(() => {
      // Calculate the total amount whenever blogs change
      const total = blogs.reduce((sum, blog) => sum + parseFloat(blog.amount), 0);
      setTotalAmount(total);
    }, [blogs]);

    const handleClick = (id) => {
      fetch('https://web-app-op8t.onrender.com' + id, {
        method: 'DELETE'
      }).then(() => {
        window.location.reload();
      })
    }

    const handleEdit = (blog) => {
      navigate(`/Create`, { state: { blog } });
  };

    return (
      <div className="blog-list">
        <h2 className='head'>{ title }</h2>
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <h2>{ blog.category } : Rs.{blog.amount}</h2>
            <p> { blog.date }</p>
            <p> { blog.description }</p>
            <button onClick={() => handleEdit(blog)}>Edit</button>
            <button onClick={() => handleClick(blog.id)}>delete</button>
          </div>
        ))}
        <h3 className='head'>Total Expense: Rs.{totalAmount}</h3>
      </div>
    );
  }
   
  export default BlogList;  
