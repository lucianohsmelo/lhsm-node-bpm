import { Client, Handler, SubscribeOptions } from "./Camunda";

import { SubscribeError } from "./errors";

export class ExternalTask {
  constructor(
    private readonly topic: string,
    private readonly handler: Handler,
    private readonly subscribeOptions: SubscribeOptions = {}
  ) {}

  public subscribe = (client: Client) => {
    try {
      client.subscribe(this.topic, this.subscribeOptions, this.handler);
    } catch (error) {
      let errMessage = `Could not subscribe to topic "${this.topic}"`;
      if (error instanceof Error) {
        errMessage = error.message;
      }

      throw new SubscribeError(errMessage);
    }
  };
}
