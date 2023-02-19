import Link from 'next/link';
import header from '../styles/components/Header.module.scss';
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Header() {
  const router = useRouter();
  const { locale } = useRouter();
  const [toggleDropDown, setToggleDropDown] = useState(false);

  function handleClickHideDropdown() {
    setToggleDropDown(false);
  }
  
  function handleClickShowDropdown() {
    setToggleDropDown(!toggleDropDown);
  }

  return (
    <>
      <header className={header.header}>
        <div className={header.logo}>
          <Link className={header.logoLink} href="/">
            <FormattedMessage id="page.home.logo" />
          </Link>
        </div>

        <nav className={header.nav}>
          <Link className={header.link} href="/work">
            <span className={router.pathname == "/work" ? "active" : ""}>
              <FormattedMessage id="page.home.nav.work" />
            </span>
          </Link>
          <Link className={header.link} href="/about">
            <span className={router.pathname == "/about" ? "active" : ""}>
              <FormattedMessage id="page.home.nav.about" />
            </span>
          </Link>
          <Link className={header.link} href="/contact">
            <span className={router.pathname == "/contact" ? "active" : ""}>
              <FormattedMessage id="page.home.nav.contact" />
            </span>
          </Link>
          <OutsideClickHandler onOutsideClick={handleClickHideDropdown}>
            <div onClick={handleClickShowDropdown} className={header.dropdown}>
              <span className={header.dropdownLocale}>{locale == 'en' ? 'en' : 'ua'}</span>
              <span 
                className={header.arrow + ' icon-arrow-icon'}
                style={{
                  transform: toggleDropDown == false ? 'rotate(0deg)' : 'rotate(-180deg)',
                  transition: 'all 0.2s ease'
                }}
              ></span>

              <div
                style={{display: toggleDropDown == false ? 'none' : 'block'}} 
                className={header.dropdownContent}
              >
                <Link 
                  className={header.dropdownLink} 
                  key={locale} href="/" 
                  locale={locale == 'en' ? 'ua' : 'en'}
                >
                  {locale == 'en' ? 'ua' : 'en'}
                </Link> 
              </div>
            </div>
          </OutsideClickHandler>
        </nav>
      </header>
    </>
  );
}