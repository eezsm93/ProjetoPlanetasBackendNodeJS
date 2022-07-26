import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

class PlanetRules {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  surfaceArea: number;

  @IsNotEmpty()
  @IsNumber()
  sunDistance: number;

  @IsNotEmpty()
  @IsNumber()
  durationDay: number;

  @IsNotEmpty()
  @IsNumber()
  gravity: number;
}

export { PlanetRules };
