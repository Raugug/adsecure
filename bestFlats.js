const apiService = require('./apiService');
const  nestoria = new apiService();


const compareFlats = (a,b) => {
    if (a.size > b.size)
    return -1;
    if (a.size < b.size)
    return 1;
    if (a.size === b.size){
        if (a.price < b.price)
        return -1;
        if (a.price > b.price)
        return 1;
        if(a.price === b.price){
            if (a.rooms > b.rooms)
            return -1;
            if (a.rooms < b.rooms)
            return 1;
            return 0;
        }
    }
}
const bestflats = () =>{
    let bestFlats = [];
    for (let i=1; i<=20; i++){
        nestoria.get_page(i).then(()=>{
            if(nestoria.flats.length === 1000){
                let sorted = nestoria.flats.sort(compareFlats)
                for (let i=0; i<10; i++){
                    bestFlats.push(sorted[i]);
                }
                
                console.log(JSON.stringify(bestFlats));
                return
            }
        })
    }
}
bestflats();