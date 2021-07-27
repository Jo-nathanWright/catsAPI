import { dogsService } from '../services/DogsService'
import BaseController from '../utils/BaseController'

export class DogsController extends BaseController {
  constructor() {
    super('api/dogs')
    this.router
      .get('', this.getDogs)
  }

  getDogs(req, res, next) {
    try {
      const dogs = dogsService.getDogs()
      res.send(dogs)
    } catch (error) {
      next(error)
    }
  }
}
