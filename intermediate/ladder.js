let ladder = {
    steps:0,
    up(){
        this.steps++;
        return this;
    },
    down(){
        this.steps--;
        return this;
    },
    showsteps(){
        console.log(this.steps)
        return this;
    }
}

ladder.up().down().showsteps().up().up().showsteps()