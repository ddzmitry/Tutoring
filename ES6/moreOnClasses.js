class Task {
    constructor(id) {
        this.id = id;
      }
    Task(ID) { return new Task(ID) }
	outputTask() { console.log(this.id); }
}


let t = new Task(55)
t.Task(44)
t.outputTask()
