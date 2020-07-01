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
