let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/saas.js', 'public/js')
//.postCss('resources/css/saas/css/saas.css', 'public/css');

mix.webpackConfig(webpack => {
    return {
        stats: {
            children: true,
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
	            jQuery: "jquery",
                'window.jQuery': 'jquery',
            })
        ]
    };
});
