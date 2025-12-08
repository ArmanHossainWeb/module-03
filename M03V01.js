// const count = (amount) => {
//   let count = 2;

//   let counter = count + amount;
//   return counter;
// }

// console.log(count(2));
// console.log(count(5));



const counter = {
    count : 0,

    add(amount){
        this.count = this.count + amount;
    },

    print(){
        console.log(this.count)
    },

}

counter.add(2)
counter.add(3)

counter.print()