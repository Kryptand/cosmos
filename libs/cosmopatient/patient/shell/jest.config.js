module.exports = {
  name: 'cosmopatient-patient-shell',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/cosmopatient/patient/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
