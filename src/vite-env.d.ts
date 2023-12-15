/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_LOCALHOST: string;
  readonly VITE_API_PROD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
