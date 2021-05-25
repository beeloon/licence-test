const parse = require('spdx-expression-parse');

parse('BSD-2-Clause');
// { license: 'BSD-2-Clause' }

parse('(LGPL-2.1 OR BSD-3-Clause AND MIT)');
/*
{
  left: { license: 'LGPL-2.1' },
  conjunction: 'or',
  right: {
    left: { license: 'BSD-3-Clause' },
    conjunction: 'and',
    right: { license: 'MIT' }
  }
}
*/
