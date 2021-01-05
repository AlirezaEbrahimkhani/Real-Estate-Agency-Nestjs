import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseController } from './house.controller';
import { HouseSchema } from './house.model';
import { HouseService } from './house.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'House', schema: HouseSchema }]),
  ],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule {}
