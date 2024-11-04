import React from "react";

export default function Header() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        height: "60px",
        position: "sticky",
        top: 0,
      }}
    >
      <img
        src="src/assets/logo.png"
        alt="logo"
        style={{
          width: "30%",
          objectFit: "contain",
          height: "60px",
          objeftFit: "contain",
          padding: "5px",
        }}
      />
      <div style={{ width: "70%", textAlign: "left" }}>스꾸라이프</div>
    </div>
  );
}
