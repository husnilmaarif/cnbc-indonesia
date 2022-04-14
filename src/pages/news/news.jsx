import React from "react";

// we dont get API access

function News() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* berita pertama */}
        <div>
          <h4 style={{ borderLeft: "3px solid skyblue", paddingLeft: "15px" }}>TERBARU</h4>
          <img
            src="https://akcdn.detik.net.id/visual/2022/04/14/presiden-joko-widodo-saat-acara-penandatanganan-perjanjian-oleh-indonesia-investment-authority-ina-tahun-2022_169.png?w=715&q=90"
            alt="Emas Pegadaian"
            className="mt-2 float-start"
            style={{ width: "250px" }}
          />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Kok 40 Tahun RI Bangun Jalan Cuma 780 Km? Ini Kata Jokowi!</h4>
            <small>
              <span style={{ color: "red" }}>NEWS</span> - 16 menit yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita kedua */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2021/10/07/infografis-mulai-1-januari-2022-jokowi-beri-tax-amnesty-kedua-kalinya_169.jpeg?w=715&q=90" alt="Kelola Dana THR" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>36 Ribu Orang Ikut Tax Amnesty 2, Pajak Raup Rp 6,2 T!</h4>
            <small>
              <span style={{ color: "red" }}>NEWS</span> - 22 menit yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita ketiga */}
        <div>
          <img
            src="https://akcdn.detik.net.id/visual/2022/04/06/penjualan-minyak-goreng-kemasan-di-superindo-bondongan-bogor-rabu-642022-cnbc-indonesiaferry-sandi_169.jpeg?w=715&q=90"
            alt="Kelola Dana THR"
            className="mt-2 float-start"
            style={{ width: "250px" }}
          />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Banyak Distributor Nakal & Produsen Tak Penuhi Subsidi Migor</h4>
            <small>
              <span style={{ color: "red" }}>NEWS</span> - 1 hari yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita keempat */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2018/04/20/4bf03235-2888-4a78-ac3a-09b5973c69fe_169.jpeg?w=715&q=90" alt="Emas Tembus Sejuta" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>BI Ungkap Utang Luar Negri RI Yang Naik Ke Rp 5.977 T</h4>
            <small>
              <span style={{ color: "red" }}>NEWS</span> - 25 menit yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita kelima */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2018/01/17/3784ecb0-c570-4687-b039-69898d819c8e_169.jpeg?w=715&q=90" alt="Inflasi AS" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Ngeri! Menteri ESDM Ungkap Dunia Bisa Krisis Suplai Minyak</h4>
            <small>
              <span style={{ color: "red" }}>NEWS</span> - 33 menit yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita terakhir */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2022/01/10/omicron-muncul-di-dki-jakartakonten_169.jpeg?w=715&q=90" alt="Robot Trading" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Tersisa 2 Wilayah Tak Terdampak Omicron di RI, Kota Anda?</h4>
            <small>
              <span style={{ color: "red" }}>NEWS</span> - 38 menit yang lalu
            </small>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default News;
