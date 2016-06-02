var rucksack = require('rucksack-css')
var lost = require("lost")

exports.modifyWebpackConfig = function(config, env) {
    config.merge({
        postcss: [
            lost(),
            rucksack()
        ]
    })

    return config
};