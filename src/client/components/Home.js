import React /*,{ useState }*/ from "react";

export default function Home() {
  // const [counter, setCounter] = useState(0)

  return (
    <div>
      <div>
        {/* {counter} */}
        home
      </div>
      {/* <button onClick={() => setCounter((prevState) => prevState + 1)}>Press me!</button> */}
      <button onClick={() => console.log('aa')}>Press me!</button>
    </div>
  );
}
