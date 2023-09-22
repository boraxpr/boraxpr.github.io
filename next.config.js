const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
})
module.exports = withNextra(
  {
    images: {
      unoptimized: true,
    },
  }
)
module.exports = withNextra()
