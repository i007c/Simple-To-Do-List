import { RuleSetRule, RuleSetUseItem } from 'webpack'

const SassLoader: RuleSetUseItem = {
    loader: 'sass-loader',
    options: {
        sassOptions: {
            includePaths: ['./app/style'],
        },
    },
}

const DevStyle: RuleSetRule = {
    test: /\.(s|)[ac]ss$/i,
    use: ['style-loader', 'css-loader', SassLoader],
}

export { DevStyle }
