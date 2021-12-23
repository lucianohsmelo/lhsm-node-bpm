import { ExternalTask } from "./ExternalTask";
import { readdirSync } from "fs";
import { externalTasksDir } from "./config";
import client from "./Client";

readdirSync(externalTasksDir).forEach((task) => {
  const module = require(`${externalTasksDir}/${task}`);
  const externalTask: ExternalTask = module.default;

  if (module.default instanceof ExternalTask) {
    externalTask.subscribe(client);
  }
});
