export const getRepeatItems = (input) => {
  const valueMap = input.reduce((res, item) => {
    const items = res.get(item.num1) ?? []
    res.set(item.num1, [...items, item])
    return res
  }, new Map())

  const valueGroups = Array.from(valueMap).map((v) => v[1])
  return valueGroups.reduce((res, groupItems) => {
    const symbolMap = new Map()
    groupItems.forEach((item) => {
      const symbols = item.symbol.split('')
      symbols.forEach((symbol) => {
        const items = symbolMap.get(symbol) ?? []
        symbolMap.set(symbol, [...items, item])
      })
    })
    const symbolGroups = Array.from(symbolMap).map(v => v[1]).filter((v) => v.length > 1)

    res.push(...symbolGroups.flat().slice(1))
    return res
  }, [])
}
