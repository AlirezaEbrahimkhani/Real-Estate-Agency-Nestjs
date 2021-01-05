import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { House } from './house.model';

@Injectable()
export class HouseService {
  constructor(
    @InjectModel('House') private readonly houseModel: Model<House>,
  ) {}

  async insertHouse(
    name: string,
    desc: string,
    price: number,
  ): Promise<string> {
    const newHouse = new this.houseModel({
      name,
      description: desc,
      price,
    });
    const result = await newHouse.save();
    return result.id as string;
  }

  async getAllHouses() {
    const houses = await this.houseModel.find().exec();
    return houses;
  }

  async getSingleHouse(houseID) {
    const house = await this.houseModel.findById(houseID);
    return house;
  }

  async deleteProduct(houseID) {
    const result = await this.houseModel.deleteOne({ _id: houseID }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find product.');
    }
  }

  async updateProduct(
    houseId: string,
    name: string,
    desc: string,
    price: number,
  ) {
    const updatedHouse = await this.getSingleHouse(houseId);
    if (name) {
      updatedHouse.name = name;
    }
    if (desc) {
      updatedHouse.description = desc;
    }
    if (price) {
      updatedHouse.price = price;
    }
    updatedHouse.save();
  }

  private async findHouse(id: string): Promise<House> {
    let house;
    try {
      house = await this.houseModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find house.');
    }
    if (!house) {
      throw new NotFoundException('Could not find house.');
    }
    return house;
  }
}
