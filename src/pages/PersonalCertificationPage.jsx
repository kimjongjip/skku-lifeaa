import React from "react";
import profileImg from "/src/assets/logo.png";
import Header from "../components/common/Header";
import { useLocation } from "react-router-dom";

export default function PersonalCertificationPage() {
  const location = useLocation();
  const { name, id, status, statusColor } = location.state;
  console.log(name, id, status);
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
          width: "90%",
          gap: "10px",
          margin: "0px",
          marginTop: "80px",
        }}
      >
        <img
          src={profileImg}
          alt="user"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50px",
            backgroundColor: "#D9D9D9",
          }}
        />
        <div>
          <div>{name}</div>
          <div>2024.08.20</div>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          height: "60vh",
          width: "90%",
          backgroundColor: `${statusColor}`,
          borderRadius: "20px",
        }}
      ></div>
      <div></div>
    </>
  );
}