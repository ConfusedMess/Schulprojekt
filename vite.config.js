import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [//hier  werden die vite links erstellt
                'resources/css/app.css',
                'resources/css/Table.css',
                'resources/css/Modal.css',



            ],
            refresh: true,
        }),
    ],
});
