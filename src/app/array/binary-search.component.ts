import { Component, Input } from '@angular/core';

@Component({
  selector: 'binary-search',
  template: `<p>Binary Search: Find "{{number}}" in {{sortedList}}. Result: {{found}} </p>`,
})
export class BinarySearchComponent {
  sortedList = [1, 2, 4, 10, 15, 19];
  number = 3;
  found = false;
  constructor() {
    this.found = this.search(this.sortedList, this.number);
  }

  search(list: number[], num: number): boolean {
    var low = 0;
    var high = list.length - 1;
    var cnt = 1;
    while (low <= high) {
      let mid = Math.floor((high + low) / 2);
      if (num === list[mid]) {
        return true;
      } else if (num > list[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return false;
  }
}
