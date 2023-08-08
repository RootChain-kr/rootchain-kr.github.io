import './index.css';
import ProductLogo from 'components/ProductLogo';
import Navigator from 'components/Navigator';
import LanguageSwitcher from 'components/LanguageSwitcher';
import ContactBtn from 'components/ContactBtn';

const AppHeader = () => {
  return (
    <header className="App-header">
      <div className="container">
        <ProductLogo />
        <Navigator />
        <LanguageSwitcher />
        <ContactBtn />
      </div>
    </header>
  );
};

export default AppHeader;