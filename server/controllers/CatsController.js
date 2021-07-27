import { catsService } from '../services/CatsService'
import BaseController from '../utils/BaseController'

export class CatsController extends BaseController {
  constructor() {
    super('api/cats')
    this.router
      .get('', this.getCats)
  }

  getCats(req, res, next) {
    try {
      const cats = catsService.getCats()
      res.send(cats)
    } catch (error) {
      next(error)
    }
  }
}
