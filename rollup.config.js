import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import { terser } from "rollup-plugin-terser";
import nodeGlobals from 'rollup-plugin-node-globals'
import nodeBuiltins from 'rollup-plugin-node-builtins';

export default {
    input: './index.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    sourceMap: true,
    plugins: [
        nodeGlobals(),
        nodeBuiltins(),
        nodeResolve(),
        commonjs(
            // {
            //     namedExports: {
            //         // left-hand side can be an absolute path, a path
            //         // relative to the current directory, or the name
            //         // of a module in node_modules
            //         //'./node_modules/bitcore-lib/index.js': [ 'crypto' ]
            //     }
            // }
        ),
        json(),
        terser()
    ]
}