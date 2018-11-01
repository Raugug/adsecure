const highestOccurrence = (array) => {
    let elements = [];
    let counters = [];
    let result = [];
    array.forEach((element, i) =>{
      if (elements.indexOf(element) === -1){
        elements.push(element)
        counters.push(1)
      }
      else {
        counters[elements.indexOf(element)]++;
      }
    })
    let max = Math.max(...counters);
    elements.forEach((elem, index)=>{
      if (counters[index] === max)
      result.push(elem)
    })
    return result
}