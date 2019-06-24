import theme from 'styled-theming';

const textColor = theme('pl', {
    default: 'blue',
    shopify: 'green'
});

const buttonColor = theme('pl', {
    default: 'blue',
    shopify: 'green'
});

export { textColor, buttonColor };