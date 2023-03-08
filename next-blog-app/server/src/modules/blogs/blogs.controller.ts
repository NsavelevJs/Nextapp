import { Controller, Get, Param } from '@nestjs/common';
import blogs, { Blogs } from 'src/blogs';
@Controller('blogs')
export class BlogsController {
  constructor() {}

  @Get()
  async index(): Promise<Blogs[]> {
    console.log('index');
    return blogs;
  }
}
