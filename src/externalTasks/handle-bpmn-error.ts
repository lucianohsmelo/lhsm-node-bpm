import { Handler, Variables } from "../Camunda";
import { ExternalTask } from "../ExternalTask";

const handler: Handler = async ({ task, taskService }) => {
  const variables = new Variables().set("date", new Date());

  await taskService.handleBpmnError(
    task,
    "BPMNError_Code",
    "Error message",
    variables
  );
};

export default new ExternalTask("bpmn-error", handler);
