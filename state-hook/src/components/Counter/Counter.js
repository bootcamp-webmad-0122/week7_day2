import { useState } from "react"

function Counter() {

    const [countValue, setCountValue] = useState(0)

    return (
        <div className="Counter">
            <h2>Counter</h2>

            <p>You clicked {countValue} times</p>

            {/* 
            <button onClick={() => setCountValue(countValue -= 1)}> - </button>
            <button onClick={() => setCountValue(countValue += 1)}> + </button> 
            */}

            <button onClick={() => setCountValue((prevCountValue) => prevCountValue - 1)}> - </button>
            <button onClick={() => setCountValue((prevCountValue) => prevCountValue + 1)}> + </button>
        </div>
    );
}

export default Counter