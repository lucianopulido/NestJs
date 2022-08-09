import {Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            marca: 'Toyota',
            modelo: 'Corolla'
        },
        {
            id: 2,
            marca: 'Honda',
            modelo: 'Civic'
        },
        {
            id: 3,
            marca: 'Jeep',
            modelo: 'Cherokee'
        }
    ]

    getAllCars() {
        return this.cars
    }

    getCarById(id: number) {
        const car = this.cars.find(car => car.id === id)

        if (!car) {
            throw new NotFoundException(`Car With id ${id} not found`)
        }

        return car
    }
}
