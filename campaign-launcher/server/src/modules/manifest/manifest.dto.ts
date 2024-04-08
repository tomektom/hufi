import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNumber, IsDate } from 'class-validator';

export class ManifestUploadRequestDto {
  @ApiProperty()
  @IsNumber()
  chainId: number;

  @ApiProperty()
  @IsString()
  requesterAddress: string;

  @ApiProperty()
  @IsString()
  exchangeName: string;

  @ApiProperty()
  @IsString()
  tokenA: string;

  @ApiProperty()
  @IsString()
  tokenB: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @ApiProperty()
  @IsNumber()
  duration: number;

  @ApiProperty()
  @IsNumber()
  fundAmount: number;
}

export class ManifestUploadResponseDto {
  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsString()
  hash: string;
}
