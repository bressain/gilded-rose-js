const { describe, it, beforeEach } = require('node:test')
const assert = require('node:assert')

const { GildedRose } = require('./gilded-rose')

describe('examples to delete', () => {
  it('should be able to pass', () => {
    assert.strictEqual(true, true)
  })

  it('should be able to fail', () => {
    assert.strictEqual(true, false)
  })
})

describe('GildedRose', () => {
  let subject;

  beforeEach(() => {
    subject = new GildedRose()
  })

  it('should do a thing', () => {
    subject.updateQuality()
  })
})
