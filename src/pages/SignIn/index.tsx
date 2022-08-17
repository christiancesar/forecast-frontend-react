import React, { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Stack,
  Text,
  Collapse,
  Link,
  ScaleFade,
  Input as InputChakra,
  Checkbox
} from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';

import { FaGoogle } from "react-icons/fa";
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { AuthContext } from '../contexts/AuthContext';
import ForeCastLogo from "../../assets/logo.svg";




type ISignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatório'),
});

export const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [colapse, setColapse] = useState(false);
  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm<ISignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  useEffect(() => {
    new Promise(resolve => setTimeout(() => setColapse(true), 2000));
  }, []);

  async function handleClickRegister() {
    setColapse(false);
    await new Promise(resolve => setTimeout(resolve, 1000));
    navigate('/signup');
  }

  const handleSignIn: SubmitHandler<ISignInFormData> = async values => {
    // try {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    navigate("/home")
    setLoading(false);
    // } catch (error) {
    //   setLoading(false);
    // }
  };

  return (
    <ScaleFade transition={{ enter: { duration: 0.2, delay: 0.5 } }} in={true}>
      <Flex
        w="100%"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Stack spacing="8">
          <Image
            src={ForeCastLogo}
            w="180px"
            alt="Forecast logo"
            alignSelf="center"
            marginBottom="5"
          />
          <Collapse in={colapse} unmountOnExit>
            <Button
              w="full"
              leftIcon={<FaGoogle />}
              type="submit"
              mt="6"
              colorScheme="red"
              size="lg"
              fontWeight="400"
              mb="10"
            // onClick={() => signin('google')}
            >
              Entre com o Google
            </Button>

            <Flex align="center">
              <Divider color="gray.300" />
              <Text marginLeft="2" marginRight="2" color="gray.300">
                Ou
              </Text>
              <Divider color="gray.300" />
            </Flex>
            <Flex
              as="form"
              width="100%"
              margin="auto"
              flexDir="column"
              // padding="6"
              onSubmit={handleSubmit(handleSignIn)}
            >
              <Stack spacing="5">
                <Input
                  label="Email"
                  size="lg"
                  type="email"
                  error={errors.email}
                  {...register('email')}
                />
                <Input
                  label="Senha"
                  size="lg"
                  type="password"
                  error={errors.password}
                  {...register('password')}
                />
              </Stack>
              <Button
                type="submit"
                mt="6"
                bg="#282A36"
                size="lg"
                isLoading={loading}
                _loading={{ color: '#44EE88' }}
                _hover={{ backgroundColor: '#44EE88', color: '#282A36' }}
              >
                Login
              </Button>
              <Checkbox />
              <Link href="/signup" passHref alignSelf="center">
                <Button
                  bg="transparent"
                  _hover={{ color: '#44EE88' }}
                  marginTop="6"
                  onClick={handleClickRegister}
                >
                  <Icon as={FiLogOut} marginRight="2"/>
                  Registrar-se
                </Button>
              </Link>
            </Flex>
          </Collapse>
        </Stack>
      </Flex>
    </ScaleFade>
  );
}
