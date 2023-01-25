declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COHERE_API_KEY: string
    }
  }
}

export {};
