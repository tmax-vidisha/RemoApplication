/* eslint-disable */
import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { IndexKind } from "typescript";

interface IBreadcrumbProps {
  breadcrumb: [
    {
      id: string;
      name: string;
    }
  ];
  getChildHandler: (id: string) => void;
}

const Breadcrumb: React.FC<IBreadcrumbProps> = ({
  breadcrumb: breadcrumbs,
  getChildHandler,
}: IBreadcrumbProps) => {
  return (
    <>
      {breadcrumbs && (
        <Breadcrumbs sx={{paddingBottom:"10px"}} aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" sx={{color:"#333333", fill:"gray",margin:"2px"}}/>}>
          {breadcrumbs.map((breadcrumb, index: number) =>

            index === breadcrumbs.length - 1 ? (
              <Typography variant="caption" component="span" sx={{color:"#333333",opacity:0.7}} key={index}>{breadcrumb.name}</Typography>
            ) : (
              <Link key={index} fontSize="small" color="textPrimary" underline="none"
                onClick={() => getChildHandler(breadcrumb.id)}
              >
                {breadcrumb.name}
              </Link>
            )
          )}
        </Breadcrumbs>
      )}
    </>
  );
};

export default Breadcrumb;
