import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
import { useTheme } from 'next-themes';

const AppWrap = (Component : any, idName: string, classNames: string) => function HOC() {
  const { theme } = useTheme();

  // Conditional class based on the theme
  const conditionalClass = theme === 'light' ? classNames : `dark:bg-slate-900 ${classNames}`;

  return (
    <div id={idName} className={`app__container ${conditionalClass}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />
        <div className="copyright">
          <p className="p-text dark:text-white">@2024 Shah Fahid</p>
          <p className="p-text dark:text-white">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;
