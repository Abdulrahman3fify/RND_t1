const value = array => {
let obj; 
for (let i=0; i < array.length ;i++){
obj[array[i].platform] = obj[array[i].platform] ? obj[array[i].platform].push(array[i]) :array[i] ;
}
};
