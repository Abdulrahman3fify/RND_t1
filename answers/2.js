for(let i=0; i< array.length - 1; i ++) {
	if(array[i].amount > array[i + 1].amount && array[i].amount > max){
	max = array[i].amount
  }
}
