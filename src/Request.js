import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
const Request = () => {
  const [People, setPeople] = useState([]);
  useEffect(() => {
    alanBtn({
      key: "b27e9005ab11a695031e484fd000264d2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "getPeople") {
          // Call the client code that will react to the received command
          setPeople(commandData.data);
          console.log(commandData.data);
        }
      },
    });
  }, []);
  return (
    <div>
      {People.map((People) => (
        <li key={People.name}>
          {People.name}-{People.service}-{People.availability}
        </li>
      ))}
    </div>
  );
};

export default Request;
