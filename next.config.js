const withCSS = require('@zeit/next-css')

const menu_items = require('./lib/navigation.js').menu_items;

module.exports = withCSS({
  exportTrailingSlash: true,
  exportPathMap: function() {
    const paths = { };

    paths['/covid-update'] = { page: '/covid-update' };
    paths['/cfp'] = { page: '/cfp' };

    menu_items.forEach(item => {
      paths[item.url] = { page: item.url };
      (item.sub || []).forEach(sub_item => {
        paths[sub_item.url] = { page: sub_item.url };
      });
    });

    return paths;
  }
});
