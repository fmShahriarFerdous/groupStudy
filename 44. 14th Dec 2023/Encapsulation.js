/* Encapsulation */

class Player {
    #name;
    #birthday;
    constructor(name, birthday, monthlySalary, noOfMonths) {
        this.#name = name;
        this.#birthday = birthday;
        this.monthlySalary = monthlySalary;
        this.noOfMonths = noOfMonths;
    }

    calculate_age() {
        const diff_ms = Date.now() - new Date(this.#birthday).getTime();
        const age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    getSalary() {
        return (this.monthlySalary * this.noOfMonths).toLocaleString();
    }
}

const maxwell = new Player("maxwell", "1980-01-01", 200000, 12);
console.log(maxwell.getSalary());
console.log(maxwell.calculate_age());