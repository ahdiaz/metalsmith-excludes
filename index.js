/**
 * metalsmith-excludes
 * Excludes documents from the builds based on tags, like draft or sandbox
 *
 * @author Antonio Hernandez <ahdiaz@gmail.com>
 * @license MIT
 */

var debug = require('debug')('metalsmith-excludes');


/**
 * Metalsmith plugin to hide drafts and other content by tag.
 *
 * @return {Function}
 */
function plugin(tags) {

    tags = tags || [ 'draft' ];
    tags = tags.join(':');

    return function(files, metalsmith, done) {

        setImmediate(done);

        Object.keys(files).forEach(function(file) {

            var data = files[file];
            if (!data.tags) return;

            debug('checking file %s', file);

            var re = new RegExp('\\b(' + data.tags.join('|') + ')\\b');

            if (re.test(tags)) {
                debug('deleting file %s', file);
                delete files[file];
            }
        });
    };
}

module.exports = plugin;
