import footer from "../styles/components/Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={footer.footer}>
        <div className={footer.left}>
          <p className={footer.city}>Chernihiv, Ukraine</p>
          <a className={footer.postLink} href="mailto:hello@litash.dev">
            hello@litash.dev
          </a>
        </div>

        <div className={footer.right}>
          <div className={footer.switchMode}>
            123
          </div>
        </div>
      </footer>
    </>
  );
}