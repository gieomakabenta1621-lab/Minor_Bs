
import React from "react";

function Gallery() {
  const images = [
    "https://picsum.photos/id/1015/400/300",
    "https://picsum.photos/id/1018/400/300",
    "https://picsum.photos/id/1025/400/300",
    "https://picsum.photos/id/1035/400/300",
    "https://picsum.photos/id/1043/400/300",
    "https://picsum.photos/id/1062/400/300",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Gallery</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            style={{
              width: "100%",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
