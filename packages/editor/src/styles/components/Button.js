const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'semiBold',
    borderRadius: 'sm'
  },
  sizes: {
    xs: {
      fontSize: '12px',
      padding: '4px 8px',
      height: '24px',
      minWidth: '24px'
    },
    sm: {
      fontSize: '15px',
      padding: '4px 8px',
      height: '32px',
      minWidth: '32px'
    },
    md: {
      fontSize: '15px',
      padding: '8px 16px',
      height: '36px',
      minWidth: '36px'
    }
  },
  // Two variants: outline and solid
  variants: {
    // outline: {
    //   border: '2px solid',
    //   borderColor: 'green.500'
    // },
    // solid: {
    // bg: 'green.500',
    // color: 'white'
    // }
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline'
  }
};

export default Button;
