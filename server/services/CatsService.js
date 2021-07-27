import { fakePetsDb } from '../db/FakePetsDb'

class CatsService {
  getCats() {
    return fakePetsDb.cat
  }
}

export const catsService = new CatsService()
