const tasks = ['task1'];

// const addTask = (task) => tasks.push(task);

// addTask('task2');
// console.log(tasks);

// const deleteName = (taskName) => tasks.shift(tasks.indexOf(taskName));

// deleteName('task1');
// console.log(tasks);
 
// addTask("task3");
// addTask("task4");
// addTask("task5");
// console.log(tasks);

// const transferName = function(taskName) {
//     const res = tasks.shift(tasks.indexOf(taskName));
//     return tasks.unshift(res);
// } 

// transferName('task3');
// console.log(tasks);


function Add(task) {
    tasks.push(task);
}

function Remove(task) {
    const index = tasks.indexOf(task);
    if (index === -1) {
        return;
    }
    tasks.splice(index, 1);
}

function Prioritize(task) {
    const index = tasks.indexOf(task);
    if (index === -1) {
      return;
    }
    const oldtask = tasks[index];
    tasks.splice(oldtask, 1);
    tasks.unshift(oldtask);
}

Add('task 2');
Add("task 3");
console.log(tasks);

Remove('task 2');
console.log(tasks);

Prioritize('task 4');
console.log(tasks);
