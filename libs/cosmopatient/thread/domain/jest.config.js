module.exports = {
  name: 'cosmopatient-thread-domain',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/cosmopatient/thread/domain',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
