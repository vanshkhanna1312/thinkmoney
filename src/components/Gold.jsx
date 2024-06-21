import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Navbar from './Navbar';
import "./Gold.css";

const Gold = () => {
  const [rows, setRows] = useState([
    { id: 1, date: '', purchasePrice: '', grams: '', currentPrice: '' }
  ]);
  const [nextId, setNextId] = useState(2);
  const [totalReturns, setTotalReturns] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('YOUR_API_ENDPOINT');
  //       const currentPrice = response.data.currentPrice;
  //       setRows(prevRows => {
  //         const updatedRows = [...prevRows];
  //         updatedRows[0].currentPrice = currentPrice;
  //         return updatedRows;
  //       });
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        id: nextId,
        date: '',
        purchasePrice: '',
        grams: '',
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
    let total = 0;
    rows.forEach(row => {
      total += (row.currentPrice * row.grams) - (row.purchasePrice * row.grams);
    });
    setTotalReturns(total);
  }, [rows]);

  return (
    <>
    <Navbar/>
    <div className='hgold'>
      <h1>Gold</h1>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
      <table className='gold-table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Purchase Price</th>
            <th>Grams</th>
            <th>Invested Amount</th>
            <th>Current Price</th>
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
                  type="number"
                  name="purchasePrice"
                  value={row.purchasePrice}
                  onChange={e => handleInputChange(row.id, e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="grams"
                  value={row.grams}
                  onChange={e => handleInputChange(row.id, e)}
                />
              </td>
              <td>{row.purchasePrice * row.grams}</td>
              <td>
                <input
                  type="number"
                  name="currentPrice"
                  value={row.currentPrice}
                  onChange={e => handleInputChange(row.id, e)}
                />
              </td>
              <td>{row.currentPrice * row.grams}</td>
              <td>{(row.currentPrice * row.grams) - (row.purchasePrice * row.grams)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="6">Total Returns</td>
            <td>{totalReturns}</td>
          </tr>
        </tbody>
      </table>
      <button className="addgold-button" onClick={handleAddRow}>Add Row</button>
    </div>
    </div>
    </>
  );
};

export default Gold;
