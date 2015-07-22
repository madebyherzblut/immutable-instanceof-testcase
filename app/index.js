var immu2 = require('shared/lib/immu2');
var Immutable = require('immutable');

var test1 = immu2({foo: 'bar'});
var test2 = Immutable.Map({foo: 'bar'});

console.log('test1 instanceof Immutable.Collection', test1 instanceof Immutable.Collection);
console.log('test2 instanceof Immutable.Collection', test2 instanceof Immutable.Collection);
console.log('test1 instanceof Immutable.Map', test1 instanceof Immutable.Map);
console.log('test2 instanceof Immutable.Map', test2 instanceof Immutable.Map);
console.log('Immutable.Map.isMap(test1)', Immutable.Map.isMap(test1));
console.log('Immutable.Map.isMap(test2)', Immutable.Map.isMap(test2));
console.log('Iterable.isIterable(test1)', Immutable.Iterable.isIterable(test1));
console.log('Iterable.isIterable(test2)', Immutable.Iterable.isIterable(test2));
