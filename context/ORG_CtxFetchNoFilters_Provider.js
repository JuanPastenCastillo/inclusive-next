import { createContext, useState, useContext } from "react"
import { useFetch } from "../utils/ORG_dummydata_speechtherapists"

const ORG_Ctx_fetchNoFilters = createContext(null)

export const ORG_CtxFetchNoFilters_Provider = ({ children }) => {
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
    <ORG_Ctx_fetchNoFilters.Provider
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
      }}>
      {children}
    </ORG_Ctx_fetchNoFilters.Provider>
  )
}

export const useORG_Ctx_FetchNoFilters = () => {
  return useContext(ORG_Ctx_fetchNoFilters)
}
