import { useState } from "react";


function ProgressBar() {

    const [progress, setProgress] = useState<number>(0);

    const incrementProgress = (): void => {

        if (progress >= 100) {
            return;
        }
        setProgress(prev => prev + 10);
    }

    const decrementProgress = (): void => {

        if (progress <= 0) {
            return;
        }
        setProgress(prev => prev - 10)
    }

    const getBarColor = (): string => {

        if (progress < 40) {
            return "red";
        }
        else if (progress >= 40 && progress <= 79) {
            return "orange";
        }
        else {
            return "green";
        }
    }


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                margin: "50px auto",
                gap: 10
            }}
        >
            <h1>Progress Bar</h1>
            <div
                style={{
                    position: "relative",
                    height: "25px",
                    borderRadius: "8px",
                    backgroundColor: "#ddd"
                }}
            >
                <div
                    id="testBgColor"
                    style={{
                        position: "absolute",
                        height: "100%",
                        width: `${progress}%`,
                        borderRadius: "8px",
                        backgroundColor: getBarColor(),
                    }}
                >
                </div>
                <span
                    style={{
                        position: "absolute",
                        top: "15%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "#fff",
                        fontWeight: "bold"
                    }}
                >
                    {progress}%
                </span>
            </div>

            <div
                style={{
                    display: "flex",
                    gap: 10,
                }}
            >
                <button onClick={decrementProgress}>
                    -10%
                </button>

                <button onClick={incrementProgress}>
                    +10%
                </button>
            </div>
        </div>
    );
}


export default ProgressBar;