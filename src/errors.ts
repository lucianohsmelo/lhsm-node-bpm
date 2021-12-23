export class SubscribeError extends Error {
  constructor(public message: string) {
    super(message);
  }
}
