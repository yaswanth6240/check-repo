const makeConfig = require('./version-bump-rules')

makeConfig().then((data) => {
    global.config = data
    console.log("===> ", global.config)
})

