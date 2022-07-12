import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const getSortedPosts = () => {
        if (sort) {
          return [...posts].sort((a, b) => a[sort].toLowerCase().localeCompare(b[sort].toLowerCase()))
        }
        return posts
      }
      const sortedPosts = useMemo(() => getSortedPosts(), [sort, posts])
      return sortedPosts
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSeaarchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedPosts])
    return sortedAndSeaarchPosts; 
}