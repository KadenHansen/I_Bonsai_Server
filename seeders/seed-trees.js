const db = require("../models")

db.Tree.create([{
        Name: "Hana",
        Age: 5,
        Species: "Cherry Blossom",
        Style: "Half Cascade",
        Events: []
    },
    {
        Name: "Chidori",
        Age: 3,
        Species: "Ficus",
        Style: "Informal Upright",
        Events: []
}])
.then(() => {
    console.log("seed success!")
    process.exit()
}).catch(err => {
    console.log("Failure", err)
    process.exit()
})