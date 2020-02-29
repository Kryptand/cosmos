module.exports = {
  name: 'cosmopatient-thread-feature-treatment',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/cosmopatient/thread/feature-treatment',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
