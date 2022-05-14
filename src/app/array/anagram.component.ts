import { Component, Input } from '@angular/core';

@Component({
  selector: 'anagram',
  template: `<p>Are these 2 words "{{word1}}" and "{{word2}}" anagram? Answer: {{isAnagram}}. <p>`,
})
export class AnagramComponent {
  isAnagram = false;
  word1 = 'anagram';
  word2 = 'nagaram';
  constructor() {
    this.isAnagram = this.isAnagramBySort(this.word1, this.word2);
  }

  isAnagramBySort(word1: string, word2: string): boolean {
    if (word1?.length !== word2?.length) {
      return false;
    }
    var fn = Array.from(word1).sort();
    var ln = Array.from(word2).sort();

    for (let i = 0; i < fn.length; i++) {
      if (fn[i] === ln[i]) continue;
      else return false;
    }
    return true;
  }

  isAnagramByMap(word1: string, word2: string): boolean {
    if (word1?.length !== word2?.length) {
      return false;
    }

    var map1 = new Map<string, number>();
    var map2 = new Map<string, number>();

    for (let i = 0; i < word1.length; i++) {
      let cnt = map1.get(word1.charAt(i));
      if (cnt) {
        cnt++;
        map1.set(word1.charAt(i), cnt);
      } else {
        map1.set(word1.charAt(i), 1);
      }
    }

    for (let i = 0; i < word2.length; i++) {
      let cnt = map2.get(word2.charAt(i));
      if (cnt) {
        cnt++;
        map2.set(word2.charAt(i), cnt);
      } else {
        map2.set(word2.charAt(i), 1);
      }
    }

    for (let key of map1.keys()) {
      if (map1.get(key) === map2.get(key)) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
}
