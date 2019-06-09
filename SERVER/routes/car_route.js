import Car from '../controller/car_controller';

const express = require('express');

const router = express.Router();


router.get('/api/v1/car', Car.getAll);
router.post('/api/v1/car', Car.create);
router.get('/api/v1/car/:carId/', Car.getOne);
router.get('/api/v1/car?status=available', Car.getAvailableCars);
router.delete('/api/v1/car/:carId', Car.delete);
router.get('/api/v1/car?status=available&minPrice=XXXValue &maxPrice= XXXValue', Car.getFilterCars);
router.patch('/api/v1/car/:carId/status', Car.getUpdateStatus);
router.patch('/api/v1/car/:carId/price', Car.getUpdatePrice);


module.exports = router;
