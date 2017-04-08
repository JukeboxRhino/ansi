class ANSI {
  constructor(out) {
    this.o = out;
    this.escape = '\x1b[';
    this.colors = {
  		'black': [30, 40],
  		'red': [31, 41],
  		'green': [32, 42],
  		'yellow': [33, 43],
  		'blue': [34, 44],
  		'magenta': [35, 45],
  		'cyan': [36, 46],
  		'white': [37, 47]
  	}
    this.columns = out.columns;
    this.rows = out.rows;
    out.on('resize', () => {
      this.columns = out.columns;
      this.rows = out.rows;
    });
  }
  checkBounds(x, y) {
    let withinBounds = true;
    if(x) {
      if(x < 1 || x > this.columns) {
        withinBounds = false;
      }
    }
    if(y) {
      if(y < 1 || y > this.rows) {
        withinBounds = false;
      }
    }
    return withinBounds;
  }
	moveTo(x, y) {
		if(this.checkBounds(x, y)){
			this.o.write(this.escape + x + ';' + y + 'H');
		}
	}
	up(y) {
		if(this.checkBounds(1, y)){
			this.o.write(this.escape + y + 'A');
		}
	}
	down(y) {
		if(this.checkBounds(1, y)){
			this.o.write(this.escape + y + 'B');
		}
	}
	forward(x) {
		if(this.checkBounds(x, 1)){
			this.o.write(this.escape + x + 'C');
		}
	}
	backward(x){
		if(this.checkBounds(x, 1)){
			this.o.write(this.escape + x + 'D');
		}
	}
	save() {
		this.o.write(this.escape + 's');
	}
	restore() {
		this.o.write(this.escape + 'u');
	}
	eraseDisplay() {
		this.o.write(this.escape + '2J');
	}
	eraseLine() {
		this.o.write(this.escape + '2K');
	}
	color(color, bg) {
		if(this.colors.hasOwnProperty(color) && this.colors.hasOwnProperty(bg)){
			this.o.write(this.escape + this.colors[color][0] + ';' + this.colors[bg][1] + 'm');
		}else if(this.colors.hasOwnProperty(color)){
			this.o.write(this.escape + this.colors[color][0] + 'm');
		}else if(this.colors.hasOwnProperty(bg)){
			this.o.write(this.escape + this.colors[bg][1] + 'm');
		}
	}
	reset() {
		this.o.write(this.escape + '0m');
	}
  write(text) {
    this.o.write(text);
  }
}

module.exports = ANSI;
