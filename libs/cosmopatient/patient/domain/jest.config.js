module.exports = {
  name: 'cosmopatient-patient-domain',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/cosmopatient/patient/domain',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
