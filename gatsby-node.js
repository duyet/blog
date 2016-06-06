var rucksack = require('rucksack-css')
var autoprefixer = require('autoprefixer')
var lost = require("lost")

exports.modifyWebpackConfig = function(config, env) {
    config.merge({
        postcss: [
            lost(),
            rucksack(),
            autoprefixer({
                browsers: ['>1%', 'ie >= 10', 'safari >= 6', 'last 3 versions']
            })
        ]
    })

    return config
};