import { Component, Input } from '@angular/core';
import { TreeNode } from '../model/TreeNode';

@Component({
  selector: 'tree-depth',
  template: `<p>TreeDepth: {{depth}}</p>`,
})
export class TreeDepthComponent {
  tree = new TreeNode(0);
  depth = 0;
  constructor() {
    this.tree.left = new TreeNode(1);
    this.tree.left.left = new TreeNode(2);
    this.depth = this.findDepth(this.tree);
  }

  findDepth(node: TreeNode): number {
    if (!node) return 0;
    return Math.max(this.findDepth(node.left), this.findDepth(node.right)) + 1;
  }
}
