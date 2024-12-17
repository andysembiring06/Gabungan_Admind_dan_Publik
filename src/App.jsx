import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// publik star
import Halaman_satu from "./Web_publik/Halaman_satu";
import Halaman_dua from "./Web_publik/Halaman_dua";
import Halaman_tiga from "./Web_publik/Halaman_tiga";
import Halaman_empat from "./Web_publik/Halaman_empat";
import Halaman_lima from "./Web_publik/Halaman_lima";
// publik end

// publik star artikel

import Klikhal_101 from "./Web_klik_Artikel/klikhal_101";
import Klikhal_106 from "./Web_klik_Artikel/klikhal_106";
import Klikhal_108 from "./Web_klik_Artikel/Klikhal_108";

// publik end artikel

// admin star
import Login from "./Web_admin/login";
import DashboardAdmin from "./Web_admin/dashboard_admin";
import Tambah_artikel from "./Web_admin/Tambah_artikel";
// adnmin end

function App() {
  return (
    <Router>
      <Routes>
        {/* publik */}
        <Route path="/" element={<Halaman_satu />} />
        <Route path="/Halaman_dua" element={<Halaman_dua />} />
        <Route path="/Halaman_tiga" element={<Halaman_tiga />} />
        <Route path="/Halaman_empat" element={<Halaman_empat />} />
        <Route path="/Halaman_lima" element={<Halaman_lima />} />

        {/* klik artikel */}

        <Route path="/Klikhal_101" element={<Klikhal_101 />} />
        <Route path="/Klikhal_106" element={<Klikhal_106 />} />
        <Route path="/Klikhal_108" element={<Klikhal_108 />} />

        {/* Admin */}
        <Route path="/Login" element={<Login />} />
        <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/Tambah_artikel" element={<Tambah_artikel />} />
      </Routes>
    </Router>
  );
}

export default App;
