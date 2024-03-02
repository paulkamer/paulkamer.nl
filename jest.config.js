module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',

    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.scss$': 'jest-transform-stub',
    },
    moduleNameMapper: {
        '\\.scss$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
};