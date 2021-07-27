import { fakePetsDb } from '../db/FakePetsDb'
// import { BadRequest } from '../utils/Errors'

class DogsService {
  getDogs() {
    return fakePetsDb.dog
  }
}

export const dogsService = new DogsService()
