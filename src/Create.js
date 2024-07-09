import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Create = () => {

    const [date, setDate] = useState();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Home');
    const navigate = useNavigate(); // navigate is a object containing stored history
    const location = useLocation();
    // const [errors, setErrors] = useState({});
    useEffect(() => {
      if (location.state && location.state.blog) {
          const { date, description, amount, category } = location.state.blog;
          setDate(date);
          setDescription(description);
          setAmount(amount);
          setCategory(category);
      }
  }, [location.state]); 

    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { date, description, amount, category };
      
      let store = JSON.parse(localStorage.getItem('store')) || [];
      store.push(blog);
      localStorage.setItem('store', JSON.stringify(store));
      if (location.state && location.state.blog) {
        // Edit exist blog
        fetch(`https://web-app-op8t.onrender.com${location.state.blog.id}`, {
            method: 'DELETE',
        }).then(() => {
            fetch('https://web-app-op8t.onrender.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blog),
            }).then(() => {
                navigate('/Expense');
            });
        });
    } else {
        // Add new blog
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog),
        }).then(() => {
            navigate('/Expense');
        });
    }
};
    return ( 
        <div className="create">
        <h1>Add Expense</h1>
        <form onSubmit={handleSubmit}>
        <br></br>
        <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        /></div>
       <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /></div>
        <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /></div>
        <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Home">Home</option>
            <option value="Personal">Personal</option>
            <option value="Office">Office</option>
            <option value="Others">Others</option>
          </select>
          </div>
          <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
     );
}
 
export default Create; 
