import React from "react";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)">
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}>
            Ecommers
          </Typography>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint
            quod necessitatibus quam vel, officia ex illum quos soluta
            aspernatur dignissimos? Ea, quod accusantium a facere quia id
            impedit incidunt!
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms and Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help center</Typography>
          <Typography mb="30px">Track your order</Typography>
          <Typography mb="30px">Corporate and Bulk Purchasing</Typography>
          <Typography mb="30px">Returns and Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            50 North Whatever Blvd, San Francisco
          </Typography>
          <Typography mb="30px">Email: JohnDoe@gmail.com</Typography>
          <Typography mb="30px">(111)-222-3333</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
