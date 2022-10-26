import assert from "assert"
import generateQueryString from "../generateQueryString";

describe('check works only object', () => {
  assert.strictEqual(generateQueryString(0), '')
  assert.strictEqual(generateQueryString(false), '')
  assert.strictEqual(generateQueryString(undefined), '')
})
describe('check works well', () => {
  const testObj = {
    a: 1
  }
  assert.strictEqual(generateQueryString(testObj), '?a=1')
})
