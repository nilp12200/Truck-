
// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-r from-yellow-50 to-white">
      
//       {/* Hero Section */}
//       <section className="text-center py-16 px-4">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/4/48/Emoji_u1f34b.svg" // Lemon icon
//           alt="Lemon Logo"
//           className="w-20 h-20 mx-auto mb-4"
//         />
//         <h1 className="text-4xl font-bold text-yellow-600 mb-4">
//           Welcome to Lemon Software Solution
//         </h1>
//         <p className="text-gray-700 text-lg max-w-2xl mx-auto">
//           We develop modern, scalable ERP solutions designed to streamline operations,
//           enhance productivity, and drive growth for businesses of all sizes.
//         </p>
//       </section>

//       {/* ERP Features */}
//       <section className="py-12 bg-white px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div className="p-6 shadow rounded-lg border">
//             <h3 className="text-xl font-semibold text-yellow-600 mb-2">Inventory Management</h3>
//             <p className="text-gray-600">Track, control, and manage your stock levels with ease.</p>
//           </div>
//           <div className="p-6 shadow rounded-lg border">
//             <h3 className="text-xl font-semibold text-yellow-600 mb-2">Billing & Invoicing</h3>
//             <p className="text-gray-600">Create automated invoices and manage customer payments smoothly.</p>
//           </div>
//           <div className="p-6 shadow rounded-lg border">
//             <h3 className="text-xl font-semibold text-yellow-600 mb-2">Reports & Analytics</h3>
//             <p className="text-gray-600">Make data-driven decisions using real-time reports and dashboards.</p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="text-center py-16 bg-yellow-100 px-4">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">
//           Ready to grow your business?
//         </h2>
//         <p className="text-gray-700 mb-6">
//           Join hundreds of businesses who trust Lemon Software Solution for their ERP needs.
//         </p>
//         <a
//           href="#"
//           className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition"
//         >
//           Get a Free Demo
//         </a>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white text-center py-6 mt-auto">
//         <p className="text-sm">
//           © {new Date().getFullYear()} Lemon Software Solution — Building Smart ERP for Smart Businesses.
//         </p>
//       </footer>
//     </div>
//   );
// }


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      
      {/* Hero Section */}
      <section className="text-center py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 to-transparent"></div>
        <div className="relative z-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/48/Emoji_u1f34b.svg"
            alt="Lemon Logo"
            className="w-24 h-24 mx-auto mb-6 transform transition-all duration-300 hover:scale-110"
          />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-6">
            Welcome to Lemon Software Solution
          </h1>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            We develop modern, scalable ERP solutions designed to streamline operations,
            enhance productivity, and drive growth for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* ERP Features */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-8 rounded-2xl shadow-lg border border-yellow-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-b from-white to-yellow-50">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Inventory Management</h3>
            <p className="text-gray-600 leading-relaxed">Track, control, and manage your stock levels with ease.</p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg border border-yellow-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-b from-white to-yellow-50">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Billing & Invoicing</h3>
            <p className="text-gray-600 leading-relaxed">Create automated invoices and manage customer payments smoothly.</p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg border border-yellow-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-b from-white to-yellow-50">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Reports & Analytics</h3>
            <p className="text-gray-600 leading-relaxed">Make data-driven decisions using real-time reports and dashboards.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-gradient-to-br from-yellow-100 to-yellow-50 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-50/30 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to grow your business?
          </h2>
          <p className="text-gray-700 text-xl mb-8 leading-relaxed">
            Join hundreds of businesses who trust Lemon Software Solution for their ERP needs.
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700"
          >
            Get a Free Demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-base">
            © {new Date().getFullYear()} Lemon Software Solution — Building Smart ERP for Smart Businesses.
          </p>
        </div>
      </footer>
    </div>
  );
}

