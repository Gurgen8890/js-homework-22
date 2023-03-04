class Year {
    constructor(year){   
        if (year === 0) {
            this.year= new Date(0)
        }
        else if (!year) {
            this.year = new Date()
        }else if (year !== undefined && year !== 0){
            this.year = year
        }
    }
}

class Month extends Year {
    constructor(year,month){
        super(year);
        this.month = month;
        const newLocal = `${this.month % 12}`;        
        const  loc = parseInt(this.month / 12);
        this.year = this.year + loc;
        const mon = loc * 12;
        this.month =  this.month - mon        

    }
}


class Day extends Month {
    constructor(year,month,day){
        super(year,month)
        this.day = day;
        const dt = parseInt(this.day / 30);
        const dt1 = `${this.day % 30}`
        const dt2 = dt * 30;
        this.day = this.day - dt2
         
    }
}

class MyDate extends Day {
    constructor(year,month,day){
        super(year,month,day)
    }
    
}


let m = new MyDate(2022,18,65)
console.log(m);