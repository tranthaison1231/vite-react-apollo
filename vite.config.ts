import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import viteSentry from 'vite-plugin-sentry';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import pages from 'vite-plugin-pages';

function htmlPlugin(env: Record<string, string | undefined>) {
  return {
    name: 'html-transform',
    transformIndexHtml: {
      enforce: 'pre' as const,
      transform: (html: string) => {
        return html.replace(/<%=(.*?)%>/g, (match, p1) => env[p1] ?? match);
      },
    },
  };
}

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [
      htmlPlugin(process.env),
      svgr(),
      pages({
        routeStyle: 'next',
        dirs: 'src/pages',
      }),
      react(),
      viteSentry({
        url: process.env.SENTRY_URL,
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        release: '1.0',
        deploy: {
          env: 'staging',
        },
        setCommits: {
          auto: true,
        },
        sourceMaps: {
          include: ['./build/assets'],
          ignore: ['node_modules'],
          urlPrefix: '~/assets',
        },
      }),
    ],
    resolve: {
      alias: [
        {
          find: /^#/,
          replacement: path.resolve(__dirname, 'src'),
        },
      ],
    },
    build: {
      sourcemap: false,
      outDir: 'build',
      rollupOptions: {
        plugins: [visualizer()],
      },
    },
  });
};
