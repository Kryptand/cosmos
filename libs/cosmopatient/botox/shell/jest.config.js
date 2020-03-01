module.exports = {
  name: 'cosmopatient-botox-shell',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/cosmopatient/botox/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
