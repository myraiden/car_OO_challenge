
class Vehicle{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }

    toString(){
        return `You have a ${this.make} ${this.model} from ${this.year}.`
    }

    honk(){
        return '嘟! (Beep!)'
    }

}

class Car extends Vehicle{
    constructor(make,model,year,numWheels=4){
        super(make,model,year)
        this.numWheels=numWheels
    }
}

class Motorcycle extends Vehicle{
    constructor(make,model,year,numWheels=2){
        super(make,model,year)
        this.numWheels=numWheels
    }

    revEngine(){
        return 'VROOM!!!'
    }
}

class Garage{
    constructor(numVehicles=1){
        this.numVehicles=numVehicles;
        this.vehicles=[];
    }


    add(newVehicle){
        if(newVehicle instanceof Vehicle){
            if(this.vehicles.length>=this.numVehicles){
                return "Sorry, we're full."
            }else{
                return this.vehicles.push(newVehicle);
            }
        }else{
            return "Only vehicles allowed in here, Bub!"
        }
    }
}