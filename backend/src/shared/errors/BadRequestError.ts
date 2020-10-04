export default class BadRequestError extends Error {
  public readonly message: string
  public readonly statusCode: 400 = 400

  constructor (message: string) {
    super()
    this.message = message
  }
}
