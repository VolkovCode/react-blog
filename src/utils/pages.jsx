export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (pagesCount) => {
  const pagesArray = []
  for (let i=0; i < pagesCount; i ++) {
    pagesArray.push(i+1)
  }
  return pagesArray;   
}