module.exports = {
  name: 'cosmopatient-thread-shell',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/cosmopatient/thread/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
