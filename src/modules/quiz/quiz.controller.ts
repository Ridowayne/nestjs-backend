import { Controller, Get } from '@nestjs/common';

@Controller('quiz')
export class QuizController {
  @Get('/')
  getAllquiz() {
    return [1, 2, 3, 4];
  }
}
