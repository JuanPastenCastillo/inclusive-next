import { createContext, useState, useContext } from "react"
import { useFetch } from "../utils/ORG_dummydata_speechtherapists"

const ORG_Ctx_Pagination = createContext(null)

export const ORG_CtxIndividualPaginationAndHowMuchShow_Provider = ({
  children
}) => {
  const [pagination, setPagination] = useState(1)
  const [howMuchShow, setHowMuchShow] = useState(10)

  const {
    data: userFetched,
    filters: filtersST,
    setData,
    setFilters,
    actualSort,
    setActualSort
  } = useFetch(
    `https://randomuser.me/api/?results=${howMuchShow}&nat=us&page=${pagination}`
  )

  return (
    <ORG_Ctx_Pagination.Provider
      value={{
        pagination,
        setPagination,
        howMuchShow,
        setHowMuchShow,
        userFetched,
        setData,
        filtersST,
        setFilters,
        actualSort,
        setActualSort
      }}
    >
      {children}
    </ORG_Ctx_Pagination.Provider>
  )
}

export const useORG_Ctx_PaginationAndHowMuchShow = () => {
  return useContext(ORG_Ctx_Pagination)
}
