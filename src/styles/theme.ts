import {
  extendTheme,
  withDefaultColorScheme
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.500',
  },
};

const inputStyleShadows = {
  baseStyle: {
    field: {
      color: 'gray.300',
    },
  },
  defaultProps: {
    border: 'gray.900',
    focusBorderColor: 'teal.300',
  },
}

export const theme = extendTheme(
  {
    colors: {
      gray: {
        50: '#edeeee',
        100: '#e0e1e2',
        200: '#d1d3d4',
        300: '#c2c4c6',
        400: '#b0b3b5',
        500: '#9ca0a3',
        600: '#858a8d',
        700: '#384045',
        800: '#282A36',
        900: '#181A22',
      },
      read: {
        50: '#fef8f8',
        100: '#fce9e9',
        200: '#fad9d9',
        300: '#f8c7c7',
        400: '#f6b3b3',
        500: '#f39b9b',
        600: '#f07e7e',
        700: '#EB5757',
        800: '#b94545',
        900: '#6e2929',
      },
      teal: {
        50: '#edfdf4',
        100: '#c4fada',
        200: '#92f5ba',
        300: '#44EE88',
        400: '#40de7f',
        500: '#3acb74',
        600: '#34b668',
        700: '#2d9c59',
        800: '#237b46',
        900: '#154829',
      },
    },
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
    },
    styles: {
      global: {
        body: {
          bg: 'gray.900',
          color: 'white',
        },
      },
    },
    components: {
      Button: {
        baseStyle: {
          // borderRadius: "none",
          _focus: { boxShadow: 'none' }
        },
        variants: {
          primary: {
            bg: 'primary'
          }
        }
      },
      Input: {
        ...inputStyleShadows
      },
      Select: {
        ...inputStyleShadows
      },
      Checkbox: {
        baseStyle: {
          control: {
            _focus: {
              ring: 2,
              ringColor: 'teal.300',
            },
          },
        },

      },
    }
  },
  withDefaultColorScheme({
    colorScheme: 'teal',
    components: ['Checkbox']
  }),
  // withDefaultVariant({
  //   variant: 'filled',
  //   components: ['Input', 'Select'],
  // })
);
