

module.exports = {
    recommendedBumpOpts: {
      whatBump: (commits) => {
        let level = 2
        let breakings = 0
        let features = 0
        console.log("what bump called "+ commits)
  
        return {
          level: level,
          reason: breakings === 1
            ? `There is ${breakings} BREAKING CHANGE and ${features} features`
            : `There are ${breakings} BREAKING CHANGES and ${features} features`
        }
      }
    }
  }