// Data Normalization to improve perofmance
// Generated array of colors object with unique values (Red, Green, Blue)
export const generateColorPaletteWithUniqueColors = () => {
	let colors = [];
	for (let r = 0; r < 256; r += 8) {
		for (let g = 128; g < 256; g += 4) {
			for (let b = 0; b < 128; b += 4) {
				colors.push({
					red: r,
					green: g,
					blue: b,
				});
			}
		}
	}
	return colors;
};
