const search = require('./search');
const BinarySearchTree = require('./binary-search-tree');

let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17];
let arr2 = [1, 3, 5, 7, 11, 13, 15, 17];

console.log('Finding index of 9 (4) in test arr1:', search.linearIndexOf(arr1, 9));

let tree = new BinarySearchTree();
tree.insert(9, 9);
for(let item of arr2) {
    tree.insert(item, item);
}

console.log(tree.dfs());