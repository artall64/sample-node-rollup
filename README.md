# sample-node-rollup
Demo project thats illustrates my misunderstanding of rollup

# you can have a look at `bundle.js`
my-lib and my-es-lib was included partially, and I expect that `useless=2` dependency should be inluded into the bundler

# Step to reproduce
```
npm i
rollup -c
```
open `bundle.js`
Note: in will also install bitcore-lib that I wasn't originally able to include partially  



