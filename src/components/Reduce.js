export const Reduce = ({data}) => {
  console.log(data)
  //const programers = ["Robert", "Joe", "Jane"];
  return (
    <>
      <h2>reduce()</h2>
      <ul>
        {data
          .reduce((acc, programer) => {
            if (!programer.startsWith("R")) {
              return acc.concat(programer);
            } else {
              return acc;
            }
          }, [])
          .map((programmer, index) => (
            <li key={index}>{programmer}</li>
          ))}
      </ul>
    </>
  );
};
