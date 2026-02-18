import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateOrderDto {

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @Min(0)
  amount: number;
}
