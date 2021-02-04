var tasks=[];
let addTask = ( name, intervalMS, immediate, func) => {
	!immediate ? setInterval(func,intervalMS) : func();
  tasks.push({name,intervalMS,immediate,func});
  return name;
}
let removeTask = name => {
	let taskIndex;
	let taskObj = tasks.filter((obj, index) => {
  if(obj.name === name){
  taskIndex = index
  return obj}
})
tasks.splice(taskIndex, 1);
  return taskObj;
}
var checkTaskExists = name => {
let isExist;
	for(let i=0; i <= tasks.length - 1; i++)
  {if(tasks[i].name === name) 
  {
  isExist = true;
  return isExist;
  }
  }
  return false;
}

addTask('heyyy', 3000, false, () =>console.log(checkTaskExists("heyyy")))
removeTask("heyyy")
checkTaskExists("heyyy");
