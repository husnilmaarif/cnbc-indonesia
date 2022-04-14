import React from "react";

// we dont get API access

function Syariah() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* berita pertama */}
        <div>
          <h4 style={{ borderLeft: "3px solid skyblue", paddingLeft: "15px" }}>TERBARU</h4>
          <img src="https://akcdn.detik.net.id/visual/2021/04/27/pembagian-takjil-oleh-jemaat-gereja-gpib-bukit-moria-8_169.jpeg?w=715&q=90" alt="Ongkos Haji" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Jazirah Arab Hadapi Kenaikan Harga Pangan Selama Ramadhan</h4>
            <small>
              <span style={{ color: "red" }}>SYARIAH</span> - 1 jam yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita kedua */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2020/03/06/96dde748-2c4c-4206-b29d-7af7e3c31920_169.jpeg?w=715&q=90" alt="Harga Pangan" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Resmi! DPR-Pemerintah Tetapkan Ongkos Haji 2022 Rp 39,8 Juta</h4>
            <small>
              <span style={{ color: "red" }}>SYARIAH</span> - 16 jam yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita ketiga */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2021/05/18/salat-di-masjid-gaza_169.jpeg?w=715&q=90" alt="Buka Puasa" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Jadwal Buka Puasa Hari Ini di Jabodetabek, Surabaya & Bandung</h4>
            <small>
              <span style={{ color: "red" }}>SYARIAH</span> - 20 jam yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita keempat */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2022/04/05/infografis-10-negara-dengan-waktu-puasa-terlama-di-dunia_169.jpeg?w=360&q=90" alt="Buka Puasa" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>99 Asmaul Husna Latin Beserta Terjemahan Bahasa Indonesia</h4>
            <small>
              <span style={{ color: "red" }}>SYARIAH</span> - 1 hari yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita kelima */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2019/04/16/58e24e6c-4375-4bd5-8366-4e4b23336d63_169.jpeg?w=360&q=90" alt="Asmaul Husna" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Indahnya Menikmati Buka Puasa Di Kubah Emas Yerussalem</h4>
            <small>
              <span style={{ color: "red" }}>SYARIAH</span> - 2 hari yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita terakhir */}
        <div>
          <img
            src="https://akcdn.detik.net.id/visual/2021/03/09/para-demonstran-yang-marah-atas-penanganan-pemerintah-paraguay-terhadap-krisis-virus-korona-covid-19-bentrok-dengan-polisi-apj-5_169.jpeg?w=360&q=90"
            alt="Marah-Marah"
            className="mt-2 float-start"
            style={{ width: "250px" }}
          />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Apakan Marah-Marah Membatalkan Puasa? Ini Kata Ulama</h4>
            <small>
              <span style={{ color: "red" }}>SYARIAH</span> - 2 hari yang lalu
            </small>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Syariah;
