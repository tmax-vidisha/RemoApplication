/* eslint-disable */
import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Card, Container } from "@mui/material";

export default function SkeletonAnimation() {
  return (
    <Container>
      <Card elevation={0}>
        <Box sx={{ width: 700 }}>
          <Skeleton /> <Skeleton animation="wave" /> <Skeleton />
          <Skeleton animation="wave" /> <Skeleton />
          <Skeleton animation="wave" />
        </Box>
      </Card>
    </Container>
  );
}
