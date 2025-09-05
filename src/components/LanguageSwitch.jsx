import argentinaFlag from '../assets/argentinaFlag.png';
import usaFlag from '../assets/usaFlag.png';
import './LanguageSwitch.css'
const LanguageSwitch = ({ language, setLanguage }) => {

    return (
        <div className="language-switch">
            <img
                src={argentinaFlag}
                alt="Español"
                className={`flag ${language === 'spanish' ? 'activeFlag' : 'inactiveFlag'}`}
                onClick={() => setLanguage('spanish')}
            />
            <img
                src={usaFlag}
                alt="English"
                className={`flag ${language === 'english' ? 'activeFlag' : 'inactiveFlag'}`}
                onClick={() => setLanguage('english')}
            />
        </div>
  );
}

export default LanguageSwitch