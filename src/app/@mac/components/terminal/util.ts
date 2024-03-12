import { responses } from "../../data/commands";

export const getResponse = (command: string[]) => {
  let response: string | undefined;
  if (command.length == 1) {
    response = responses[command[0]];
  } else if (command.length == 2) {
    if (responses[command[0]]) {
      response = responses[command[0]][command[1]];
    }
  }
  if (response == undefined) {
    response = "command not found<br /><br />" + responses.help;
  }

  return response;
};
