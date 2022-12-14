/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { compilerOptions } = require('./tsconfig');
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      '<rootDir>/node_modules/babel-jest',
      {
        presets: ['next/babel'],
        plugins: [],
      },
    ],
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/__mocks__/fileMock.js`,
    'next/link': '<rootDir>/__mocks__/nextLink.jsx',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@context/(.*)$': '<rootDir>/src/context/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/?!(rehype-raw)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
