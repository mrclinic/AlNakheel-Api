import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, } from '@nestjs/common';
import { Request, Response } from 'express';
import { BusinessException } from './exceptions/business.exception';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        let errorName = 'Error';

        if (exception instanceof BusinessException) {
            status = exception.getStatus();
            const res = exception.getResponse() as any;
            message = res.message || message;
            errorName = res.error || 'BusinessException';
        } else if (exception instanceof HttpException) {
            status = exception.getStatus();
            const res = exception.getResponse() as any;
            message = res.message || message;
            errorName = res.error || 'HttpException';
        } else if (exception instanceof Error) {
            message = exception.message;
            errorName = exception.name;
        }

        response.status(status).json({
            statusCode: status,
            error: errorName,
            message,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}
