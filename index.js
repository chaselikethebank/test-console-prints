const colorCode = {
    //style
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    underline: '\x1b[4m',
    inverse: '\x1b[7m',
    hidden: '\x1b[8m',
    strikethrough: '\x1b[9m',
  //text color
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
  // bg color
    bgBlack: '\x1b[40m',
    bgRed: '\x1b[41m',
    bgGreen: '\x1b[42m',
    bgYellow: '\x1b[43m',
    bgBlue: '\x1b[44m',
    bgMagenta: '\x1b[45m',
    bgCyan: '\x1b[46m',
    bgWhite: '\x1b[47m'
  };
  
  function printColoredText(style, color, bgColor, text) {
    const resetCode = colorCode.reset;
    const styleCode = colorCode[style] || '';
  
    if (colorCode[color] && colorCode[bgColor]) {
      console.log(styleCode + colorCode[color] + colorCode[bgColor] + text + resetCode);
    } else {
      console.log('Invalid style, color, or background color.');
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  //audition your flavor of print: 
  const textStyle = 'italic';
  const textColor = 'cyan';
  const bgColor = 'bgBlack';
  const bgSub = bgColor.substring(2)
  const text = `This text will be printed with ${capitalizeFirstLetter(textStyle)} style, ${capitalizeFirstLetter(textColor)} text, on a ${bgSub} background.`;
  printColoredText(textStyle, textColor, bgColor, text);
  