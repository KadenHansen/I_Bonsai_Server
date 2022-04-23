const db = require("../models")

db.Event.create([{
        Description: "Moving",
        DatePotted: "2021-04-23",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24B9wA6dhsDJb0LDlnv2tFoYOe-0KuDkTVhXCya-hMxN-k7QO9daBZ9bhI74_9qBsMAM&usqp=CAU",
        Notes: "Moved into more direct sunlight"
    },
    {
        Description: "Wiring",
        DatePotted: "2021-04-23",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24B9wA6dhsDJb0LDlnv2tFoYOe-0KuDkTVhXCya-hMxN-k7QO9daBZ9bhI74_9qBsMAM&usqp=CAU",
        Notes: "Rewired the to mature stage"
}])
.then(() => {
    console.log("seed success!")
    process.exit()
}).catch(err => {
    console.log("Failure", err)
    process.exit()
})