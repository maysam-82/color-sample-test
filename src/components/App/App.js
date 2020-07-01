import React from 'react';
import { generateColorPaletteWithUniqueColors } from './appUtils';
class App extends React.Component {
	constructor() {
		super();
		// Generate colors array with unique values before mounting of DOM in constructor to normalize data.
		this.colorPalette = generateColorPaletteWithUniqueColors();
		// Gets canvas ref from DOM
		this.canvasRef = React.createRef();
	}

	componentDidMount() {
		this.generateImageTile(32);
	}

	// Creates image inside canvas according to step size (32px)/
	// Using canvas will help to have better
	generateImageTile = (tileSize) => {
		const htmlCanvas = this.canvasRef.current;
		const numberOfColumns = htmlCanvas.width / tileSize;
		const numberOfRows = htmlCanvas.height / tileSize;
		const context = htmlCanvas.getContext('2d');
		let colorPletteIndex = 0;

		// Generates tiles with relevant step size
		for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
			for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
				// Most browsers support `createImageData`.
				const imageData = context.createImageData(tileSize, tileSize);
				// Iterate through every pixel of tile
				for (let index = 0; index < imageData.data.length; index += 4) {
					const { red, green, blue } = this.colorPalette[
						colorPletteIndex + index / 4
					];
					// Red;
					imageData.data[index + 0] = red;
					// Green
					imageData.data[index + 1] = green;
					// Blue
					imageData.data[index + 2] = blue;
					// Alpha Channel
					imageData.data[index + 3] = 255;
				}
				colorPletteIndex = tileSize * tileSize + colorPletteIndex;
				// Most browsers support `putImageData` method
				context.putImageData(
					imageData,
					columnIndex * tileSize,
					rowIndex * tileSize
				);
			}
		}
	};

	render() {
		return (
			<div className="app-container">
				<div className="canvas-container">
					<canvas
						id="imageCanvas"
						width="256"
						height="128"
						ref={this.canvasRef}
					/>
				</div>
			</div>
		);
	}
}

export default App;
