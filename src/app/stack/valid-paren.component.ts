import { Component, Input } from '@angular/core';

@Component({
  selector: 'valid-paren',
  template: `<p>Valid Parentheses: {{parens}}. Result:  {{isValidParens}}</p>`,
})
export class ValidParenComponent {
  parens = '{}';
  isValidParens = false;
  constructor() {
    this.isValidParens = this.isValid(this.parens);
  }

  isValid(parens: string): boolean {
    var stack = [];
    for (let i = 0; i < parens.length; i++) {
      let char = parens.charAt(i);
      if (char === '(' || char === '[' || char === '{') {
        stack.unshift(char);
      } else {
        if (stack.length === 0) return false;
        let closing = stack.shift();
        if (char === ')' && closing !== '(') return false;
        if (char === '}' && closing !== '{') return false;
        if (char === ']' && closing !== '[') return false;
      }
    }
    return true;
  }
}
