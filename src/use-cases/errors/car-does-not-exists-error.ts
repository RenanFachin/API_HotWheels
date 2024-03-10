export class CarDoesNotExistsError extends Error {
  constructor(){
    super('Car does not exists')
  }
}