import type { InitialOptionsTsJest } from 'ts-jest/dist/types'

const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json'
    }
  },
  rootDir: '../',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  testRegex: '.(spec|e2e).ts$',
  verbose: false
}

export default config
