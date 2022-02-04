import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, type, ...rest },
  ref,
) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel id={name} htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <InputGroup size="md">
        <ChakraInput
          name={name}
          id={name}
          focusBorderColor="#44EE88"
          bgColor="#282A36"
          variant="filled"
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : 'text'
          }
          size="lg"
          ref={ref}
          {...rest}
        />
        {type === 'password' && (
          <InputRightElement width="4.5rem" h="100%">
            <Button
              h="1.75rem"
              size="sm"
              bg="transparent"
              _hover={{
                bgColor: '#44EE88',
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
