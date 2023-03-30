import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEarthAmericas, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setIsOpen, setHighlighterIndex, SelectOptions } from '@/redux/slices/Languages';

const Language = () => {
  const dispatch = useAppDispatch()
  const { isOpen, highlighterIndex,  options } = useAppSelector(state => state.LanguagesSlice)
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0])

  const router = useRouter()
  const { asPath, locale } = router

  const selectOptions = (option: SelectOptions) => {
    if(option !== options) setValue(option)
  }

  const isOptionSelected = (option: SelectOptions) => {
    return option === value
  }

  return (
    <div 
      onBlur={() => dispatch(setIsOpen(false))}
      onClick={() => dispatch(setIsOpen(!isOpen))}
      tabIndex={0} 
      className='selector__inner'
    >
      <span className="value">
        <FontAwesomeIcon icon={faEarthAmericas} />
        {locale == value?.value ? value?.label : 'Choose your country'}
      </span>
      <div className="divider"></div>
      <div className="caret"></div>
      <ul className={isOpen ? "select show" : "select"}>
      {options.map((option, index) => 
        <li 
          key={option.value} 
          onMouseEnter={() => dispatch(setHighlighterIndex(index))}
          onClick={() => {
            selectOptions(option)
            router.push(asPath, undefined, { locale: option.value })
          }}
          className={
            `${ isOptionSelected(option) ? "option selected" : "option"}
             ${ index === highlighterIndex ? "option highlighted" : "option"}
            `}
        >
          {option.label}
          <FontAwesomeIcon icon={faCheck}/>
        </li>
      )}
      </ul>
    </div>
  )
}

export default Language;