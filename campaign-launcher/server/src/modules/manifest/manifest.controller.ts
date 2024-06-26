import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import {
  ManifestUploadRequestDto,
  ManifestUploadResponseDto,
} from './manifest.dto';
import { ManifestService } from './manifest.service';

@ApiTags('manifest')
@Controller('manifest')
export class ManifestController {
  constructor(private manifestService: ManifestService) {}

  @Post('/upload')
  @ApiOperation({ summary: 'Upload manifest data' })
  @ApiResponse({
    status: 201,
    description: 'Manifest uploaded',
    type: ManifestUploadResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async uploadManifest(@Body() data: ManifestUploadRequestDto) {
    return this.manifestService.uploadManifest(data);
  }
}
