// Quistion 32
let current_users = ["Ahsan malik","saniya","saba","zain","zara"]

// array of new users
let new_users = ["Arman malik","haniya","saba","zainab","zara"]

// loop through new users to cheack for username availblity

new_users.forEach(new_one_user =>{

    //making a condition for username already exsist and save in our condition variable

    let our_condition =current_users.some(current_one_user =>current_one_user.toLowerCase() === new_one_user.toLowerCase())
 if(our_condition){
    console.log(`sorry${new_one_user}is already taken!`)

    }else{
        console.log(`this userName is ${new_one_user} is available`)
    }

})
