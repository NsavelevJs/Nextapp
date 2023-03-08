import { Controller, Get, Param } from '@nestjs/common';

@Controller('blogs')
export class BlogsController {
  constructor() {}

  @Get()
  async index(): Promise<boolean> {
    return true;
  }
}
