import React, { useState } from "react";
import { TextField, Button, IconButton, Avatar } from "@mui/material";
import Header from "../components/common/Header";
import DefaultProfile from "../assets/profile_default.png";

export default function GroupMainPage() {
    const [Profile, setProfile] = useState(DefaultProfile);

    return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "15px",
        margin: "0"
      }}
    >
        <div style={{margin: "0"}}>
            <Header/>
            {/* <Nav/> */}
        </div>
        <div style={{display:"flex", flexDirection:"column", gap: "10px", margin: "0 10px" }}>
            {/* 모임 정보 */}
            <div style={{ display: "flex", margin: "0", width: "100%" }}>
                <Avatar src={Profile} style={{ width: 80, height: 80, marginRight: "20px", marginLeft: "0" }} />
                <div style={{display:"flex", flexDirection:"column", gap: "5px", margin: "auto 0"}}>
                    <h3 style={{margin: "0"}}>모임 이름</h3>
                    <p style={{margin: "0"}}>모임 한줄 소개문</p>
                </div>
            </div>
            {/* 통계 부분 */}
            <div style={{width:"100%"}}>
                <h3 style={{marginBottom:"5px"}}>통계치</h3>
                <div style={{ backgroundColor: "#F0F0F0", padding: "100px", textAlign: "center" }}>
                <p>통계치 부분</p>
                </div>
            </div>

            {/* 모임원 리스트 */}
            <div style={{width:"100%"}}>
                <h3 style={{marginBottom:"5px"}}>모임원</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(85px, 1fr))", rowGap:"15px", columnGap:"5px" }}>
                {[...Array(9)].map((_, index) => (
                    <div key={index} style={{ textAlign: "center", width: 85, height: 100}}>
                    <Avatar src={Profile} style={{ width: 70, height: 70}} />
                    <p>user1</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
    );
}