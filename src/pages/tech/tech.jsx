import React from "react";

// we dont get API access

function Tech() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* berita pertama */}
        <div>
          <h4 style={{ borderLeft: "3px solid skyblue", paddingLeft: "15px" }}>TERBARU</h4>
          <img src="https://akcdn.detik.net.id/visual/2022/04/13/infografis-bappebti-atur-robot-trading-bakal-ada-yang-legal.jpeg?w=480" alt="Harga Pangan" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Bappebti Atur Robot Trading, Bakal Ada yang Legal?</h4>
            <small>
              <span style={{ color: "red" }}>TECH</span> - 1 jam yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita kedua */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2022/01/17/nft-pixabay_169.jpeg?w=360&q=90" alt="Ongkos Haji" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Warning China Soal NFT! Ada Resiko Besar, Apa Itu?</h4>
            <small>
              <span style={{ color: "red" }}>TECH</span> - 1 jam yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita ketiga */}
        <div>
          <img
            src="https://akcdn.detik.net.id/visual/2021/08/18/robin-li-kanan-ceo-baidu-duduk-di-prototipe-baru-robocar-raksasa-teknologi-china-kendaraan-otonom-pada-konferensi-tahunan-baid_169.jpeg?w=360&q=90"
            alt="Buka Puasa"
            className="mt-2 float-start"
            style={{ width: "250px" }}
          />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Ini Deretan Kota Tercanggih di Dunia, Jakarta Masuk Daftar?</h4>
            <small>
              <span style={{ color: "red" }}>TECH</span> - 1 jam yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita keempat */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2021/03/08/infografis-kasus-phising-email-yang-serang-indonesia-makin-merajalela-2_169.jpeg?w=360&q=90" alt="Asmaul Husna" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Sempat Bobol BI, Ini Identitas Sebenarnya Conti Ransomware</h4>
            <small>
              <span style={{ color: "red" }}>TECH</span> - 1 jam yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita kelima */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2022/01/28/pelonggaran-pemakaian-masker-di-inggris_169.jpeg?w=360&q=90" alt="Buka Puasa" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Bos Vaksin Pfizer Ungkap Kapan Pandemi Covid Berakhir</h4>
            <small>
              <span style={{ color: "red" }}>TECH</span> - 2 jam yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita terakhir */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2022/01/31/gambar-konten-omicron-merajalela_169.jpeg?w=360&q=90" alt="Marah-Marah" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Ini Varian Baru Covid yang Paling Banyak di RI, Bukan XE!</h4>
            <small>
              <span style={{ color: "red" }}>TECH</span> - 2 jam yang lalu
            </small>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Tech;
