import assert from "assert"
import isObject from "../isObject";

describe('check works well', () => {
  assert.strictEqual(isObject({}), true)
  assert.strictEqual(isObject({a: 1}), true)

  assert.strictEqual(isObject([]), false)
  assert.strictEqual(isObject(''), false)
})
