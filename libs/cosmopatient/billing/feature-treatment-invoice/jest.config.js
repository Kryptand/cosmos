module.exports = {
  name: 'cosmopatient-billing-feature-treatment-invoice',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/cosmopatient/billing/feature-treatment-invoice',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
