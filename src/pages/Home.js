import React from 'react';
import { useTranslation } from 'react-i18next';
import localStorage from '../helpers/localStorage';
import { Input }  from '../components/Input/Input';
import { InformationBlock }  from '../components/InformationBlock/InformationBlock';
import config from '../config';
import './Home.scss';


const Home = (props) => {
	const {countries, isError, loadCountries} = props;
	const { t, i18n } = useTranslation();

	const changeLocale = ( locale ) => {
		i18n.changeLanguage(locale);
		localStorage.save('Locale', locale);
	};

  return(
    <React.Fragment>
			<div className='home_section'>
				<div className='home_container'>
					<div className='home_header'>
						<span className='home_title' >{t('title')}</span>
						<div className='home_locale'>
							{config.locales.map((locale, key) => (
								<div className='locale_button' onClick={() => changeLocale(locale)} key={key}>
									<span className='locale-button_span'>{locale}</span>
								</div>
							))}
						</div>
					</div>
					<div className='home_content'>
						<div className='content_left-block left-block '>
							{config.inputs.map((input, key) => (
								<Input 
								key={key} 
								title={t(`inputs.${input.inputType}.inputName`)} 
								inputType={input.inputType} loadCountries={loadCountries} 
								/>
							))}
							{isError && <div className='error-message'>{t('errorMessage.globalError')}</div>}
						</div>
						<div className='content_right-block'>
							{!!countries ? <InformationBlock countriesInfo={countries} /> : <div>{t('information')}</div> }
						</div>
					</div>
				</div>
			</div>
    </React.Fragment>
  );
};

export default Home;
