# ansi

## Usage
```Javascript
const ANSI = require('./ansi.js');
const ansi = new ANSI(process.stdout);
```

### .moveTo(x, y)
Moves the cursor to the position specified by `(x, y)`. **These values are 1-based (The top left corner is (1, 1))**

### .up(y)
Moves the cursor up `y` units. Does not have any effect if the cursor is at the edge of the screen.

### .down(y)
Moves the cursor down `y` units. Does not have any effect if the cursor is at the edge of the screen.

### .forward(x)
Moves the cursor to the right `x` units. Does not have any effect if the cursor is at the edge of the screen.

### .backward(x)
Moves the cursor to the left `x` units. Does not have any effect if the cursor is at the edge of the screen.

### .save()
Saves the cursor position

### .restore()
Restores the cursor position

### .eraseLine()
Erases the contents of the current line the cursor is on

### .eraseDisplay()
Erases the contents of the whole display

### .color(color, bg)
Sets the color of the terminal at the position of the cursor. Holds its effect until the colors are reset. Either argument can be omitted to use only one or the other.

| Colors  |
-----------
| Black   |
| Red     |
| Green   |
| Yellow  |
| Blue    |
| Magenta |
| Cyan    |
| White   |

### .reset()
Resets the terminal colors to the default

-----

### .write(text)
Writes `text` directly to the given stream
