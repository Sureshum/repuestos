import { IsString, IsNumber, IsUrl } from 'class-validator';

export class CreateRepuestoDto {
  @IsString()
  readonly nombre: string;

  @IsString()
  readonly marca: string;

  @IsString()
  readonly modelo: string;

  @IsNumber()
  readonly año: number;

  @IsNumber()
  readonly precio: number;

  @IsUrl()
  readonly foto: string;
}