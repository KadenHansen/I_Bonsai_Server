const db = require ('../models')

db.Species.create([{
    Name: "P. incisa (Fuji cherry)",
    Description: "Cherry Blossom trees bloom highly scented flowers late autumn to early spring. They are suitable for most styles, including windswept and literati, because old specimens have gnarled and twisted trunks. Unfortunately, many countries prohibit the importation of this genus, and so it is seldom seen outside Japan, where you are almost certain to find one among the best exhibits at major bonsai shows.",
    Fertilizer: " Apply a general fertilizer in spring, and a low-nitrogen one in late summer. Because most plants in this genus bear stoned fruit, they benefit from a fertilizer with a high calcium content.",
    Placement: "These ornamental trees are completely hardy (zones 4–6) and require no special protection in winter. All ornamental cherries can be kept in full sun throughout the growing season.",
    Repotting: "Repot every other year, in early spring, into free-draining compost consisting of two parts loam and one of sharp sand to which has been added a little bonemeal and a sprinkling of lime."
},
{
    Name: "F. retusa (Malay Ficus)",
    Description: "The most popular one for Bonsai is the Ficus Retusa. It’s often shaped with an s-curved trunk and has dark green oval leaves.The leaves of most Bonsai Ficus species have special pointed tips from which the rainwater drips off. The leaves can vary in sizes of between 1–20(2-50cm). In most cases, fig-trees have smooth gray bark on their trunk, but there are a few species or varieties with special bark patterns",
    Fertilizer: "Fertilize every two weeks during summer, and every four weeks during winter if the growth doesn't stop. Liquid fertilizer can be used as well as organic fertilizer pellets.",
    Placement: "The ficus is an indoor tree that does not endure frosty conditions. It can be kept outside in the summer as long as temperatures are above 60°F (15°C). It requires a lot of light, preferably full sunlight, so be sure not to place it in a shady location. The temperature should be kept relatively constant. Figs can endure low humidity due to their thick, waxy leaves, but they prefer higher humidity and need extremely high humidity to develop aerial roots.",
    Repotting: "Repot your Ficus tree during the spring, every other year, using a basic Bonsai soil mixture. Ficus tolerates root-pruning very well."
}])
.then(() => {
console.log("seed success!")
process.exit()
}).catch(err => {
console.log("Failure", err)
process.exit()
})