import { Handler } from "../Camunda";
import { ExternalTask } from "../ExternalTask";

const handler: Handler = async ({ task, taskService }) => {
  await taskService.handleFailure(task, {
    errorMessage: "some failure message",
    errorDetails: "some details",
    retries: 1,
    retryTimeout: 1000,
  });
};

export default new ExternalTask("failure", handler);
