import React, { useState } from "react";

function BoshPages() {
  const [showPopup, setShowPopup] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [activePopup, setActivePopup] = useState(false);

  const buttons = [
    {
      className: "btn-converter",
      label: "Power Converter",
      title: "Electric Power Converter",
      desc: "Mengubah arus listrik sesuai kebutuhan sistem kendaraan listrik.",
      img: import.meta.env.BASE_URL + "/popupImg/converter.png",
    },
    {
      className: "btn-coolingFan",
      label: "Cooling Fan",
      title: "Cooling Fan System",
      desc: "Menjaga suhu mesin dan sistem elektronik tetap optimal.",
      img: import.meta.env.BASE_URL + "/popupImg/coolingfan.png",
    },
    {
      className: "btn-radarSensor",
      label: "Radar Sensor",
      title: "Radar Sensor",
      desc: "Mendeteksi objek di sekitar kendaraan untuk sistem keselamatan.",
      img: import.meta.env.BASE_URL + "/popupImg/radar.png",
    },
    {
      className: "btn-breakingSystem",
      label: "Braking System",
      title: "Advanced Braking System",
      desc: "Menjamin pengereman halus dan aman dengan kontrol elektronik.",
      img: import.meta.env.BASE_URL + "/popupImg/breake.png",
    },
    {
      className: "btn-camera",
      label: "Camera",
      title: " Multi purpose camera",
      desc: "Combines artificial intelligence methods with classic image processing algorithms",
      img: import.meta.env.BASE_URL + "/popupImg/camera.png",
    },
    {
      className: "btn-steering",
      label: "Steering System",
      title: "Smart Steering System",
      desc: "Kontrol kemudi presisi dengan bantuan elektronik.",
    },
    {
      className: "btn-ecomputer",
      label: "E-Computer",
      title: "Engine Control Unit (ECU)",
      desc: "Otak dari sistem kendaraan yang mengatur performa mesin.",
    },
    {
      className: "btn-airbag",
      label: "Airbag",
      title: "Safety Airbag",
      desc: "Perlindungan utama saat terjadi benturan.",
      img: import.meta.env.BASE_URL + "/popupImg/airbag.png",
    },
    {
      className: "btn-battery",
      label: "Battery",
      title: "Lithium-ion Battery",
      desc: "Menyimpan energi untuk seluruh sistem kendaraan listrik.",
      img: import.meta.env.BASE_URL + "/popupImg/battery.png",
    },
    {
      className: "btn-eaxde",
      label: "E-Axle Drive",
      title: "Electric Axle Drive",
      desc: "Menggerakkan roda dengan efisiensi tinggi dan torsi besar.",
      img: import.meta.env.BASE_URL + "/popupImg/eAxle.png",
    },
    {
      className: "btn-ultrasonic",
      label: "Ultrasonic Sensor",
      title: "Ultrasonic Sensor",
      desc: "Mendeteksi jarak objek terdekat untuk membantu parkir.",
      img: import.meta.env.BASE_URL + "/popupImg/ultrasonicsensor.png",
    },
  ];

  const handleOpen = (btn) => {
    setShowPopup(true);
    setAnimateOut(false);
    setActivePopup(btn);
  };

  const handleClose = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setShowPopup(false);
      setAnimateOut(false);
      setActivePopup(null);
    }, 300); // durasi animasi fadeOut
  };

  return (
    <div className="bosch-bg relative">
      {/* Render semua tombol kalau popup belum muncul */}
      {!showPopup &&
        buttons.map((btn, i) => (
          <div key={i} className={`absolute  flex flex-col items-center`}>
            <button
              className={`btn ${btn.className} neon-pulse`}
              onClick={() => handleOpen(btn)}
            ></button>
          </div>
        ))}

      {/* Popup Card */}
      {showPopup && (
        <div className="container">
          <div
            className={` bg-white rounded-xl shadow-xl p-6 w-[320px] text-center ${
              animateOut ? "animate-popupOut" : "animate-popupIn"
            }`}
          >
            <div className="wrapper">
              <img
                src={activePopup.img}
                alt={activePopup.title}
                className="banner-image"
              />
              <h1 className="text-2xl font-bold">{activePopup.title}</h1>
              <p className="text-gray-600 text-sm">{activePopup.desc}</p>
              <button
                className="btn-card outline px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleClose}
              >
                EXPLORE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoshPages;
