export declare class ResponseBuilder {
    statusCode: number;
    message: string;
    error: string;
    data: any;
    status: string;
    static successMessage(msg: string): ResponseBuilder;
    static errorMessage(msg?: string): ResponseBuilder;
    static badRequest(msg?: string): ResponseBuilder;
    static accepted(msg?: string): ResponseBuilder;
    static data(result: any, msg?: string): ResponseBuilder;
}
