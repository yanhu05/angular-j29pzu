import { NumberValueAccessor } from "@angular/forms";

export class TreeNode  {
  val: number;
  left: TreeNode;
  right: TreeNode;
  constructor(val: number) {
    this.val = val;
  }
}