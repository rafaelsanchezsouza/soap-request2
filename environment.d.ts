declare global {
  namespace NodeJS {
    interface ProcessEnv {
      LOGIN: string;
      SENHA: string;
      MATRICULA: string;
      CPF: string;
    }
  }
}

declare module 'express';
declare var require: any;
declare var process: any;

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
