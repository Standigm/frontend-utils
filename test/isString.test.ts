import assert from "assert"
import isString from "../isString";

describe('check works well', () => {
  assert.strictEqual(isString(''), true)
  assert.strictEqual(isString(1), false)
})
