const form = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');

const setDisabledForms = (element, className) => {
  element.classList.add(`${className}--disabled`);
  element.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const removeDisabledForms = (element, className) => {
  element.classList.remove(`${className}--disabled`);
  element.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

setDisabledForms(form, 'ad-form');
setDisabledForms(mapFilter, 'map__filters');

export {form, mapFilter, removeDisabledForms};
