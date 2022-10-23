export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function listNodeToArray(list: ListNode | null, arr: number[] = []): number[] {
  if (!list) return arr;

  if (list.next) {
    return listNodeToArray(list.next, [...arr, list.val])
  } else {
    return [...arr, list.val];
  }
}

export function arrayToListNode(arr: number[], list: ListNode | null = null): ListNode | null {
  if (arr.length === 0) return null;

  const [head, ...tail] = arr;
  const _list = new ListNode(head, list);

  if (tail.length) {
    return arrayToListNode(tail, _list)
  } else {
    return _list;
  }
}
