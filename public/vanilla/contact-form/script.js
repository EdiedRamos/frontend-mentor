document.addEventListener('DOMContentLoaded', () => {
  const FORM_INPUTS = [
    {
      name: 'first-name',
      customError: {
        pattern: 'Please enter a valid first name',
      },
    },
    {
      name: 'last-name',
      customError: {
        pattern: 'Please enter a valid last name',
      },
    },
    {
      name: 'email',
      customError: {
        type: 'Please enter a valid email address',
      },
    },
    {
      name: 'query-type',
      customError: {
        value: 'Please select a query type',
      },
    },
    {
      name: 'message',
      customError: {
        pattern: 'Please enter a valid message',
      },
    },
    {
      name: 'contact-consent',
      customError: {
        value: 'To submit this form, please consent to being contacted',
      },
    },
  ];

  const getValidatorStatus = (input) => {
    if (input instanceof RadioNodeList) return input[0].validity;
    return input.validity;
  };

  const getFirstInput = (input) => {
    if (input instanceof RadioNodeList) return input[0];
    return input;
  };

  const getErrorMessage = (validator, inputInfo) => {
    if (validator.valueMissing)
      return inputInfo.customError.value ?? 'This field is required';
    if (validator.typeMismatch)
      return inputInfo.customError.type ?? 'Please enter a valid content';

    if (validator.patternMismatch)
      return inputInfo.customError.pattern ?? 'Please enter a valid content';

    return 'Invalid input';
  };

  const clearErrorMessages = () => {
    const errorSpan = document.querySelectorAll('span[id*=error]');
    errorSpan.forEach((span) => {
      span.style.display = 'none';
    });
  };

  const form = document.querySelector('form');
  const successModal = document.getElementById('success-alert');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrorMessages();
    let isFirstError = true;
    let hasError = false;
    for (const inputInfo of FORM_INPUTS) {
      const input = getFirstInput(form.elements[inputInfo.name]);
      const validator = getValidatorStatus(input);

      if (validator.valid) {
        input.setAttribute('aria-invalid', false);
        continue;
      }

      hasError = true;
      input.setAttribute('aria-invalid', true);

      if (isFirstError) {
        input.focus();
        isFirstError = false;
      }

      const errorSpan = document.getElementById(`${inputInfo.name}-error`);
      errorSpan.style.display = 'inline-block';
      errorSpan.textContent = getErrorMessage(validator, inputInfo);
    }

    if (!hasError) {
      form.reset();
      if (successModal) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        successModal.setAttribute('aria-hidden', 'false');
        setTimeout(() => {
          successModal.setAttribute('aria-hidden', 'true');
        }, 5000);
      }
    }
  });
});
