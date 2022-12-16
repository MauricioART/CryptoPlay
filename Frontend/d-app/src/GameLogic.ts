export type Choice = "rock" | "paper" | "scissors";
export type Outcome = "win" | "loose" | "draw";

export function computerChoice() {
  const temp = Math.floor(Math.random() * 3);
  switch (temp) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "rock";
  }
}

export function playGame(choice: Choice, computer: Choice): Outcome {
  if (choice === computer) return "draw";
  if (
    (choice === "paper" && computer === "rock") ||
    (choice === "scissors" && computer === "paper") ||
    (choice === "rock" && computer === "scissors")
  ) {
    return "win";
  }

  return "loose";
}
