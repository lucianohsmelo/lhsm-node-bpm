import { Handler, Variables } from "../Camunda";
import { ExternalTask } from "../ExternalTask";

const handler: Handler = async ({ task, taskService }) => {
  const processVariables = new Variables().set("name", "value");
  processVariables.setAll(task.variables.getAll());
  await taskService.complete(task, processVariables);
};

export default new ExternalTask("my-task", handler);
