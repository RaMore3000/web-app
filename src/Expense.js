import React, { useEffect, useState } from 'react';
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Expense = () => {
    const { data: blogs } = useFetch('http://localhost:8000/blogs');
    const [totalAmount, setTotalAmount] = useState(0);
    return (
        <div className="box">
           {/* { isPending && <div>Loading...</div> } */}
           {blogs && <BlogList blogs={blogs} title="All Expenses!"/>}
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs"/> */}
        </div>
      );
}
 
export default Expense;