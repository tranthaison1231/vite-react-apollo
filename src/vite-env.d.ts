/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />

interface ImportMeta {
  env: {
    VITE_BASE_URL: string;
    VITE_IMAGE_URL: string;
    VITE_NODE_ENV: string;
    VITE_CODE_GEN_TOKEN: string;
    VITE_APP_BUSINESS_CONFIG_URL: string;
    VITE_APP_PUBLIC_GOOGLE_API_KEY: string;
  };
}

declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
