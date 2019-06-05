import moment from 'moment';
import uuid from 'uuid';

class Car {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.cars = [];
  }
  /**
   * 
   * @returns {object} car object
   */
  create(data) {
    const newCar = {
      id: uuid.v4(),
      success: data.success || '',
      lowPoint: data.lowPoint || '',
      takeAway: data.takeAway || '',
      createdDate: moment.now(),
      modifiedDate: moment.now()
    };
    const newCari = {
        status: 200,
        data: 
            {
            id: uuid.v4(),
            created_on: moment.now(),
            manufacturer: 'String',
            model: 'String',
            price: 'Float',
            state: 'String',
            status: "String",
            body_type: "string",
        }
    };

    this.cars.push(newCar);
    return newCar;
  }
  
  /**
   * @returns {object} returns all cars
   */
  findAll() {
    return this.cars;
  }
  
}
export default new Car();

