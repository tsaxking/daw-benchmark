import * as esbuild from 'esbuild';
import sveltePlugin from 'esbuild-svelte';
import { typescript } from 'svelte-preprocess-esbuild';
import postCssPlugin from 'esbuild-style-plugin';
import autoPrefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import wasmLoader from 'esbuild-plugin-wasm';

esbuild.build({
    entryPoints: ['src/**/*.ts'],
    bundle: true,
    outdir: 'dist',
    plugins: [
        sveltePlugin({
            preprocess: [
                typescript({
                    tsconfigRaw: {
                        compilerOptions: {}
                    }
                })
            ]
        }),
        postCssPlugin({
            postcss: {
                plugins: [
                    tailwindcss(),
                    autoPrefixer()
                ]
            }
        }),
        wasmLoader({
            mode: 'deferred',
        })
    ]
});