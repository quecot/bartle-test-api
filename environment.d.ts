declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COHERE_API_KEY: string
      DATABASE_URL: string
    }
  }
}

export {};
