module.exports = {
    root: '',
    base: './',
    build: {
        outDir: '../../',
        emptyOutDir: true,
        rollupOptions: {
            input: './index.html',
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`,
            }
        }
    }
};