import React from "react";

// we dont get API access

function Entrepreneur() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* berita pertama */}
        <div>
          <h4 style={{ borderLeft: "3px solid skyblue", paddingLeft: "15px" }}>TERBARU</h4>
          <img src="https://akcdn.detik.net.id/visual/2022/04/11/cover-insight-tanah-sawangan-1_169.jpeg?w=715&q=90" alt="Tuan Tanah" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Warga Depok Perlu Tahu Ini, Tuan Tanah Depok Tempo Dulu!</h4>
            <small>
              <span style={{ color: "red" }}>ENTREPRENEUR</span> - 1 hari yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita kedua */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2022/04/06/tuan-tanah-kedawung_169.jpeg?w=715&q=90" alt="Juragan Tanah" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Orang Ini Dulu Juragan Tanah di Pasar Rebo Sampai Cibubur</h4>
            <small>
              <span style={{ color: "red" }}>ENTREPRENEUR</span> - 2 hari yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita ketiga */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2022/04/06/leendert-miero-tuan-yahudi-di-pondok-gede_169.jpeg?w=715&q=90" alt="Crazy Rich" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Pondok Gede Dulu Punya 'Crazy Rich', Tuan Tanah Sakit Hati</h4>
            <small>
              <span style={{ color: "red" }}>ENTREPRENEUR</span> - 5 hari yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita keempat */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2022/04/06/tuan-tanah-kedawung_169.jpeg?w=715&q=90" alt="Tuan Tanah" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Khouw Oen Glok: Tuan Tanah Dadap, Sebelum PIK 2 Berkuasa!</h4>
            <small>
              <span style={{ color: "red" }}>ENTREPRENEUR</span> - 6 hari yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita kelima */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2022/04/05/cover-insight-ramadhan_169.jpeg?w=715&q=90" alt="Tuan Tanah" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Haji Ung dan Haji Nawi, Tuan Tanah Kemayoran Sampai Jaksel</h4>
            <small>
              <span style={{ color: "red" }}>ENTREPRENEUR</span> - 6 hari yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita terakhir */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2022/04/07/direktur-bisnis-kecil-dan-menengah-bri-amam-sukriyanto_169.jpeg?w=715&q=90" alt="Kopi Gayo" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Mantap! BRI Antar Pengusaha Kopi Gayo Go Internasional</h4>
            <small>
              <span style={{ color: "red" }}>ENTREPRENEUR</span> - 1 minggu yang lalu
            </small>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Entrepreneur;
