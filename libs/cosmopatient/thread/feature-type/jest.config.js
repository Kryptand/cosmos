module.exports = {
  name: 'cosmopatient-thread-feature-type',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/cosmopatient/thread/feature-type',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
