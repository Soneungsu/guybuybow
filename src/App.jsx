import Box from "./component/Box";
import choice from "./data/data";
import "./App.css";
import { useState } from "react";

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");
  const play = (userChoice) => {
    // console.log(userChoice);
    setUserSelect(choice[userChoice]);
    let random = randomChoice();
    setComputerSelect(random);
    const result = judgement(choice[userChoice], random);
    setUserResult(result);
    setComputerResult(
      result === "Win" ? "Lose" : result === "Lose" ? "Win" : "tie"
    );
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    // console.log(itemArray);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    // console.log(randomItem);
    const final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    // console.log("user:", user, "computer:", computer);
    // 유저와 컴퓨터 이름이 같으면 무승부
    if (user.name === computer.name) {
      return "tie";
      // 유저의 값이 "rock"이고 컴퓨터 값이 "scissors" 일 경우 유저가 이겼으므로 Win 값을 반환
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "Win" : "Lose";
    }
    //유저의 값이 "scissors"이고 컴퓨터 값이 "paper"일 경우 유저가 이겼으므로 Win 반환
    else if (user.name === "scissors") {
      return computer.name === "paper" ? "Win" : "Lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "Win" : "Lose";
    }
  };

  return (
    <div>
      <div className="wrap">
        <Box title="You" item={userSelect} result={userResult} />
        <Box title="Computer" item={computerSelect} result={computerResult} />
      </div>
      <div className="btn-wrap">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
