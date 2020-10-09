class ErrorHandlerService {
  constructor() {
    this.errorsInSession = [];
  }

  handleHttpErrorMessage(error, errorList) {
    let message;

    if (error.response) {
      message = error.response.data.message;
    }

    message = 'Unknown Error, please verify your connection';

    if (errorList.find((errorMessage) => errorMessage === message)) return;

    errorList.push(message);

    this.errorsInSession.push(message);
  }
}

export default new ErrorHandlerService();
