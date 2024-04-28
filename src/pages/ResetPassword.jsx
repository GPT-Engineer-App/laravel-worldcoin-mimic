import React from "react";
import { Box, Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

function ResetPassword() {
  return (
    <Box p={4}>
      <Text fontSize="xl">Reset your password here.</Text>
      <FormControl id="email" mt={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Enter your email" />
      </FormControl>
      <Button as="a" href="/" colorScheme="blue" mt={4}>
        Back to Sign In
      </Button>
    </Box>
  );
}

export default ResetPassword;
