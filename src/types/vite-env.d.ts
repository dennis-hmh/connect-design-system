/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NODE_ENV: boolean | string;
  readonly VITE_DEBUG: boolean | string;
  readonly VITE_ENV: boolean | string;
  readonly NODE_ENV: boolean | string;
  readonly PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
