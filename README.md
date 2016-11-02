# metalsmith-excludes

Excludes documents from the builds based on tags, like draft or sandbox.

## Installation

```
npm install metalsmith-excludes
```

## Usage

Define the tags in your front matter:

```
---
title: A post
description: A very simple post.
tags: [ draft, example, post ]
---
<h1> {{ title }} </h1>
```

```js
var excludes = require('metalsmith-excludes');

new Metalsmith(__dirname)
    .use(excludes([ 'draft', 'sandbox' ]))
    .build();
```

You might want to combine this plugin with `metalsmith-if`:

```js
var excludes = require('metalsmith-excludes');
var msIf = require('metalsmith-if');

new Metalsmith(__dirname)
    .use(msIf(
        ENV === 'production',
        excludes([ 'draft', 'sandbox' ])
    ))
    .build();
```

### **`tags`** `Array`

    An array containing the tags you want to exclude from the build.

## License

MIT License, see [LICENSE](https://github.com/ahdiaz/metalsmith-excludes/blob/master/LICENSE.md) for details.
