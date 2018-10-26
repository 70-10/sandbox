export default class Iterator {
  index: number;
  elements: any[];

  constructor(elements: any[]) {
    this.index = 0;
    this.elements = elements;
  }

  next(): any {
    return this.elements[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.elements.length;
  }
}
