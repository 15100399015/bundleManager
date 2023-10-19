

export class Result {
    static standard(code: number, data: any, message: string) {
      return { code, message, data };
    }
    static data(data: any, message?: string) {
      return Result.standard(0, data, message || "success");
    }
    static warning(data: any, message?: string) {
      return Result.standard(1, data, message || "warning");
    }
    static error(data: any, message?: string) {
      return Result.standard(2, data, message || "error");
    }
  }