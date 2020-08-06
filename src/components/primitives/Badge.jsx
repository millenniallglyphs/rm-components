import styled from 'styled-components';
import { variant } from 'styled-system';
import { css } from '@styled-system/css';

const Badge = styled.div(
  css({
    boxSizing: 'border-box',
    display: 'inline-block',
    px: 2,
    py: 1,
    textAlign: 'center',
    border: 'none',
    color: 'drafta',
    backgroundColor: 'draftb',
    borderRadius: 'base',
    fontFamily: 'body',
    fontSize: 'md',
    textDecoration: 'none',
  }),
  variant({
    variants: {
      blue: {
        color: 'bg',
        backgroundColor: 'primary',
        marginRight: '12px',
      },
      lightblue: {
        color: 'primary',
        backgroundColor: 'midblue',
        marginRight: '12px',
      },
      grayblue: {
        color: 'primary',
        backgroundColor: 'greyblue',
        marginRight: '12px',
      },
      form: {
        color: 'textb',
        borderColor: 'oline',
        backgroundColor: 'bg',
        marginRight: '12px',
      },
      blank: {
        backgroundColor: 'bg',
        color: 'textb',
        border: 'none',
        marginRight: '12px',
      },
      suggestion: {
        color: 'purplea',
        backgroundColor: 'grad',
        padding: 2,
      },
    },
  })
);

/** @component */
export default Badge;
