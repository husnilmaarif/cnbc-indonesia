import React from "react";

// we dont get API access

function Lifestyle() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* berita pertama */}
        <div>
          <h4 style={{ borderLeft: "3px solid skyblue", paddingLeft: "15px" }}>TERBARU</h4>
          <img src="https://akcdn.detik.net.id/visual/2022/04/05/telur-coklat-kinder-surprise-reuterscaren-firouzfile-photo_169.jpeg?w=360&q=90" alt="Kinder Joy" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Duh! Korban Coklat Kinder di Inggris Bertambah Jadi 67 Anak</h4>
            <small>
              <span style={{ color: "red" }}>LIFESTYLE</span> - 1 jam yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita kedua */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2022/03/30/vanessa-khong-1_169.jpeg?w=360&q=90" alt="Indra Kenz" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Vanessa Khong Bongkar 'Aib' Indra Kenz Hingga Pahak Rp 50 M</h4>
            <small>
              <span style={{ color: "red" }}>LIFESTYLE</span> - 1 jam yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita ketiga */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2020/03/03/4d5ae726-712f-44d4-8983-f3550df2a3c1_169.jpeg?w=360&q=90" alt="Zam-Zam" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>6 Fakta Sumur Zam-Zam di Mekkah Yang Jarang Diketahui</h4>
            <small>
              <span style={{ color: "red" }}>LIFESTYLE</span> - 2 jam yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita keempat */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2018/05/25/82a554e9-a412-446c-be1a-fc79f573bbd4_169.jpeg?w=360&q=90" alt="THR" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Segini Besaran & Hitungan THR Karyawan Swasta 2022</h4>
            <small>
              <span style={{ color: "red" }}>LIFESTYLE</span> - 2 jam yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita kelima */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2021/06/16/terawan-agus-putranto-tangkapan-layar-rdp-komisi-vii-dpr-ri-2_169.png?w=360&q=90" alt="Lab" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Penampakan Lab 'Cuci Otak' Dr Terawan yang Bikin Heboh di RI</h4>
            <small>
              <span style={{ color: "red" }}>LIFESTYLE</span> - 2 jam yang lalu
            </small>
          </div>
        </div>
        <hr />

        {/* berita terakhir */}
        <div>
          <img src="https://akcdn.detik.net.id/visual/2022/03/23/vaksinasi-booster-covid-19-15_169.jpeg?w=360&q=90" alt="Mudik" className="mt-2 float-start" style={{ width: "250px" }} />
          <div style={{ marginTop: "45px", marginLeft: "275px" }}>
            <h4>Jangan Coba Vaksin Booster di Hari H Mudik, Ini Alasannya</h4>
            <small>
              <span style={{ color: "red" }}>LIFESTYLE</span> - 3 jam yang lalu
            </small>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Lifestyle;
