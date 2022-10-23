/**
 * Straightforward javascript specific solution
 *
 * @param {number} x - integer
 * @returns {boolean}
 */
export function isPalindromeJS(x: number): boolean {
  return x.toString() === x.toString().split("").reverse().join("");
}

/**
 * Recursion solution
 *
 * @param {number} x - integer
 * @returns {boolean}
 */
export function isPalindrome(x: number) {
  const str = x.toString();
  const reverseStr = (function reverseStr(str: string): string {
    if (str === "") {
      return "";
    } else {
      return reverseStr(str.substring(1)) + str.charAt(0);
    }
  })(str);

  return str === reverseStr;
}
