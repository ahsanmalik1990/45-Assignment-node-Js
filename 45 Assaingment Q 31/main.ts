// Quistion 31
let userName =["ahsan","Saniya","Admin","Miss zahida","Narjis"]

userName = []

if(userName.length === 0) {
    console.log("your array is empty we need to find some users!")
}else{
    // using foreach loop on aaray
    userName.forEach(oneUser => {
        if(oneUser==="admin"){
            console.log(`Hello ${oneUser},would you like to see a status`);
        }else{
            console.log(`Hello ${oneUser},thank u for logging in again`)

        }
        
    });
}
