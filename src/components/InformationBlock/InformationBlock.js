import React from 'react';
import { useTranslation } from 'react-i18next';
import './InformationBlock.scss';

export const InformationBlock = (props) => {
	const { countriesInfo } = props;
	const { t } = useTranslation();

  return (
    <React.Fragment>
				{countriesInfo.map((country, key) => (
					<div className='information-block' key={key}>
						<div className='information-item'><span>{t('infoBlock.countryName')}: </span>{country.name}</div>
						<div className='information-item'><span>{t('infoBlock.countryСapital')}: </span>{country.capital}</div>
						<div className='information-item'><span>{t('infoBlock.countryPopulation')}: </span>{country.population}</div>
						<div className='information-item'><span>{t('infoBlock.countryRegion')}: </span>{country.region}</div>
						<div className='information-item'><span>{t('infoBlock.countryCode')}: </span>{country.alpha3Code}</div>
					</div>
				))}
    </React.Fragment>
  );
};
