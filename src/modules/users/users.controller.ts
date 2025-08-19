import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/roles.guard';
import { Roles } from '../../common/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private svc: UsersService) { }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('me')
  @ApiOperation({ summary: 'Get current user profile' })
  me(@Request() req) {
    return this.svc.findById(req.user.userId);
  }

  /* @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @Patch(':id/role')
  @ApiOperation({ summary: 'Set user role (Admin)' })
  setRole(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.svc.setRole(id, body.role);
  } */

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @Get('users')
  @ApiOperation({ summary: 'Get all users' })
  users(@Request() req) {
    return this.svc.findAll();
  }
}
