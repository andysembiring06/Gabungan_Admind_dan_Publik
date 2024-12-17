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

import Klikhal_139 from "./Web_klik_Artikel/klikhal_139";
import Klikhal_140 from "./Web_klik_Artikel/klikhal_140";
import Klikhal_141 from "./Web_klik_Artikel/klikhal_141";
import Klikhal_142 from "./Web_klik_Artikel/klikhal_142";
import Klikhal_144 from "./Web_klik_Artikel/Klikhal_144";
import Klikhal_146 from "./Web_klik_Artikel/Klikhal_146";

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

        <Route path="/Klikhal_139" element={<Klikhal_139 />} />
        <Route path="/Klikhal_140" element={<Klikhal_140 />} />
        <Route path="/Klikhal_140" element={<Klikhal_140 />} />
        <Route path="/Klikhal_141" element={<Klikhal_141 />} />
        <Route path="/Klikhal_142" element={<Klikhal_142 />} />
        <Route path="/Klikhal_144" element={<Klikhal_144 />} />
        <Route path="/Klikhal_146" element={<Klikhal_146 />} />

        {/* Admin */}
        <Route path="/Login" element={<Login />} />
        <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/Tambah_artikel" element={<Tambah_artikel />} />
      </Routes>
    </Router>
  );
}

export default App;
