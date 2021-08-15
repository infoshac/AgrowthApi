import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateStartupDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
  fullName: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Por favor, preencha o email' })
  @IsEmail({}, { message: 'Por favor, insira um email válido.' })
  email: string;
}
