var plugins = [{
      plugin: require('D:/PROJECT/Centrum gabinetów terapeutycznych/gatsby/centrum-gabinetów-terapeutycznych/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/PROJECT/Centrum gabinetów terapeutycznych/gatsby/centrum-gabinetów-terapeutycznych/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/PROJECT/Centrum gabinetów terapeutycznych/gatsby/centrum-gabinetów-terapeutycznych/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/PROJECT/Centrum gabinetów terapeutycznych/gatsby/centrum-gabinetów-terapeutycznych/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/PROJECT/Centrum gabinetów terapeutycznych/gatsby/centrum-gabinetów-terapeutycznych/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/PROJECT/Centrum gabinetów terapeutycznych/gatsby/centrum-gabinetów-terapeutycznych/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/assets/images/icons/favicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"91027d2a854eecf680e9c44e1e3657a8"},
    },{
      plugin: require('D:/PROJECT/Centrum gabinetów terapeutycznych/gatsby/centrum-gabinetów-terapeutycznych/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
