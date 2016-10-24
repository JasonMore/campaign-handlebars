# campaign-handlebars

> Handlebars template provider for Campaign

# install

```shell
npm i campaign-handlebars -S
```

# usage

using [`campaign`](https://github.com/bevacqua/campaign).

```js
var campaign = require('campaign');
var handlebars = require('campaign-handlebars');
var client = campaign({
  templateEngine: handlebars
});
client.send(...) // as usual
```

# `handlebars`

Handlebars is exposed for adding options

```js
var handlebars = require('campaign-handlebars');
handlebars.handlebars.registerHelper(...)
```

# license

mit
