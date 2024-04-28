import * as esbuild from 'esbuild';

esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outdir: 'dist'
});