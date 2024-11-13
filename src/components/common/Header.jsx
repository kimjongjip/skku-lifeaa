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
          width: "10%",
          objectFit: "contain",
          
        }}
      />
      <div style={{ width: "70%", textAlign: "left" }}>스꾸라이프</div>
    </div>
  );
}
