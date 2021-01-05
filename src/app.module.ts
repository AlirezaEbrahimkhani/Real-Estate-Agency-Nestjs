import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HouseModule } from './house/house.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hamidreza:hamidreza123@home.lhb4w.mongodb.net/Home?retryWrites=true&w=majority',
    ),
    HouseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
