import canvasTxt from "canvas-txt";
import { useEffect, useRef } from "react";
import "./App.css";

const mainText =
  "Cookie gingerbread pudding gummies dessert fruitcake gummi bears. Chocolate cotton candy sweet roll danish tart ice cream tart chupa chups. Halvah pie carrot cake jelly beans danish jelly jelly-o fruitcake.";
const bookText = "Dans la vallée dana lalalala lalalala";
const authorText = "Damien Sauvagère";
function App() {
  const canvasRef = useRef(null);
  const handleExport = () => {
    console.log("handleExport");
  };

  const splittedText = mainText.match(/.{1,30}/g);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;

    context.font = "300px serif";
    context.fillStyle = "salmon";
    context.fillText("“", 100, 250);

    context.fillStyle = "grey";
    canvasTxt.fontSize = 45;
    canvasTxt.font = "Belleza";
    canvasTxt.fontStyle = "";
    canvasTxt.lineHeight = 55;
    const textBlock = canvasTxt.drawText(context, mainText, 100, 150, 880, 400);

    const lineHeight = 250 + textBlock.height + 20;
    context.strokeStyle = "darkgray";
    context.beginPath();
    context.moveTo(canvas.width / 2 - 80, lineHeight);
    context.lineTo(canvas.width / 2 + 80, lineHeight);
    context.stroke();

    context.fillStyle = "black";
    canvasTxt.fontSize = 30;
    canvasTxt.font = "Montserrat";
    canvasTxt.fontStyle = "italic";
    canvasTxt.lineHeight = 40;
    const bookBlock = canvasTxt.drawText(
      context,
      bookText,
      100,
      lineHeight - 125,
      880,
      400
    );

    context.fillStyle = "black";
    canvasTxt.fontSize = 30;
    canvasTxt.font = "Montserrat";
    canvasTxt.fontStyle = "italic";
    canvasTxt.lineHeight = 40;
    canvasTxt.drawText(context, authorText, 100, lineHeight - 125, 880, 400);

    // context.fillText("“Hello World”", 400, 200);
    // context.fillText(`${splittedText}`, canvas.width / 4, canvas.height / 2);
  }, []);

  return (
    <div className="App">
      <canvas id="canva-draw" ref={canvasRef} />
      <button onClick={() => handleExport()}>Export</button>
    </div>
  );
}

export default App;
