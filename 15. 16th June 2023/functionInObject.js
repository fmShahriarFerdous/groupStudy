const address = {
    house : 84,
    road : 7,
    block : "B",
    showMyAdd: function() 
    {
    console.log("house-->", this.house,"road-->",this.road,"block-->",this.block);
    }

    //Arrow Function doesn't support "this" keyword.
    // showMyAdd : () => 
    // {
    // console.log("house-->", address.house,"road-->",address.road,"block-->",address.block);
    // }
}
address.showMyAdd();

console.log(address.showMyAdd);// without "parenthesis" no function will be called. Just it can console the function name


