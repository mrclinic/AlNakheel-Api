import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { HttpStatus } from '@nestjs/common';
import { BusinessException } from '../common/exceptions/business.exception';

import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  constructor() {
    super();

    /* // Middleware for all queries
    this.$use(async (params, next) => {
      try {
        return await next(params);
      } catch (error) {
        this.handlePrismaError(error);
      }
    }); */
  }

  private handlePrismaError(error: unknown): never {
    if (error instanceof PrismaClientKnownRequestError) {
      switch (error.code) {

        case 'P2002': // Unique constraint
          throw new BusinessException(`Duplicate value for field: ${(error.meta?.target as string[]).join(', ')}`, HttpStatus.CONFLICT);

        case 'P2003': // foreign key violation code
          throw new BusinessException(`Foreign key constraint failed on field: ${error.meta?.field_name}`, HttpStatus.BAD_REQUEST);

        case 'P2004': // A NOT NULL constraint failed.
          throw new BusinessException(`Null constraint failed on field: ${error.meta?.field_name}`, HttpStatus.BAD_REQUEST);

        case 'P2009': // A required relation is missing
          throw new BusinessException('A required relation is missing', HttpStatus.BAD_REQUEST);

        case 'P2011': // Field value is invalid for the column type
          throw new BusinessException('Field value is invalid for the column type', HttpStatus.BAD_REQUEST);

        case 'P2021': // Expected one record, found multiple
          throw new BusinessException('Expected one record, found multiple', HttpStatus.BAD_REQUEST);

        case 'P2025': // Record not found
          throw new BusinessException('Record not found', HttpStatus.NOT_FOUND);

        default:
          throw new BusinessException(`Database error: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    if (error instanceof Error) {
      throw new BusinessException(`Unexpected DB error: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    throw new BusinessException('Unknown database error');
  }
}
