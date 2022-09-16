import { ApiProperty } from '@nestjs/swagger';
import { prop } from '@typegoose/typegoose';

export class Post {
  @ApiProperty({ description: '帖子标题', example: '标题' })
  @prop()
  title: string;

  @ApiProperty({ description: '帖子内容', example: '内容' })
  @prop()
  content: string;
}
