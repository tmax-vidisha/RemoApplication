import { useStyles } from "./Styles";
import React, { useEffect, useState } from "react";


const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.footerLeft}>
          <p>
            &copy; 2022 REMO Portal. All Rights Reserved. REMO&#174; is a registered
            trademark of REMO Portal
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
