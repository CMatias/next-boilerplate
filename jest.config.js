module.exports = {
  moduleFileExtensions: ['js'],
  testMatch: ['**/*.(test|spec).js'],
  globals: {},
  coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/mocks.js',
    '\\.(css|less|scss|html)$': '<rootDir>/__mocks__/mocks.js',
    '^@([A-Z].*)$': '<rootDir>/src/$1'
  }
};
