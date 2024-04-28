import React, { useState } from "react";
import { Box, Text, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    alert("Registration details saved!");
  };

  return (
    <Box p={4}>
      <Text fontSize="xl">Register a new account.</Text>
      <FormControl id="username" isRequired>
        <FormLabel>Username</FormLabel>
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl id="phone" isRequired>
        <FormLabel>Phone number</FormLabel>
        <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <FormControl id="confirmPassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </FormControl>
      <Button colorScheme="blue" mt={4} onClick={handleRegister}>
        Register
      </Button>
      <Button as="a" href="/" colorScheme="blue" mt={4}>
        Back to Sign In
      </Button>
    </Box>
  );
}

export default Register;
