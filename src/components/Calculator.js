import { useState } from "react";
import { evaluate } from "mathjs";

export default function Calculator() {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const clearInput = () => {
        setInput("");
    };

    const backspace = () => {
        setInput(input.slice(0, -1));
    };

    const calculate = () => {
        try {
            setInput(evaluate(input).toString());
        } catch {
            setInput("Error");
        }
    };

    return (
        <div style={{
            maxWidth: "300px",
            margin: "50px auto",
            textAlign: "center",
            border: "2px solid #333",
            borderRadius: "10px",
            padding: "20px",
            background: "#fff"
        }}>
            <h2>React Calculator</h2>
            <input
                type="text"
                value={input}
                readOnly
                style={{ width: "100%", height: "40px", marginBottom: "10px", textAlign: "right", fontSize: "18px" }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px" }}>
                {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "+", "="].map((btn, i) => (
                    <button
                        key={i}
                        onClick={() => btn === "=" ? calculate() : handleClick(btn)}
                        style={{ padding: "15px", fontSize: "16px" }}
                    >
                        {btn}
                    </button>
                ))}
                <button
                    onClick={backspace}
                    style={{ gridColumn: "span 2", padding: "15px", fontSize: "16px", background: "orange", color: "#fff" }}
                >
                    ⬅ Back
                </button>
                <button
                    onClick={clearInput}
                    style={{ gridColumn: "span 2", padding: "15px", fontSize: "16px", background: "tomato", color: "#fff" }}
                >
                    Clear
                </button>
            </div>
        </div>
    );
}
