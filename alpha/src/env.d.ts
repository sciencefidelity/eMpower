/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SANITY_PROJECT_ID: string
  readonly PUBLIC_SANITY_DATASET: string
  readonly PUBLIC_SANITY_API_VERSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
