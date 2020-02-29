module.exports = {
  name: 'cosmopatient-botox-feature-type',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/cosmopatient/botox/feature-type',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
