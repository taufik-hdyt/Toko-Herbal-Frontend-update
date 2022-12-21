import {
  Avatar,
  Button,
  Card,
  Container,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import axios from "axios";

import { memo, useState, FormEvent } from "react";

const RegisterPage: React.FC = (): JSX.Element => {
  const [name, SetName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  const register = (e: FormEvent) => {
    e.preventDefault();
    console.log(register);
    setLoading(true);

    axios
      .post("http://localhost:5000/api/v1/user/register", {
        name: name,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        router.push("login");
        toast({
          title: response.data.msg,
          status: "success",
          isClosable: true,
          position: "top",
        });
      })
      .catch(function (error) {
        console.log(error);
        toast({
          title: error.response.data.msg,
          status: "error",
          isClosable: true,
          position: "top",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container maxW="md" mt="20">
      <Card>
        <Heading mt="4" size="lg" textAlign="center">
          Buat Akun
          <Avatar bg="teal.200" />
        </Heading>
        <form onSubmit={register}>
          <Stack p="6" spacing="16">
            <VStack spacing="4">
              <Input
                border="2px"
                size="lg"
                placeholder="Nama Lengkap"
                type="text"
                value={name}
                onChange={(e) => SetName(e.target.value)}
              />

              <Input
                border="2px"
                size="lg"
                placeholder="Alamat Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                border="2px"
                size="lg"
                placeholder="Kata sandi"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </VStack>

            <Button
              isLoading={loading}
              size="lg"
              colorScheme="messenger"
              w="full"
              type="submit"
            >
              Buat
            </Button>

            <Text align="center" mt="10" mb="2">
              Sudah Punya Akun?
              <Link color="red.400" ml="2" fontWeight="semibold" href="/login">
                Masuk
              </Link>
            </Text>
          </Stack>
        </form>
      </Card>
    </Container>
  );
};

export default memo(RegisterPage);
