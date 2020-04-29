import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Input.scss';

export const Input = (props) => {
	const { title, inputType, loadCountries } = props;
	const { t } = useTranslation();
	const inputRef = useRef(null);
	const [errorValidationMessage, setErrorValidationMessage] = useState(null);
	const enterKeyCode = 13;

	const validation = (value) => {
		const regex = /^[-A-Za-z]+$/;
		const isNotRegexValue = !regex.test(value);
		const isNotEmpty = !value;
		const isNotCurrentLength = !(value.length < 50);

		if (isNotRegexValue) {
			setErrorValidationMessage(t('errorMessage.regexError'));
		}

		if (isNotEmpty) {
			setErrorValidationMessage(t('errorMessage.emptyError'));
		}

		if (isNotCurrentLength) {
			setErrorValidationMessage(t('errorMessage.lengthError'));
		}

		if (!isNotEmpty && !isNotRegexValue && !isNotCurrentLength) {
			setErrorValidationMessage(null);

			return true;
		}
	};

	const onSubmit = () => {
		const value = inputRef.current.value.toLowerCase();
		const isValidValue = validation(value);

		if (isValidValue) {
			loadCountries(inputType, value);
		}
	}

	const handleKeyDown = (event) => {
		if (event.keyCode === enterKeyCode) {
      onSubmit();
    }
	}
	
  return (
    <React.Fragment>
			<div className='input-wrapper'>
				<span className='input-title'>{title}</span>
				<input className='content_input' type='text' ref={inputRef} onKeyDown={handleKeyDown}/>
				<div className='submit-button' onClick={onSubmit}>
					<span className='submit-button_span'>{t('submit')}</span>
				</div>
				{errorValidationMessage && <div className='error-message'>{errorValidationMessage}</div>}
			</div>
    </React.Fragment>
  );
};
