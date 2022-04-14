import React from "react";

// we dont get API access

function Investment() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* berita pertama */}
        <div>
          <h4 style={{ borderLeft: "3px solid skyblue", paddingLeft: "15px" }}>TERBARU</h4>
          <img
            src="https://akcdn.detik.net.id/visual/2020/12/08/petugas-menunjukkan-emas-batangan-di-sebuah-gerai-emas-di-pegadaian-jakarta-cnbc-indonesiamuhammad-sabki-9_169.jpeg?w=715&q=90"
            alt="Emas Pegadaian"
            className="mt-2 float-start"
            style={{ width: "250px" }}
          />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Jelang Long Weekend, Yuk Cek Harga Emas Pegadaian</h4>
            <small><span style={{ color: "red" }}>INVESTMENT</span> - 4 jam yang lalu</small>
          </div>
        </div>
        <hr />

        {/* berita kedua */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2022/01/19/gedung-bumn-cnbc-indonesiaandrean-kristianto_169.jpeg?w=715&q=90" alt="Kelola Dana THR" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Strategi Kelola Dana THR Ala Bri Wealth Management</h4>
            <small><span style={{ color: "red" }}>INVESTMENT</span> - 22 jam yang lalu</small>
          </div>
        </div>
        <hr />

        {/* berita ketiga */}
        <div>
          <img
            src="https://akcdn.detik.net.id/visual/2021/05/23/infografis-gaji-ke-13-pns-cair-1-juni-cek-besaran-tiap-golonganaristya-rahadian_169.png?w=715&q=90"
            alt="Kelola Dana THR"
            className="mt-2 float-start"
            style={{ width: "250px" }}
          />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Yuk, Intip Cara Cerdas Kelola Uang THR</h4>
            <small><span style={{ color: "red" }}>INVESTMENT</span> - 1 hari yang lalu</small>
          </div>
        </div>
        <hr />

        {/* berita keempat */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2021/06/22/emas-antam-8_169.jpeg?w=715&q=90" alt="Emas Tembus Sejuta" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Horeee... Emas Antam Tembus Sejuta, Jual Emas Makin Mahal!</h4>
            <small><span style={{ color: "red" }}>INVESTMENT</span> - 1 hari yang lalu</small>
          </div>
        </div>
        <hr />

        {/* berita kelima */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2020/10/27/ilustrasi-emas-pegadaian-cnbc-indonesiaandrean-kristianto-19_169.jpeg?w=715&q=90" alt="Inflasi AS" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Inflasi AS Makin Panas, Harga Emas Pegadaian Ikut Lepas Landas</h4>
            <small><span style={{ color: "red" }}>INVESTMENT</span> - 1 hari yang lalu</small>
          </div>
        </div>
        <hr />

        {/* berita terakhir */}
        <div>
          <img
            src="https://akcdn.detik.net.id/visual/2022/03/24/bareskrim-tangkap-bos-robot-trading-fahrenheit-ini-modus-penipuannya-cnbc-indonesia-tv_169.png?w=715&q=90"
            alt="Robot Trading"
            className="mt-2 float-start"
            style={{ width: "250px" }}
          />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Ivan Gunawan Hingga Ahmad Dhani Masuk Pusara Robot Trading</h4>
            <small><span style={{ color: "red" }}>INVESTMENT</span> - 2 hari yang lalu</small>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Investment;
