import { Handler } from 'aws-lambda';

/**
 * Aplica as funções em ordem e retorna o resultado
 * decorate([f, g, h], arg) é o mesmo que f(g(h(arg)))
 */
export function decorate(decorators: Array<((h: Handler) => Handler)>, handler: Handler) {
  for (let i = 0; i < decorators.length; i++) {
    handler = decorators[decorators.length - i - 1](handler);
  }

  return handler;
}

/**
 * Se o Lambda der throw, não parece ser possível pegar informação de erro muito detalhada do lado do AppSync.
 * Este wrappper faz com que o lambda sempre dê sucesso, retornando um objeto { error, success }
 * Os mapping templates do AppSync precisarão identificar a presença do campo error para formatar o erro com mais informações
 */
export function AppSyncHandler(handler: Handler): Handler {
  return async (event, context, args) => {
    try {
      const success = await handler(event, context, args);

      return { error: null, success };
    } catch (err:any) {
      const error = {
        ...err,
        // Estes campos não aparecem normalmente ao converter um error para JSON, pois não são enumeráveis
        name: err.name,
        message: err.message,
        stack: err.stack,
      };

      return { error, success: null };
    }
  };
}