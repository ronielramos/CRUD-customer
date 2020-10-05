export default class InternalServerError extends Error {
  public readonly message: string
  public readonly statusCode: 500 = 500

  constructor (message: string) {
    super()
    this.message = message
  }
}
