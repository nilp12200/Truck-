import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

function TruckTransaction() {
  const [formData, setFormData] = useState({
    truckNo: '',
    transactionDate: '',
    cityName: '',
    transporter: '',
    amountPerTon: '',
    truckWeight: '',
    deliverPoint: '',
    remarks: ''
  });

  const [plantList, setPlantList] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [newRow, setNewRow] = useState({
    plantName: '',
    loadingSlipNo: '',
    qty: '',
    priority: '',
    remarks: '',
    freight: 'To Pay'
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/api/plants`)
      .then(res => setPlantList(res.data))
      .catch(err => {
        setPlantList([]);
        console.error('Error fetching plants:', err);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleNewRowChange = (e) => {
    const { name, value } = e.target;
    setNewRow((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
  };

  const addRow = () => {
    const { plantName, loadingSlipNo, qty } = newRow;

    if (!plantName || !loadingSlipNo || !qty) {
      alert("❌ Please fill in Plant Name, Loading Slip No, and Quantity.");
      return;
    }

    if (isNaN(qty) || Number(qty) <= 0) {
      alert("❌ Quantity must be a positive number.");
      return;
    }

    const isDuplicate = tableData.some(row =>
      row.plantName === plantName && row.loadingSlipNo === loadingSlipNo
    );

    if (isDuplicate) {
      alert("❌ Duplicate loading slip for this plant.");
      return;
    }

    setTableData((prevData) => [...prevData, newRow]);

    setNewRow({
      plantName: '',
      loadingSlipNo: '',
      qty: '',
      priority: '',
      remarks: '',
      freight: 'To Pay',
    });
  };

  const handleDeleteRow = (index) => {
    setTableData(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    let finalTableData = [...tableData];

    const isNewRowFilled =
      newRow.plantName || newRow.loadingSlipNo || newRow.qty || newRow.priority || newRow.remarks;

    if (isNewRowFilled) {
      finalTableData.push(newRow);
    }

    if (!formData.truckNo || !formData.transactionDate) {
      return setMessage("❌ Truck No and Transaction Date are required.");
    }

    try {
      const response = await axios.post(`${API_URL}/api/truck-transaction`, {
        formData,
        tableData: finalTableData,
      });

      if (response.data.success) {
        setMessage("✅ Transaction saved successfully!");
        setFormData({
          truckNo: '',
          transactionDate: '',
          cityName: '',
          transporter: '',
          amountPerTon: '',
          truckWeight: '',
          deliverPoint: '',
          remarks: ''
        });
        setTableData([]);
        setNewRow({
          plantName: '',
          loadingSlipNo: '',
          qty: '',
          priority: '',
          remarks: '',
          freight: 'To Pay'
        });
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert(error.response?.data?.message || "Failed to submit data.");
    }
  };

  const getPlantName = (plant) => plant.PlantName || plant.plantname || plant.plant_name || plant || '';

  return (
    <div className="p-4 md:p-10 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Truck Transaction</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block font-medium">Truck No</label>
            <input name="truckNo" value={formData.truckNo} onChange={handleChange} className="w-full border rounded px-2 py-1" />
          </div>
          <div>
            <label className="block font-medium">Transaction Date</label>
            <input type="date" name="transactionDate" value={formData.transactionDate} onChange={handleChange} className="w-full border rounded px-2 py-1" />
          </div>
          <div>
            <label className="block font-medium">City Name</label>
            <input name="cityName" value={formData.cityName} onChange={handleChange} className="w-full border rounded px-2 py-1" />
          </div>
          <div>
            <label className="block font-medium">Transporter</label>
            <input name="transporter" value={formData.transporter} onChange={handleChange} className="w-full border rounded px-2 py-1" />
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-2">Loading Details</h3>
        <div className="overflow-x-auto">
          <table className="w-full border text-sm text-left">
            <thead className="bg-yellow-200">
              <tr>
                <th className="border px-2 py-1">Plant</th>
                <th className="border px-2 py-1">Slip No</th>
                <th className="border px-2 py-1">Qty</th>
                <th className="border px-2 py-1">Priority</th>
                <th className="border px-2 py-1">Remarks</th>
                <th className="border px-2 py-1">Freight</th>
                <th className="border px-2 py-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i}>
                  <td className="border px-2 py-1">{row.plantName}</td>
                  <td className="border px-2 py-1">{row.loadingSlipNo}</td>
                  <td className="border px-2 py-1">{row.qty}</td>
                  <td className="border px-2 py-1">{row.priority}</td>
                  <td className="border px-2 py-1">{row.remarks}</td>
                  <td className="border px-2 py-1">{row.freight}</td>
                  <td className="border px-2 py-1 text-center">
                    <button onClick={() => handleDeleteRow(i)} className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border px-2 py-1">
                  <select name="plantName" value={newRow.plantName} onChange={handleNewRowChange} className="w-full border rounded px-1">
                    <option value="">Select</option>
                    {plantList.length === 0 ? (
                      <option value="" disabled>No plants found</option>
                    ) : (
                      [...new Set(plantList.map(getPlantName))]
                        .filter(name => !!name)
                        .map((name, i) => (
                          <option key={i} value={name}>{name}</option>
                        ))
                    )}
                  </select>
                </td>
                <td className="border px-2 py-1">
                  <input name="loadingSlipNo" value={newRow.loadingSlipNo} onChange={handleNewRowChange} className="w-full border rounded px-1" />
                </td>
                <td className="border px-2 py-1">
                  <input type="number" name="qty" value={newRow.qty} onChange={handleNewRowChange} className="w-full border rounded px-1" />
                </td>
                <td className="border px-2 py-1">
                  <input name="priority" value={newRow.priority} onChange={handleNewRowChange} className="w-full border rounded px-1" />
                </td>
                <td className="border px-2 py-1">
                  <input name="remarks" value={newRow.remarks} onChange={handleNewRowChange} className="w-full border rounded px-1" />
                </td>
                <td className="border px-2 py-1">
                  <select name="freight" value={newRow.freight} onChange={handleNewRowChange} className="w-full border rounded px-1">
                    <option value="To Pay">To Pay</option>
                    <option value="Paid">Paid</option>
                  </select>
                </td>
                <td className="border px-2 py-1 text-center text-gray-400">---</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2">
          <button
            type="button"
            onClick={addRow}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add Row
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div>
            <label className="block font-medium">Amount Per Ton</label>
            <input type="number" name="amountPerTon" value={formData.amountPerTon} onChange={handleChange} className="w-full border rounded px-2 py-1" />
          </div>
          <div>
            <label className="block font-medium">Deliver Point</label>
            <input name="deliverPoint" value={formData.deliverPoint} onChange={handleChange} className="w-full border rounded px-2 py-1" />
          </div>
          <div>
            <label className="block font-medium">Truck Weight (In Ton)</label>
            <input type="number" name="truckWeight" value={formData.truckWeight} onChange={handleChange} className="w-full border rounded px-2 py-1" />
          </div>
        </div>

        <div className="mt-4">
          <label className="block font-medium">Remarks</label>
          <textarea name="remarks" value={formData.remarks} onChange={handleChange} className="w-full border rounded px-2 py-1" rows="4"></textarea>
        </div>

        <div className="text-center mt-6">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        </div>

        {message && (
          <p className="mt-4 text-center text-lg text-blue-600">{message}</p>
        )}
      </div>
    </div>
  );
}

export default TruckTransaction;
