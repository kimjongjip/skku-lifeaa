import React, {useState} from "react";
import {Tabs, Tab, Box} from '@mui/material';
import {TabContext,TabList,TabPanel} from '@mui/lab';
import { Link } from "react-router-dom";

export default function Nav() {
    const [value, setValue] = useState("1"); 

  const handleChange = (event, newValue) => {
    setValue(newValue); 
  };

    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          height: "40px",
          position: "sticky",
          top: 0,
        }}
      >
<TabContext value={value} sx={{height: "40px"}} >
  <Box sx={{ borderBottom: 1, borderColor: 'divider', height: "40px", width: "100%"}}>
  <TabList onChange={handleChange} sx={{minHeight: "40px", height: "40px", width: "100%"}} centered>
  <Tab component={Link} to="/" label="메인" value="1" sx={{padding: "0", minHeight: "40px", height: "40px"}} />
  <Tab component={Link} to="/" label="인증" value="2" sx={{padding: "0", minHeight: "40px", height: "40px"}} />
  <Tab component={Link} to="/" label="벌칙" value="3" sx={{padding: "0", minHeight: "40px", height: "40px"}} />
  <Tab component={Link} to="/" label="모임관리" value="4" sx={{padding: "0", minHeight: "40px", height: "40px"}}/>
</TabList>
  </Box>
</TabContext>
      </div>
    );
  }