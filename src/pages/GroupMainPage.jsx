import React, { useState } from "react";
import { TextField, Button, IconButton, Avatar } from "@mui/material";
import Header from "../components/common/Header";
import DefaultProfile from "../assets/profile_default.png";
import Nav from "../components/common/Nav";

export default function GroupMainPage() {
    const [Profile, setProfile] = useState(DefaultProfile);
    const [groupName, setGroupName] = useState("모임 이름");
    const [groupIntro, setGroupIntro] = useState("모임 소개문");

    const users = [
        { id: 1, name: "user1", profilePic: DefaultProfile },
        { id: 2, name: "user2", profilePic: DefaultProfile },
        { id: 3, name: "user3", profilePic: DefaultProfile },
        { id: 4, name: "user4", profilePic: DefaultProfile },
        { id: 5, name: "user5", profilePic: DefaultProfile },
        { id: 6, name: "user6", profilePic: DefaultProfile },
        { id: 7, name: "user7", profilePic: DefaultProfile },
        { id: 8, name: "user8", profilePic: DefaultProfile },
        { id: 9, name: "user9", profilePic: DefaultProfile },
    ];

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
            {<Nav/>}
        </div>
        <div style={{display:"flex", flexDirection:"column", gap: "10px", margin: "0 10px" }}>
            {/* 모임 정보 */}
            <div style={{ display: "flex", margin: "0", width: "100%" }}>
                <Avatar src={Profile} style={{ width: 80, height: 80, marginRight: "20px", marginLeft: "0" }} />
                <div style={{display:"flex", flexDirection:"column", gap: "5px", margin: "auto 0"}}>
                    <h3 style={{margin: "0"}}>{groupName}</h3>
                    <p style={{margin: "0"}}>{groupIntro}</p>
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
                {users.map((user) => (
                    <div key={user.id} style={{ textAlign: "center", width: 85, height: 100}}>
                    <Avatar src={user.profilePic} style={{ width: 70, height: 70}} />
                    <p>{user.name}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
    );
}