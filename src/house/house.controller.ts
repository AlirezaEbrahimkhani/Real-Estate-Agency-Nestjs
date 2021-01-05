import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { HouseService } from './house.service';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post()
  async addProduct(
    @Body('name') houseName: string,
    @Body('description') houseDesc: string,
    @Body('price') housePrice: number,
  ) {
    const generatedId = await this.houseService.insertHouse(
      houseName,
      houseDesc,
      housePrice,
    );
    return { id: generatedId };
  }

  @Get(':id')
  async getSingleHouse(@Param('id') houseId: string) {
    const house = await this.houseService.getSingleHouse(houseId);
    return house;
  }

  @Get()
  async getAllHouse() {
    const houses = await this.houseService.getAllHouses();
    return houses;
  }

  @Delete(':id')
  async removeHouse(@Param('id') houseID: string) {
    await this.houseService.deleteHouse(houseID);
    return null;
  }

  @Patch(':id')
  async updateHouse(
    @Param('id') houseId: string,
    @Body('name') houseName: string,
    @Body('description') houseDesc: string,
    @Body('price') housePrice: number,
  ) {
    await this.houseService.updateHouse(
      houseId,
      houseName,
      houseDesc,
      housePrice,
    );
    return null;
  }
}
