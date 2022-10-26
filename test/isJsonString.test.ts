import assert from "assert"
import isJsonString from "../isJsonString";

describe('check works well', () => {
  assert.strictEqual(isJsonString('{"a": 1}'), true)
})
describe('wrong Json string', () => {
  assert.strictEqual(isJsonString('11'), false)
})
describe('miss qutation mark', () => {
  assert.strictEqual(isJsonString('{a: 1}'), false)
})
