import { EverySingleSpeechTherapistWrapper } from "./styles/EverySingleSpeechTherapistWrapper"
import { HeaderSPList } from "./HeaderSPList.js"
import { useEffect, useState } from "react"
import { SpeechTherapistsCardWithFilter } from "./SpeechTherapistsCardWithFilters.js"
import { SpeechTherapistsCardNoFilter } from "./SpeechTherapistsCardNoFilters.js"
import { useORG_Ctx_PaginationAndHowMuchShow } from "../../../context/ORG_Ctx_PaginationAndHowMuchShow"

export const SpeechtherapistList = ({ filterData, setFilterData }) => {
  const [filterHaveAtLeastOneValueState, setFilterHaveAtLeastOneValueState] =
    useState(false)
  const { pagination } = useORG_Ctx_PaginationAndHowMuchShow()

  useEffect(() => {
    let filterHaveAtLeastOneValue = Object.values(filterData).some(
      (x) => x.length > 0
    )
    if (filterHaveAtLeastOneValue) {
      setFilterHaveAtLeastOneValueState(true)
    } else {
      setFilterHaveAtLeastOneValueState(false)
    }
  }, [filterData, setFilterData, pagination])

  return (
    <EverySingleSpeechTherapistWrapper>
      <HeaderSPList />

      {filterHaveAtLeastOneValueState ? (
        <>
          <SpeechTherapistsCardWithFilter filterData={filterData} />
        </>
      ) : (
        <SpeechTherapistsCardNoFilter />
      )}
    </EverySingleSpeechTherapistWrapper>
  )
}
