import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ModelType } from '@typegoose/typegoose/lib/types';
import {} from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema } from './post.model';
import { Crud } from 'nestjs-mongoose-crud';

class CreatePostDto {
  @ApiProperty({ description: '新增标题', example: '帖子标题' })
  @IsNotEmpty({ message: '请输入标题' })
  title: string;
  @ApiProperty({ description: '新增内容', example: '帖子内容' })
  content: string;
}
@Crud({
  model: PostSchema,
  routes: {
    find: {
      decorators: [ApiOperation({ summary: '帖子列表' })],
    },
    create: {
      dto: CreatePostDto,
    },
  },
})
@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  constructor(
    @InjectModel(PostSchema) private readonly model: ModelType<PostSchema>,
  ) {}
}
