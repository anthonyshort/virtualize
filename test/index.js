mocha.setup({globals: ['hasCert']});

describe('Virtual DOM', function () {
  require('./lib/index');
  require('./lib/tree');
});