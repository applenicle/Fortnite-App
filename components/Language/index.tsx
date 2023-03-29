import { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

const Language = () => {
  const [countryOpen, setCountryOpen] = useState(true)
  const [activeCountry, setActiveCountry] = useState(0)
  
  const onSelectItem = (index:number) => {
    setActiveCountry(index);
  };

  const textLocales:string[] = [
    'English',
    'العربية',
    'Deutsch',
    'Español (Spain)',
    'Español (LA)',
    'French',
    'Italian',
    '日本語',
    '한국어',
    'Polski',
    'Português (Brasil)',
    'Русский',
    'Türkçe',
    '中文(简体)',
    '中文(繁體)',
  ]
  
  const { locales, asPath, push } = useRouter();
  const handleClick = (local:any) => () => {
    push(asPath, undefined, { locale: local });
  };

  return (
    <div className='navbar__language'>
      <div>
        <FontAwesomeIcon onClick={() => setCountryOpen(!countryOpen)} icon={faEarthAmericas}/>
      </div>
      <ul className={countryOpen == false ? 'navbar__language-list language-open' : 'navbar__language-list'}>
      {textLocales.map((obj: string, i:number) => (
        <li 
          key={i}
          className={activeCountry == i
          ? 'navbar__language-item navbar__language-item--active' 
          : 'navbar__language-item'} 
          onClick={handleClick(locales[i])}
          >
          {obj}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default Language;
