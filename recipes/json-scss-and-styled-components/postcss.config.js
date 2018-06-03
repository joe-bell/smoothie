module.exports = {
  plugins: [
    require('postcss-easy-import')({prefix: '_'}),
    require('autoprefixer')({ /* ...options */ }),
    require('cssnano')({ preset: 'default' })
  ]
}
