import { Client, logger } from "camunda-external-task-client-js";
import { baseUrl } from "./config";

const client = new Client({ baseUrl: baseUrl, use: logger });

export default client;
