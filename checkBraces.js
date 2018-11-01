const checkBraces = (input) => {
    const openers= ['(', '[', '{'];
    const closers= [')', ']', '}'];
    const opentags = []
  
    for (let i=0; i<input.length; i++){
      if (openers.includes(input.charAt(i))){
        opentags.push(input.charAt(i))
      }
      if (closers.includes(input.charAt(i))){
        if (openers.indexOf(opentags[opentags.length-1]) === closers.indexOf(input.charAt(i))){
          opentags.pop();
        } else return false
      }
    }
    return (opentags.length == 0);
  }