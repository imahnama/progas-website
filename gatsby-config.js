const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = {
  siteMetadata: {
   title: 'PROGAS Website',
   description:
     'A website for ProGas',
   siteurl: 'https://progas-staging.netlify.app/', // No trailing slash allowed!
   image: '/PROGAS6kg13kgpinkcylinder.jpg', // Path to your image you placed in the 'static' folder
   twitterUsername: '@ProGasKe',
 },
  plugins: [
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -90,
      },
    },
  ],
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'https://progas-staging.netlify.app/.netlify/functions',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },
};
