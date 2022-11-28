import Image from "next/image.js"
import { Fragment, useState } from "react"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { SingleDropdownWrapper } from "./styles/Singledropdown"
import ArrowUp from "../../../assets/Icons/ArrowUp.png"
import ArrowDown from "../../../assets/Icons/ArrowDown.png"
import { useORG_Ctx_UserFetchedAndFilters } from "../../../context/ORG_Ctx_userFetchedAndFilters"
import { ORG_Sortyby } from "../../../utils/ORG_Sortyby"

export const CustomDropdownFilters = ({
  icon = "no icon found",
  title = "no title",
  suggestions = [],
  noIcon = false,
  userFetched,
  filtersST,
  setData,
  setFilters,
  handleSetData,
  handleSetFilters
}) => {
  // const {
  //   userFetchedDone,
  //   filtersUserFetchedDone,
  //   setUserFetchedDone,
  //   setFiltersUserFetchedDone
  // } = useORG_Ctx_UserFetchedAndFilters()

  // console.log('setData, setFilters:', setData, setFilters)

  // console.log('userFetchedDone, filtersUserFetchedDone:', userFetchedDone, filtersUserFetchedDone)

  const [showDropdown, setShowDropdown] = useState(false)

  const handleDropdownClick = () => {
    setShowDropdown((prevstate) => !prevstate)
  }

  const handleDropdownKey = (e) => {
    // console.log('e:', e.key)
    // if (e.key === "Enter") {
    //   setShowDropdown((prevstate) => !prevstate)
    // }
  }
  const suggestionsValidated =
    suggestions.length === 0 ? "Coming soon" : suggestions

  const getSelection = (e) => {
    let elementSelected = e.target.textContent
    console.log("elementSelected:", elementSelected)
    /* 
    
    !FH
    Make the filter nearest, rating and review count presist between pages changes
    */
   
    const {newOrderData, newOrderFilters} = ORG_Sortyby(elementSelected, filtersST, userFetched)

    setData((prevState) => ({
      ...prevState,
      allData: newOrderData
    }))
    setFilters(newOrderFilters)
    
    
    // console.dir('newOrderFinal:', newOrderFinal)

    // console.log('setUserFetchedDone:', setUserFetchedDone)
    // console.log('setFiltersUserFetchedDone:', setFiltersUserFetchedDone)
    // console.log("🔰 userFetchedDone:", userFetchedDone)
    handleDropdownClick()
  }
  // console.log('✨ userFetchedDone:', userFetchedDone)

  return (
    <>
      <SingleDropdownWrapper noIcon={noIcon} className="SingleDropdownWrapper">
        <span
          onClick={handleDropdownClick}
          onKeyDown={(e) => {
            handleDropdownKey(e)
          }}
          tabIndex={0}
        >
          <P bold>{title}</P>
          <span>
            {showDropdown ? (
              <Image src={ArrowUp} alt="" />
            ) : (
              <Image src={ArrowDown} alt="" />
            )}
          </span>
        </span>
        <div className="dropdownSuggestions">
          {showDropdown && suggestions.length !== 0 && (
            <>
              <div></div>
              {suggestionsValidated.map((x) => {
                return (
                  <Fragment key={x}>
                    {
                      <Fragment>
                        <p
                          onClick={(e) => {
                            getSelection(e)
                          }}
                        >
                          {x}
                        </p>
                      </Fragment>
                    }
                  </Fragment>
                )
              })}
              <div></div>
            </>
          )}
        </div>
      </SingleDropdownWrapper>
    </>
  )
}