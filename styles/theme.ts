import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        new_outline: {
          align: 'center',
          justify: 'center',
          py: 3,
          rounded: 'lg',
          gap: 2,
          fontWeight: 600,
          lineHeight: '24px',
          h: '50px',
          border: '1px solid rgba(77, 14, 255, 0.4)',
          background: 'transparent',
        },
        new_solid: {
          align: 'center',
          justify: 'center',
          py: 3,
          rounded: 'lg',
          gap: 3,
          fontWeight: 600,
          lineHeight: '24px',
          h: '48px',
          bg: 'linear-gradient(269.88deg, rgba(55, 52, 255, 0.224) 7.38%, rgba(20, 3, 163, 0.26) 38.6%, rgba(42, 6, 45, 0.098) 96.89%), rgba(77, 14, 255, 0.35)',
          _hover: {
            _disabled: {
              bg: 'linear-gradient(269.88deg, rgba(55, 52, 255, 0.224) 7.38%, rgba(20, 3, 163, 0.26) 38.6%, rgba(42, 6, 45, 0.098) 96.89%), rgba(77, 14, 255, 0.35)',
            },
          },
        },
      },
    },
    Input: {
      variants: {
        customized: {
          bgColor: 'rgba(50, 48, 102, 0.4)',
          py: 3,
          px: 4,
          borderColor: 'rgb(50, 48, 102)',
          border: '1px solid',
        },
      },
    },
  },
})
