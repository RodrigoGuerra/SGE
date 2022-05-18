const webpack = require('webpack');
const path = require('path');
const slsw = require('serverless-webpack');

const isLocal = slsw.lib.webpack.isLocal;
const entries = slsw.lib.entries;

module.exports = {
  mode: isLocal ? 'development' : 'production',
  optimization: {
    minimize: false,
    nodeEnv: false,
  },
  entry: entries,
  devtool: 'source-map',
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  output: {
    libraryTarget: 'umd',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  target: 'node',
  node: {
    __dirname: 'mock',
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          happyPackMode: true
        },
        test: /\.ts$/,
        exclude: /\.spec\.ts$/,
      },
    ],
  },
  plugins: [
    ...(isLocal ? [new webpack.ProgressPlugin()] : []),
    new webpack.IgnorePlugin({
      checkResource: ignore([
        // imported by ws
        'utf-8-validate', 'bufferutil',
        // imported by typeorm
        'react-native-sqlite-storage', 'mssql', 'sql.js', 'sqlite3', 'better-sqlite3', 'ioredis', 'redis',
        'typeorm-aurora-data-api-driver', 'pg-query-stream', 'pg-native', 'pg', 'oracledb', 'mysql2',
        'hdb-pool', '@sap/hana-client', 'mongodb',
      ]),
    }),
  ],
};

function chunks({ entries, dependOn }) {
  const result = {};

  for (const entry of Object.keys(entries)) {
    result[entry] = {
      import: entries[entry],
      library: {
        type: 'commonjs2',
      },
      dependOn: dependOn,
    }
  }

  return result;
}

function ignore(modules) {
  return resource => {
    if (!modules.includes(resource)) {
      // Not in the lazy imports list - don't ignore it
      return false;
    }

    try {
      // If the library is installed, don't ignore it
      require.resolve(resource);
    } catch (err) {
      // Else, ignore it
      return true;
    }
  }
}
