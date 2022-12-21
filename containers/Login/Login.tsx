import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { setCookie } from "nookies";

import { memo, useState, FormEvent } from "react";

const LoginPage: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const toast = useToast();

  const login = (e: FormEvent) => {
    e.preventDefault();
    console.log(login);
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/user/login", {
        email: email,
        password,
      })
      .then(function (response) {
        setCookie(null, "token", response.data.data.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        router.push("/");
        toast({
          position: "top",
          title: response.data.msg,
          status: "success",
          isClosable: true,
          duration: 1000,
        });
      })
      .catch(function (error) {
        console.log(error);
        toast({
          position: "top",
          title: error.response.data.msg,
          status: "error",
          isClosable: true,
          duration: 1000,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container maxW="sm">
      <FormControl mt="20">
        <Card p="6">
          <Heading as="h4" textAlign="center">
            Login <Avatar bg="teal.500" />
          </Heading>

          <form onSubmit={login}>
            <Box mt="6">
              <FormLabel>Alamat Email</FormLabel>
              <Input
                value={email}
                type="email"
                placeholder="Masukan email"
                size="lg"
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormLabel mt="4">Password</FormLabel>
              <Input
                value={password}
                type="password"
                placeholder="Masukan Password"
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                isLoading={loading}
                type="submit"
                mt="10"
                w="full"
                bg="blue.200"
                size="lg"
              >
                Login
              </Button>
            </Box>
          </form>

          <Text mt="16" textAlign="center">
            Belum punya akun?{" "}
            <Link href="/register" color="red.400">
              Daftar
            </Link>
          </Text>
        </Card>
      </FormControl>
    </Container>
  );
};

export default memo(LoginPage);
