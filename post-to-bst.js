class BST {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function postToBst(arr, start=0, end=arr.length) {
    if(start === end) {
        return null;
    }
    const root = arr[end - 1];
    const node = new BST(root);

    let middleIndex = start;

    while(arr[middleIndex] < root) {
        middleIndex++;
    }

    const leftBst = postToBst(arr, start, middleIndex);
    const rightBst = postToBst(arr, middleIndex, end-1);
    node.left = leftBst;
    node.right = rightBst;
    return node;
}

console.log(JSON.stringify(postToBst([8, 12, 10, 16, 25, 20, 15]), undefined, 2));
console.log(postToBst([]));