// import React, { useState } from 'react';
// import axios from 'axios';

// // ✅ Using VITE_API_URL from .env file
// const API_URL = import.meta.env.VITE_API_URL;

// export default function Report() {
//   const [truckNo, setTruckNo] = useState('');
//   const [reportData, setReportData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const fetchReport = async () => {
//     if (!truckNo.trim()) {
//       setError('Please enter a truck number');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     try {
//       const response = await axios.get(`${API_URL}/api/truck-report?truckNo=${encodeURIComponent(truckNo)}`);
//       if (Array.isArray(response.data)) {
//         setReportData(response.data);
//       } else {
//         setReportData([]);
//         setError('Invalid data format from server');
//       }
//     } catch (err) {
//       setError('Failed to fetch report');
//       setReportData([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-5xl">
//         <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Truck Movement Report</h2>

//         <div className="flex flex-col sm:flex-row gap-4 mb-6">
//           <input
//             type="text"
//             placeholder="Enter Truck Number"
//             value={truckNo}
//             onChange={(e) => setTruckNo(e.target.value)}
//             className="w-full sm:w-2/3 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />
//           <button
//             onClick={fetchReport}
//             className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition duration-300"
//           >
//             Search
//           </button>
//         </div>

//         {loading && <div className="text-center text-indigo-600 font-medium">Loading report...</div>}
//         {error && <div className="text-center text-red-500 font-medium">{error}</div>}

//         {!loading && !error && reportData.length === 0 && (
//           <div className="text-center text-gray-500">No data found. Try another truck number.</div>
//         )}

//         {!loading && reportData.length > 0 && (
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
//               <thead className="bg-indigo-100 text-indigo-700">
//                 <tr>
//                   <th className="px-4 py-3 text-left">Truck No</th>
//                   <th className="px-4 py-3 text-left">Plant Name</th>
//                   <th className="px-4 py-3 text-left">Check-In Time</th>
//                   <th className="px-4 py-3 text-left">Check-Out Time</th>
//                   <th className="px-4 py-3 text-left">Loading Slip</th>
//                   <th className="px-4 py-3 text-left">Qty</th>
//                   <th className="px-4 py-3 text-left">Freight</th>
//                   <th className="px-4 py-3 text-left">Priority</th>
//                   <th className="px-4 py-3 text-left">Remarks</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {reportData.map((item, index) => (
//                   <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                     <td className="px-4 py-3">{item.truckno || item.truckNo || '—'}</td>
//                     <td className="px-4 py-3">{item.plantname || item.plantName || '—'}</td>
//                     <td className="px-4 py-3">{item.checkintime ? new Date(item.checkintime).toLocaleString() : '—'}</td>
//                     <td className="px-4 py-3">{item.checkouttime ? new Date(item.checkouttime).toLocaleString() : '—'}</td>
//                     <td className="px-4 py-3">{item.loadingslipno || '—'}</td>
//                     <td className="px-4 py-3">{item.qty ?? '—'}</td>
//                     <td className="px-4 py-3">{item.freight ?? '—'}</td>
//                     <td className="px-4 py-3">{item.priority ?? '—'}</td>
//                     <td className="px-4 py-3">{item.remarks || '—'}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



/////////////////////////////////////////////////////////////////////////////


import React, { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export default function Report() {
  const [truckNo, setTruckNo] = useState('');
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchReport = async () => {
    if (!truckNo.trim()) {
      setError('Please enter a truck number');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `${API_URL}/api/truck-report?truckNo=${encodeURIComponent(truckNo)}`
      );
      console.log('API raw data:', response.data);

      if (Array.isArray(response.data)) {
        // Normalize keys to a consistent camelCase shape
        const normalized = response.data.map((row) => ({
          truckNo: row.truckno || row.truckNo || '',
          plantName: row.plantname || row.plantName || '',
          checkInTime: row.checkintime || row.checkInTime || null,
          checkOutTime: row.checkouttime || row.checkOutTime || null,
          loadingSlipNo: row.loadingslipno || row.loadingSlipNo || '',
          qty: row.qty ?? null,
          freight: row.freight ?? null,
          priority: row.priority ?? null,
          remarks: row.remarks || ''
        }));
        setReportData(normalized);
      } else {
        setError('Invalid data format from server');
        setReportData([]);
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Failed to fetch report');
      setReportData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-5xl">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Truck Movement Report
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter Truck Number"
            value={truckNo}
            onChange={(e) => setTruckNo(e.target.value)}
            className="w-full sm:w-2/3 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={fetchReport}
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition duration-300"
          >
            Search
          </button>
        </div>

        {loading && (
          <div className="text-center text-indigo-600 font-medium">Loading report...</div>
        )}
        {error && <div className="text-center text-red-500 font-medium">{error}</div>}

        {!loading && !error && reportData.length === 0 && (
          <div className="text-center text-gray-500">
            No data found. Try another truck number.
          </div>
        )}

        {!loading && reportData.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <thead className="bg-indigo-100 text-indigo-700">
                <tr>
                  <th className="px-4 py-3 text-left">Truck No</th>
                  <th className="px-4 py-3 text-left">Plant Name</th>
                  <th className="px-4 py-3 text-left">Check-In Time</th>
                  <th className="px-4 py-3 text-left">Check-Out Time</th>
                  <th className="px-4 py-3 text-left">Loading Slip</th>
                  <th className="px-4 py-3 text-left">Qty</th>
                  <th className="px-4 py-3 text-left">Freight</th>
                  <th className="px-4 py-3 text-left">Priority</th>
                  <th className="px-4 py-3 text-left">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3">{item.truckNo || '—'}</td>
                    <td className="px-4 py-3">{item.plantName || '—'}</td>
                    <td className="px-4 py-3">
                      {item.checkInTime ? new Date(item.checkInTime).toLocaleString() : '—'}
                    </td>
                    <td className="px-4 py-3">
                      {item.checkOutTime ? new Date(item.checkOutTime).toLocaleString() : '—'}
                    </td>
                    <td className="px-4 py-3">{item.loadingSlipNo || '—'}</td>
                    <td className="px-4 py-3">{item.qty ?? '—'}</td>
                    <td className="px-4 py-3">{item.freight ?? '—'}</td>
                    <td className="px-4 py-3">{item.priority ?? '—'}</td>
                    <td className="px-4 py-3">{item.remarks || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
