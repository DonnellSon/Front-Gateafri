import { useQueryClient } from "@tanstack/react-query"
import { chunckArray, flatInfiniteQuery } from "../functions"

export const usePaginated = ({ queryKey }) => {

    const queryClient = useQueryClient()

    const addItem = (item) => {
        const newData = flatInfiniteQuery()
        queryClient.setQueryData(queryKey, (old) => {
            const oldArray = flatInfiniteQuery(old)
            return {
                ...old,
                pages: chunckArray([item, ...oldArray], 5).map((data, i) => ({
                    data,
                    nextPage: i + 2,
                    totalItems: oldArray.length + 1
                }))
            }
        })
    }
    const deleteItem = (itemId) => {
        queryClient.setQueryData(queryKey, (old) => {
            const newArray = flatInfiniteQuery(old).filter((item)=>item.id!==itemId)
            return {
                ...old,
                pages: chunckArray([...newArray], 5).map((data, i) => ({
                    data,
                    nextPage: i + 2,
                    totalItems: old.pages[0]?.data?.totalItems - 1
                }))
            }
        })
    }
    const editItem=(itemId,newValues)=>{
        queryClient.setQueryData(queryKey, (old) => {
            const newArray = flatInfiniteQuery(old).map((item)=>{
                if(item.id===itemId){
                    return {...item,...newValues}
                }else{
                    return item
                }
            })
            return {
                ...old,
                pages: chunckArray([...newArray], 5).map((data, i) => ({
                    data,
                    nextPage: i + 2,
                    totalItems: old.pages[0].data.totalItems + 1
                }))
            }
        })
    }

    return { addItem,deleteItem }
}