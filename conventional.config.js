module.exports = {
    bumpFiles: [
      { filename: 'CHANGELOG.md', type: 'all' },
      { filename: 'package.json', type: 'json' },
      { filename: 'package-lock.json', type: 'json' },
    ],
    // Add your custom bump rules here
    parserOpts: {
      noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
    },
    types: [
        { type: 'fix', section: 'Bug Fixes', hidden: false },
        { type: 'minor', section: 'Minor Changes', hidden: false },
        { type: 'chore', section: 'Chores', hidden: true },
      ]
  };