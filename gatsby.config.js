import webpack from 'webpack'
import precss from 'precss'
import lost from 'lost'
import rucksack from 'rucksack-css'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

module.exports = function(config, env) {
    var is_static = env === 'static';
    var is_develop = env === 'develop';
    var is_production = env === 'production';

    config.merge({
      postcss: [
        lost(),
        rucksack({
          autoprefixer: true
        })
      ]
    });

    config.removeLoader('css');

    if (is_develop) {
      config.loader('css', function(cfg) {
        cfg.test = /\.css/;
        cfg.loaders = ['style', 'css-loader', 'postcss-loader'];
        return cfg
      })
      config.loader('postcss', function(cfg) {
        cfg.test = /\.sss/;
        cfg.loaders = ['style', 'css-loader', 'postcss-loader?parser=sugarss'];
        return cfg
      })
    } else {
      config.loader('css', function(cfg) {
        cfg.test = /\.css/;
        cfg.loader = ExtractTextPlugin.extract(['css-loader', 'postcss-loader']);
        return cfg
      })
      config.loader('postcss', function(cfg) {
        cfg.test = /\.sss/;
        cfg.loader = ExtractTextPlugin.extract(['css-loader', 'postcss-loader?parser=sugarss']);
        return cfg
      })
    }
    
    config.plugin('extract-css',
                  ExtractTextPlugin,
                  ["styles.css", { allChunks: true }]);

  return config
};