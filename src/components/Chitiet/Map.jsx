import React from 'react';

const WeddingMap = () => {
  const addressQuery = encodeURIComponent(
    'Số nhà 218, Ấp Phụng Xoài, Xã Châu Phong, An Giang, Việt Nam'
  );

  return (
<div className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden shadow-md">
      <iframe
        src={`https://www.google.com/maps?q=${addressQuery}&hl=vi&z=15&output=embed`}
        className="absolute top-0 left-0 w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${addressQuery}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 bg-white/90 text-emerald-600 text-sm px-3 py-1 rounded shadow hover:bg-white"
      >
        📍 Mở Google Maps
      </a>
    </div>
  );
};

export default WeddingMap;
