import React, { useState } from "react";

function BoschSliderPages() {
  const [showPopup, setShowPopup] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [activePopup, setActivePopup] = useState(false);

  const buttons = [
    {
      className: "btn-slider-converter",
      label: "Power Converter",
      title: "Electric Power Converter",
      desc: "Mengubah arus listrik sesuai kebutuhan sistem kendaraan listrik.",
      img: import.meta.env.BASE_URL + "/popupImg/converter.png",
      neon: "neon-pulse-energy",
      container: "container-energy",
    },
    {
      className: "btn-slider-coolingFan",
      label: "Cooling Fan",
      title: "Cooling Fan System",
      desc: "Menjaga suhu mesin dan sistem elektronik tetap optimal.",
      img: import.meta.env.BASE_URL + "/popupImg/coolingfan.png",
      neon: "neon-pulse-energy",
      container: "container-energy",
    },
    {
      className: "btn-slider-radarSensor",
      label: "Radar Sensor",
      title: "Radar Sensor",
      desc: "Mendeteksi objek di sekitar kendaraan untuk sistem keselamatan.",
      img: import.meta.env.BASE_URL + "/popupImg/radar.png",
      neon: "neon-pulse-adas",
      container: "container-adas",
    },
    {
      className: "btn-slider-breakingSystem",
      label: "Braking System",
      title: "Advanced Braking System",
      desc: "Menjamin pengereman halus dan aman dengan kontrol elektronik.",
      img: import.meta.env.BASE_URL + "/popupImg/breake.png",
      neon: "neon-pulse-motion",
      container: "container-motion",
    },
    {
      className: "btn-slider-camera",
      label: "Camera",
      title: " Multi purpose camera",
      desc: "Combines artificial intelligence methods with classic image processing algorithms",
      img: import.meta.env.BASE_URL + "/popupImg/camera.png",
      neon: "neon-pulse-adas",
      container: "container-adas",
    },
    {
      className: "btn-slider-airbag",
      label: "Airbag",
      title: "Safety Airbag",
      desc: "Perlindungan utama saat terjadi benturan.",
      img: import.meta.env.BASE_URL + "/popupImg/airbag.png",
      neon: "neon-pulse-motion",
      container: "container-motion",
    },
    {
      className: "btn-slider-battery",
      label: "Battery",
      title: "Lithium-ion Battery",
      desc: "Menyimpan energi untuk seluruh sistem kendaraan listrik.",
      img: import.meta.env.BASE_URL + "/popupImg/battery.png",
      neon: "neon-pulse-energy",
      container: "container-energy",
    },
    {
      className: "btn-slider-eaxde",
      label: "E-Axle Drive",
      title: "Electric Axle Drive",
      desc: "Menggerakkan roda dengan efisiensi tinggi dan torsi besar.",
      img: import.meta.env.BASE_URL + "/popupImg/eAxle.png",
      neon: "neon-pulse-energy",
      container: "container-energy",
    },
    {
      className: "btn-slider-ultrasonic",
      label: "Ultrasonic Sensor",
      title: "Ultrasonic Sensor",
      desc: "Mendeteksi jarak objek terdekat untuk membantu parkir.",
      img: import.meta.env.BASE_URL + "/popupImg/ultrasonicsensor.png",
      neon: "neon-pulse-adas",
      container: "container-adas",
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
    // <div className="slider-scroll-bg">
    //   <button className="btn-slider btn-slider-converter neon-pulse neon-pulse-adas"></button>
    //   <button className="btn-slider btn-slider-coolingFan neon-pulse neon-pulse-adas"></button>
    //   <button className="btn-slider btn-slider-radarSensor neon-pulse neon-pulse-adas"></button>
    //   <button className="btn-slider btn-slider-breakingSystem neon-pulse neon-pulse-adas"></button>
    //   <button className="btn-slider btn-slider-camera neon-pulse neon-pulse-adas"></button>
    //   <button className="btn-slider btn-slider-airbag neon-pulse neon-pulse-adas"></button>
    //   <button className="btn-slider btn-slider-battery neon-pulse neon-pulse-adas"></button>
    //   <button className="btn-slider btn-slider-eaxde neon-pulse neon-pulse-adas"></button>
    //   <button className="btn-slider btn-slider-ultrasonic neon-pulse neon-pulse-adas"></button>
    // </div>

    <div className="slider-scroll-bg">
      {/* Render semua tombol kalau popup belum muncul */}
      {!showPopup &&
        buttons.map((btn, i) => (
          <div key={i} className={`absolute  flex flex-col items-center`}>
            <button
              className={`btn-slider ${btn.className} neon-pulse ${btn.neon}`}
              onClick={() => handleOpen(btn)}
            ></button>
          </div>
        ))}

      {/* Popup Card */}
      {showPopup && (
        <div className={`container-slider ${activePopup.container}`}>
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
                BACK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default BoschSliderPages;
