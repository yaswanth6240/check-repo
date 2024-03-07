module.exports = {

    recommendedBumpOpts: {

        whatBump (commits) {
            let level = 2
            let breakings = 0
            let features = 0
      
            commits.forEach(commit => {
              if (commit.notes.length > 0) {
                breakings += commit.notes.length
                level = 0
              } else if (commit.type === 'feat') {
                features += 1
                if (level === 2) {
                  level = 1
                }
              }
            })
      
            return {
              level,
              reason: `There are ${breakings} BREAKING CHANGES and ${features} features`
            }
          }
    }}

    //whatBump: (commits) => {
        // let level = 2
        // let breakings = 0
        // let features = 0

        // commits.forEach(commit => {
        //     // adds additional breaking change notes
        //     // for the special case, test(system)!: hello world, where there is
        //     // a '!' but no 'BREAKING CHANGE' in body:

        //     console.log("what bump called "+ commit)
        //     if (commit.notes.length > 0) {
        //       breakings += commit.notes.length
        //       level = 0
        //     } else if (commit.type === 'feat' || commit.type === 'feature') {
        //       features += 1
        //       if (level === 2) {
        //         level = 1
        //       }
        //     } else if (commit.type === 'remove') { // Your custom type
        //       level = 0
        //       breakings += 1
        //     }
        //   })
  
        // return {
        //   level: level,
        //   reason: breakings === 1
        //     ? `There is ${breakings} BREAKING CHANGE and ${features} features`
        //     : `There are ${breakings} BREAKING CHANGES and ${features} features`
        // }
    //   }