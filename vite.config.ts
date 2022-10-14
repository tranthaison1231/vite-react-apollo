import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import { visualizer } from 'rollup-plugin-visualizer';
import lessToJS from 'less-vars-to-js';
import viteSentry from 'vite-plugin-sentry';
import viteAntdDayjs from 'vite-plugin-antd-dayjs';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import pages from 'vite-plugin-pages';

const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './src/assets/css/variables.less'),
    'utf8',
  ),
  {
    stripPrefix: true,
  },
);

function htmlPlugin(env: Record<string, string | undefined>) {
  return {
    name: 'html-transform',
    transformIndexHtml: {
      enforce: 'pre',
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
      viteAntdDayjs(),
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
      vitePluginImp({
        optimize: true,
        libList: [
          {
            libName: 'antd',
            style: name => {
              if (name === 'col' || name === 'row') {
                return 'antd/lib/style/index.less';
              }
              return `antd/es/${name}/style/index.less`;
            },
          },
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: themeVariables,
        },
      },
    },
    resolve: {
      alias: [
        {
          find: /^#/,
          replacement: path.resolve(__dirname, 'src'),
        },
        { find: /^~antd/, replacement: 'antd' },
      ],
    },
    optimizeDeps: {
      include: ['@ant-design/icons'],
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
