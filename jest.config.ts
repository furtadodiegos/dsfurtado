export default {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts, tsx, js, jsx}'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  setupFilesAfterEnv: ['./__tests__/setup.ts'],
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(\\.|/)test\\.(ts|tsx|js|jsx)$',
};
