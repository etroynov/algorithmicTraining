import { isPalindromeJS, isPalindrome } from './solution';

describe('PalindromeNumbers', () => {
  describe('Straightforward', () => {
    it('should return true if number is palindrome', () => {
      expect(isPalindromeJS(121)).toBe(true);
    });

    it('should return true if number is not palindrome', () => {
      expect(isPalindromeJS(122)).toBe(false);
    });
  });

  describe('Recursion', () => {
    it('should return true if number is palindrome', () => {
      expect(isPalindrome(121)).toBe(true);
    });

    it('should return true if number is not palindrome', () => {
      expect(isPalindrome(122)).toBe(false);
    });
  });
});