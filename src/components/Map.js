

export const Map = ({data}) => {
  return (
    <>
      <h2>map()</h2>
      <ul>
        {data.map((programer, index) => (
          <li key={index}>{programer}</li>
        ))}
      </ul>

    </>

  )

}