import React from "react";
import Sketch from "react-p5";

export default function Canvas(props) {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(500, 500)
    p5.noStroke();
  };

  const draw = (p5) => {
    for (var x = 0; x < p5.width; x+=10) {
		for (var y = 0; y < p5.height; y+=10) {
			var c = 255 * p5.noise(0.01 * x, 0.01 * y);
			p5.fill(c);
			p5.rect(x, y, 10, 10);
		}		
  }

  return (<Sketch setup={setup} draw={draw} />);
}}