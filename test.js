var fs = require('fs');
var test = require('ava');
var sp = require('./schemapack.js');

const fixtures = fs.readdirSync('./fixtures');

fixtures.forEach(file => {
  test(file, t => {
    console.log('----------', file, '--------');

    const { schema, items } = require(`./fixtures/${file}`);
    console.log('schema: ', schema);
    const built = sp.build(schema);


    console.log('----------------------------');
    items.forEach(item => {
      const processed = built.decode(built.encode(item));
      t.deepEqual(processed, item);
    });
  })
});
