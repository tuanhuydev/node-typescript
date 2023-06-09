const nodeList = [
	{ n: 1, p: null },
	{ n: 2, p: 1 },
	{ n: 3, p: 2 },
	{ n: 4, p: 1 },
	{ n: 7, p: 1 },
	{ n: 5, p: 2 },
	{ n: 6, p: 5 },
];

const findRootNode = (nodeList: Array<any>) => {
	for (const node of nodeList) {
		if (!node.p) {
			return node;
		}
	}
	return null;
};

const orderNode = (currentNode: any, listNode: Array<any>) => {
	if (!currentNode.c) {
		currentNode.c = [];
	}

	for (const node of listNode) {
		if (node.p === currentNode.n) {
			const orderedNode = orderNode(node, listNode);
			currentNode.c.push(orderedNode);
		}
	}
	return currentNode;
};

const traverseTree = (nodeList: Array<any>) => {
	const rootNode = findRootNode(nodeList);
	return orderNode(rootNode, nodeList);
};

console.log(JSON.stringify(traverseTree(nodeList)));
