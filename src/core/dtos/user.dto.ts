
import { IsString, IsNotEmpty, IsEmail, IsDateString, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { AddressDto } from './address.dto';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  phone: string;

  @ValidateNested()
  @Type(() => AddressDto)
  @IsOptional()
  address: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  gender: string;

  @IsDateString()
  @IsOptional()
  birthDate: string;
}

export class UpdateAuthorDto extends PartialType(CreateUserDto) {}