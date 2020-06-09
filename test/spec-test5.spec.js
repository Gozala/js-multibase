/* eslint-env mocha */
'use strict'

const { expect } = require('aegir/utils/chai')
const multibase = require('../src')
const constants = require('../src/constants.js')
const input = '\x00\x00yes mani !'
const encoded = [
  ['identity', '\x00\x00\x00yes mani !'],
  ['base2', '0000000000000000001111001011001010111001100100000011011010110000101101110011010010010000000100001'],
  ['base8', '700000171312714403326055632220041'],
  ['base10', '900573277761329450583662625'],
  ['base16', 'f0000796573206d616e692021'],
  ['base16upper', 'F0000796573206D616E692021'],
  ['base32', 'baaahszltebwwc3tjeaqq'],
  ['base32upper', 'BAAAHSZLTEBWWC3TJEAQQ'],
  ['base32hex', 'v0007ipbj41mm2rj940gg'],
  ['base32hexupper', 'V0007IPBJ41MM2RJ940GG'],
  ['base32pad', 'caaahszltebwwc3tjeaqq===='],
  ['base32padupper', 'CAAAHSZLTEBWWC3TJEAQQ===='],
  ['base32hexpad', 't0007ipbj41mm2rj940gg===='],
  ['base32hexpadupper', 'T0007IPBJ41MM2RJ940GG===='],
  ['base32z', 'hyyy813murbssn5ujryoo'],
  ['base36', 'k002lcpzo5yikidynfl'],
  ['base36upper', 'K002LCPZO5YIKIDYNFL'],
  ['base58flickr', 'Z117Pznk19XTTzBtx'],
  ['base58btc', 'z117paNL19xttacUY'],
  ['base64', 'mAAB5ZXMgbWFuaSAh'],
  ['base64pad', 'MAAB5ZXMgbWFuaSAh'],
  ['base64url', 'uAAB5ZXMgbWFuaSAh'],
  ['base64urlpad', 'UAAB5ZXMgbWFuaSAh']
]

describe('spec test5', () => {
  for (const [name, output] of encoded) {
    const base = constants.names[name]

    describe(name, () => {
      it('should encode buffer by base name', () => {
        const out = multibase.encode(name, Buffer.from(input))
        expect(out.toString()).to.equal(output)
      })

      it('should encode buffer by base code', () => {
        const out = multibase.encode(base.code, Buffer.from(input))
        expect(out.toString()).to.equal(output)
      })

      it('should decode string', () => {
        const out = multibase.decode(output)
        expect(out.toString()).to.equal(input)
      })
    })
  }
})
