import React from "react";
import { Typography } from "@mui/material";

function Home() {

  return (
    <>
    <Typography component="span" variant="h1" > 
    Welcome</Typography><br/>
    <Typography component="span" variant="h4">this is the homepage</Typography>
    </>
  );
}

export default Home;

//Typography component="span" pääsin eroon "...cannot appear as a descendant..."-errorista, mutta toDoList renderöinnissä se taas tulee
//stackoverflow.com/questions/41928567/div-cannot-appear-as-a-descendant-of-p