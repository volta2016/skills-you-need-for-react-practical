//We can also write all of the exports at the end
//of the file instead of next to each variable or function
const name = "Kyo";
const age = "27";

function getName() {
  return `Mi nombre es: ${name} mi edad es: ${age}`;
}

export { name, age };
export default getName;
