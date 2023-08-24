const getvalue = () => {
    let str;
   setTimeout(() => {
        str = "JavaScript is a synchronous language by default";
        console.log(str);
   }, 4000)
   console.log("execute before str printing");
   console.log(str);
}

getvalue();