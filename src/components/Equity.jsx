import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Navbar from './Navbar';
import "./Equity.css"

const Equity = () => {
  const [rows, setRows] = useState([
    { id: 1, date: '', stockName: '', purchasePrice: '', quantity: '', currentPrice: '' }
  ]);
  const [nextId, setNextId] = useState(2);
  const [totalReturns, setTotalReturns] = useState(0);

  // useEffect(() => {
  //   // Function to fetch current price from API
  //   const fetchCurrentPrice = async () => {
  //     try {
  //       const response = await axios.get('YOUR_API_ENDPOINT');
  //       const currentPrice = response.data.currentPrice; // Adjust this based on your API response structure
  //       // Update the current price in the first row (assuming you're fetching for the first row)
  //       setRows(prevRows => {
  //         const updatedRows = [...prevRows];
  //         updatedRows[0].currentPrice = currentPrice;
  //         return updatedRows;
  //       });
  //     } catch (error) {
  //       console.error('Error fetching current price:', error);
  //     }
  //   };

  //   // Call the fetchCurrentPrice function
  //   fetchCurrentPrice();
  // }, []); 

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        id: nextId,
        date: '',
        stockName: '',
        purchasePrice: '',
        quantity: '',
        currentPrice: ''
      }
    ]);
    setNextId(nextId + 1);
  };

  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    const updatedRows = rows.map(row =>
      row.id === id ? { ...row, [name]: value } : row
    );
    setRows(updatedRows);
  };

  useEffect(() => {
    const calculateTotalReturns = () => {
      let total = 0;
      rows.forEach(row => {
        total += row.currentPrice * row.quantity - row.purchasePrice * row.quantity;
      });
      setTotalReturns(total);
    };
    calculateTotalReturns();
  }, [rows]);

  return (
    <>
      <Navbar />
      <div className='hequity'>
        <h1 >Equity</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <table className='equity-table'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Stock Name</th>
                <th>Purchase Price</th>
                <th>Quantity</th>
                <th>Current Price</th>
                <th>Invested Amount</th>
                <th>Current Value</th>
                <th>Returns</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.id}>
                  <td>
                    <input
                      type="date"
                      name="date"
                      value={row.date}
                      onChange={e => handleInputChange(row.id, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="stockName"
                      value={row.stockName}
                      onChange={e => handleInputChange(row.id, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="purchasePrice"
                      value={row.purchasePrice}
                      onChange={e => handleInputChange(row.id, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="quantity"
                      value={row.quantity}
                      onChange={e => handleInputChange(row.id, e)}
                    />
                  </td>
                  <td>{row.currentPrice}</td>
                  <td>{row.purchasePrice * row.quantity}</td>
                  <td>{row.currentPrice * row.quantity}</td>
                  <td>{row.currentPrice * row.quantity - row.purchasePrice * row.quantity}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="7">Total Returns</td>
                <td>{totalReturns}</td>
              </tr>
            </tbody>
          </table>
          <button className="add-button"  onClick={handleAddRow}>Add Row</button>
        </div>
      </div>
    </>
  );
};

export default Equity;
