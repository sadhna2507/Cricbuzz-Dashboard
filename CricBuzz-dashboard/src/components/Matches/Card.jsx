import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import { mockDataCard as data } from "../../data/mockData";

const cards={
        display: "flex",
        flexWrap: "wrap",
    
}

export default function BasicCard() {
  return (
    <div  style={cards}>
      {data.map((item) => {
        return (
          <div style={{ padding: 20 }}>
            <Card sx={{ maxWidth: 275 , display: "flex"}}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  gutterBottom
                >
                  Name : {item.name}
                </Typography>

                <Typography sx={{ mb: 1.5 }}  variant="body2" >
                  Batting Style: {item.battingStyle}
                </Typography>
                <Typography variant="body2">
                  Bowling Style: {item.bowlingStyle}
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
