/* Encapsulation */

class BetterArray {

    constructor() {
        this.items = [];
    }

    addItems(item) {
       this.items = [...this.items, ...item];
    }

    showItems() {
        return [...this.items];
        // console.log(this.items);
    }

    removeItems(itemToDelete) {
        return this.items.filter((item) => item !== itemToDelete);
    }
}

const array = new BetterArray();
array.addItems(["Bangladesh", "india", "Pakistan"]);
// array.addItems("Bangladesh");

console.log(array.showItems());
console.log(array.removeItems("india"));