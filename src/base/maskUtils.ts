/**
 * Removes all non-numeric characters from a string.
 * @param value - Input string.
 * @returns String containing only digits.
 */
export function onlyDigits(value: string): string {
  return value.replace(/\D/g, '')
}

/**
 * Applies the mask progressively according to the available digits.
 *
 * Example:
 * applyPattern('12345', 'XXX.XXX.XXX-XX') -> '123.45'
 * applyPattern('12345678901', 'XXX.XXX.XXX-XX') -> '123.456.789-01'
 *
 * @param value - string with digits only (partial or complete)
 * @param pattern - mask with 'X' representing digits
 * @returns partially formatted string
 */
export function applyPattern(value: string, pattern: string): string {
  let result = ''
  let digitIndex = 0

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]

    if (char === 'X') {
      if (digitIndex < value.length) {
        result += value[digitIndex++]
      } else {
        break // No more digits available, stop applying more mask
      }
    } else {
      // Fixed mask character
      // Add only if there are digits filled to avoid trailing symbols
      if (digitIndex > 0) {
        result += char
      }
    }
  }

  return result
}

/**
 * Checks whether a string matches a regular expression.
 * @param value - Input string.
 * @param regex - Regular expression to test.
 * @returns Boolean indicating whether it matches.
 */
export function matchesPattern(value: string, regex: RegExp): boolean {
  return regex.test(value)
}

/**
 * Limits the length of a string to a maximum.
 * @param value - Input string.
 * @param maxLength - Maximum length allowed.
 * @returns Truncated string if longer than maxLength.
 */
export function limitLength(value: string, maxLength?: number): string {
  if (maxLength === undefined) return value
  return value.slice(0, maxLength)
}

/**
 * Checks if a string meets min and max length constraints.
 * @param value - Input string.
 * @param min - Minimum length (optional).
 * @param max - Maximum length (optional).
 * @returns Boolean indicating whether the length is valid.
 */
export function isValidLength(
  value: string,
  min?: number,
  max?: number
): boolean {
  if (min !== undefined && value.length < min) return false
  if (max !== undefined && value.length > max) return false
  return true
}
