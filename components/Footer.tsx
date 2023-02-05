import footer from '../styles/components/Footer.module.scss';
import SwitcherTheme from './SwitcherTheme';
import { FormattedMessage } from 'react-intl';

export default function Footer() {
  return (
    <>
      <footer className={footer.footer}>
        <div className={footer.left}>
          <p className={footer.city}>
            <FormattedMessage id="page.home.location" />
          </p>
          <a className={footer.postLink} href="mailto:hello@litash.dev">
            hello@litash.dev
          </a>
        </div>

        <div className={footer.right}>
          <div className={footer.switchMode}>
            <SwitcherTheme />
          </div>
        </div>
      </footer>
    </>
  );
}