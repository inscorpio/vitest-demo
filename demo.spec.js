import { it, expect } from 'vitest'
import { getRepeatItems } from './utils'

it('should return repeat item', () => {
  const input = [
    {
      symbol: '=',
      num1: '0',
    },
    {
      symbol: '>=',
      num1: '0',
    },
    {
      symbol: '>=',
      num1: '5',
    },
    {
      symbol: '<=',
      num1: '5',
    },
    {
      symbol: '=',
      num1: '99',
    },
    {
      symbol: '=',
      num1: '99',
    },
    {
      symbol: '>',
      num1: '10',
    },
    {
      symbol: '>=',
      num1: '10',
    },
    {
      symbol: '>',
      num1: '10',
    },
  ]
  expect(getRepeatItems(input)).toMatchSnapshot()
})
