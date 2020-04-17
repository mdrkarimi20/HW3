1
let value = b;
let arr = [a, b, c];
arr = arr.filter(function deleteByIndex(item) {
    return item !== value;
})
console.log(arr);

function remove(arr, item) { 
	for (var i = arr.length; i--;) { 
		if (arr[i] === item) { 
			arr.splice(i, 1); 
		} 
	} 
}
-------------------------------------------------------------
2
let a = [1,2,3];
let b = [4,5,6];
let c = [9,8,7,0];
let d = [...a,...b,...c];
d.sort();
console.log(d);

Array.merge = function() {
    let a = this.sort();
    for(let i=0; i<a.length; ++i) {
        for(let j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
      return a;
};
----------------------------------------------------------------
3
let arr = [[2,3],5,[[[2,9],4],4],1,0];
flatten(arr);

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

const flatten = function(arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};
----------------------------------------------------------------
4
let arr = [[2,3,4], 3];
console.log(arr[1]);

function search(numberArr, myArray){
    for (let i=0; i < myArray.length; i++) {
        if (myArray[i].number === numberArr) {
            return myArray[i];
        }
    }
}
----------------------------------------------------------------
5
let index = items.indexOf(e);

if (index !== -1) {
    items[index] = t;
}

const itemReplacer = (array, oldItem, newItem) =>
  array.map(item => item === oldItem ? newItem : item);
----------------------------------------------------------------
6
function retnum(str) { 
    var num = str.replace(/[^0-9]/g, ''); 
    return parseInt(num,10); 
}
--------------------------------------------------------------
7

uniqueArray = a.filter(function(item, pos) {
    return a.indexOf(item) == pos;
})
-------------------------------------------------------------
