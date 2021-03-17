module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',    
    ],
    presets: ['module:metro-react-native-babel-preset'],

    plugins: [
        '@babel/plugin-transform-flow-strip-types',
        '@babel/plugin-proposal-class-properties',
    ]
};
