import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

export default () => {
  return (
    <div className="custom-nav">
      <div className="links-container">
        <Link href="/">
          <a className="custom-link">Présentation</a>
        </Link>
        <Link href="/portfolio">
          <a className="custom-link">Portfolio</a>
        </Link>
        <Link href="/contacts">
          <a className="custom-link">Contacts</a>
        </Link>
      </div>
    </div>
  );
};
