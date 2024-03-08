const makeConfig = require('./version-bump-rules')

makeConfig().then((data) => {
    global.config = data
    data.recommendedBumpOpts.whatBump([])
    console.log("===> ", Date.now() ,  global.config)
})
