import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      <ul className="header">
        <li>
          <Link href={`/shop`}>Daily Shop</Link>
        </li>
        <li>
          <Link href={'/battlepass'}>BattlePass</Link>
        </li>
        <li>
          <Link href="/challenges">Weekly challenges</Link>
        </li>
        <li>
          <Link href={'/map'}>Current map & map history</Link>
        </li>
        <li>
          <Link href={'/achievements'}>Achievements list</Link>
        </li>
        <li>
          <Link href={'/fish'}>Fish list</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
