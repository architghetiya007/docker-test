"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBuilder = void 0;
class ResponseBuilder {
    static successMessage(msg) {
        const rb = new ResponseBuilder();
        rb.statusCode = 200;
        rb.status = 'Success';
        rb.message = msg;
        return rb;
    }
    static errorMessage(msg) {
        const rb = new ResponseBuilder();
        rb.statusCode = 500;
        rb.message = msg != null ? msg : 'Internal Server Error';
        rb.status = 'failed';
        return rb;
    }
    static badRequest(msg) {
        const rb = new ResponseBuilder();
        rb.statusCode = 400;
        rb.message = msg;
        rb.status = 'failed';
        return rb;
    }
    static accepted(msg) {
        const rb = new ResponseBuilder();
        rb.statusCode = 204;
        rb.message = msg;
        rb.status = 'Success';
        return rb;
    }
    static data(result, msg) {
        const rb = new ResponseBuilder();
        rb.statusCode = 200;
        rb.message = msg || null;
        rb.status = 'Success';
        rb.data = result ? result : [];
        return rb;
    }
}
exports.ResponseBuilder = ResponseBuilder;
//# sourceMappingURL=responseBuilder.js.map