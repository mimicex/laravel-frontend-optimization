import { defineConfig }     from 'vite'
import laravel              from 'laravel-vite-plugin'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import lightningcss         from 'vite-plugin-lightningcss'
import { VitePWA }          from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        // minify js 與 css code
        ViteMinifyPlugin(),

        lightningcss({
            browserslist: '>= 0.25%'
        }),
        laravel({
            input: [
                'resources/css/app.css', 
                'resources/js/app.js'
            ],
            refresh: true,
        }),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'script',
            outDir: 'public/build',
            base: 'public',
            buildBase: '/build/',
            scope: '/',
            workbox: {
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/il\.marieclaire\.com\.tw/,
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'mctwCacheV3',
                            expiration: {
                                maxEntries: 500,
                                maxAgeSeconds: 60 * 60 * 24 * 365 * 2 // 2 years
                            },
                            cacheableResponse: {
                                statuses: [200]
                            },
                            rangeRequests: true
                        }
                    }
                ],
                cleanupOutdatedCaches: true,
                directoryIndex: null,
                globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
                maximumFileSizeToCacheInBytes: 4194304,
                navigateFallback: null,
                navigateFallbackDenylist: [/\/[api,admin,livewire]+\/.*/],
                additionalManifestEntries: [
                    { url: '/images/logo.jpeg', revision: null },
                    { url: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap', revision: null },
                ]
            },
            manifest: {
                name: '自行修改',
                short_name: '自行修改',
                description: '自行修改',
                theme_color: '#FFF',
                background_color: '#FFF',
                orientation: 'portrait-primary',
                id: '/',
                scope: '/',
                start_url: '/'
            },
        })
    ],
})
