# npm-array-unique
Receives array as an input and returns the unique array and also an object whith array items and their occurences

## Installation

```bash
npm i npm-array-unique
```

## Usage
```javascript
var arrayUnique = require('npm-array-unique');
```

## unique(array)

Receives the input array and returns the unique array
```javascript

	var arrayUnique = require('npm-array-unique')
	var inputArray = [1,2,3,4,3,2,4,3,4,5,4,5,5];
	
	arrayUnique.unique(inputArray);
	// [ 1, 2, 3, 4, 5]
	
	
	var inputArray2 = ['one', 5, 'two', 'three', 5, 'one', 'three', 7];
	
	arrayUnique.unique(inputArray2);
	// ['one', 5, 'two','three', 7];
  
```

## uniqueCount(text)

Receives the input array and returns the unique array
```javascript

  var arrayUnique = require('npm-array-unique')
  var inputArray = [1,2,3,4,4,4,4,5,6,7,7,8,8,8];
 
  arrayUnique.uniqueCount(inputArray);
  // { '1': 1, '2': 1, '3': 1, '4': 4, '5': 1, '6': 1, '7': 2, '8': 3 }
 
  
```

## itemCount(text)

Receives the input array and returns the unique array
```javascript

  var arrayUnique = require('npm-array-unique')
  var inputArray = [1,2,3,4,2,3,4,2,3,4,5,6,7,8,9,0,6,7,8,9];
 
  arrayUnique.itemCount(inputArray, 7);
  // 2
  
```

## Demo
Demo @[npm-array-unique](https://tonicdev.com/npm/npm-array-unique)
| https://tonicdev.com/npm/npm-array-unique

## Author
Krishcdbry [krishcdbry@gmail.com]

## Licence
MIT @[krishcdbry](krishcdbry.com)
