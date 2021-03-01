export const Filter = ({data}) => {
  return (
    <>
    <h2>Filter()</h2>
    <ul>
        {data
          .filter((programer) => !programer.startsWith("J"))
          .map((programer, index) => (
            <li key={index}>{programer}</li>
          ))}
      </ul>
    </>
  )
}