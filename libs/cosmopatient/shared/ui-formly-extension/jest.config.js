module.exports = {
  name: 'cosmopatient-shared-ui-formly-extension',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/cosmopatient/shared/ui-formly-extension',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
