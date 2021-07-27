import { fakePetsDb } from '../db/FakePetsDb'
import { BadRequest } from '../utils/Errors'

class DogsService {
  getDogs() {
    return fakePetsDb.dogs
  }
}

export const dogsService = new DogsService()
