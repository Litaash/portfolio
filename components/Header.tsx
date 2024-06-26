import Link from "next/link";
import header from "../styles/components/Header.module.scss";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Header: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const handleClickHideDropdown = () => {
    setToggleDropDown(false);
  };

  const handleClickShowDropdown = () => {
    setToggleDropDown(!toggleDropDown);
  };

  const handleLocaleChange = () => {
    const newLocale = locale === "en" ? "uk" : "en";
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <>
      <header
        className={
          router.pathname === "/" ? header.header : header.headerInitial
        }
      >
        <div className={header.logo}>
          <Link href="/">litash.dev</Link>
        </div>

        <nav className={header.nav}>
          {/* <Link className={header.link} href="/projects">
            <span
              className={
                router.pathname === "/projects" ? header.activeLink : ""
              }
            >
              <FormattedMessage id="page.home.nav.work" />
            </span>
          </Link> */}
          <Link className={header.link} href="/about">
            <span
              className={router.pathname === "/about" ? header.activeLink : ""}
            >
              <FormattedMessage id="page.home.nav.about" />
            </span>
          </Link>
          <Link className={header.link} href="/contact">
            <span
              className={
                router.pathname === "/contact" ? header.activeLink : ""
              }
            >
              <FormattedMessage id="page.home.nav.contact" />
            </span>
          </Link>
          <OutsideClickHandler onOutsideClick={handleClickHideDropdown}>
            <div onClick={handleClickShowDropdown} className={header.dropdown}>
              <span className={header.dropdownLocale}>
                {locale === "en" ? "en" : "ua"}
              </span>
              <span
                className={`${header.arrow} icon-arrow-icon`}
                style={{
                  transform:
                    toggleDropDown === false
                      ? "rotate(0deg)"
                      : "rotate(-180deg)",
                  transition: "all 0.2s ease",
                }}
              ></span>

              <div
                style={{ display: toggleDropDown === false ? "none" : "block" }}
                className={header.dropdownContent}
              >
                <div
                  className={header.dropdownLink}
                  key={locale}
                  onClick={handleLocaleChange}
                >
                  {locale === "uk" ? "en" : "ua"}
                </div>
              </div>
            </div>
          </OutsideClickHandler>
        </nav>
      </header>
    </>
  );
};

export default Header;
