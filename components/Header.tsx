import Link from 'next/link';
import header from '../styles/components/Header.module.scss';
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Header() {
  const { locale } = useRouter();
  const [toggleDropDown, setToggleDropDown] = useState(false);

  function clickHideDropdown() {
    setToggleDropDown(false);
  }
  
  function clickShowDropdown() {
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
            <FormattedMessage id="page.home.nav.work" />
          </Link>
          <Link className={header.link} href="/about">
            <FormattedMessage id="page.home.nav.about" />
          </Link>
          <Link className={header.link} href="/contact">
            <FormattedMessage id="page.home.nav.contact" />
          </Link>
          <OutsideClickHandler onOutsideClick={clickHideDropdown}>
            <div onClick={clickShowDropdown} className={header.dropdown}>
              <span className={header.dropdownLocale}>{locale == 'en' ? 'en' : 'ua'}</span>
              <span className={header.arrow}></span>

              <div
                style={{display: toggleDropDown == false ? 'none' : 'block'}} 
                className={header.dropdownContent}
              >
                <Link className={header.dropdownLink} key={locale} href="/" locale={locale == 'en' ? 'ua' : 'en'}>
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