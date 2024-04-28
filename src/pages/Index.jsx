import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Heading, Text, VStack, Image, useToast } from "@chakra-ui/react";
import { FaUserCircle, FaLock, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    // Placeholder for login logic
    toast({
      title: "Login Attempt",
      description: "This would be a login attempt in a full application.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="xl" centerContent>
      <Box padding="4" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <VStack spacing={4}>
          <Image src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMGdsb2JlJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MTQzMDcyMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" alt="Worldcoin Concept" />
          <Heading as="h1" size="xl" textAlign="center">
            Welcome to Worldcoin Mimic
          </Heading>
          <Text as="p" fontSize="md" color="gray.600">
            Sign in to access your account
          </Text>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button leftIcon={<FaSignInAlt />} colorScheme="blue" onClick={handleLogin}>
            Sign In
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
