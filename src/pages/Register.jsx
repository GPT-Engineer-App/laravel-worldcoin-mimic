import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

function Register() {
  return (
    <Box p={4}>
      <Text fontSize="xl">Register a new account.</Text>
      <Button as="a" href="/" colorScheme="blue" mt={4}>
        Back to Sign In
      </Button>
    </Box>
  );
}

export default Register;
