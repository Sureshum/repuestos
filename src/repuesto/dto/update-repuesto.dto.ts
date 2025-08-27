import { IsString, IsNumber, IsUrl, IsOptional } from 'class-validator';

export class UpdateRepuestoDto {
  @IsOptional()
  @IsString()
  readonly nombre?: string;

  @IsOptional()
  @IsString()
  readonly marca?: string;

  @IsOptional()
  @IsString()
  readonly modelo?: string;

  @IsOptional()
  @IsNumber()
  readonly año?: number;

  @IsOptional()
  @IsNumber()
  readonly precio?: number;

  @IsOptional()
  @IsUrl()
  readonly foto?: string;
}