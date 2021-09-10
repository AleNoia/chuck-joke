// ANCHOR Imports

// ANCHOR Hook
// Hook criado para dividir o nome do personagem para o estado
export default function UseBreakName(nameCharacter) {
  const arrayName = nameCharacter.split(" ");
  const [firstName, ...lastName] = arrayName;
  const newLastName = `${lastName.join(" ")}`;
  const newName = { firstName, newLastName };
  return newName;
}
