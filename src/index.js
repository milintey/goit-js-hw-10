import './css/styles.css';
var debounce = require('lodash.debounce');
import Notiflix from 'notiflix';
import { fetchCountries } from '../src/js/fetchCountries.js';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const divContainer = document.querySelector('.country-info');

input.addEventListener('input', debounce(onCountry, DEBOUNCE_DELAY));


function onCountry(event) {
    const targetCountry = event.target.value.trim();
    fetchCountries(targetCountry).then(country => {
        if (targetCountry === '') {
            divContainer.innerHTML = '';
        } else if (country.length > 9) {
            divContainer.innerHTML = '';
            Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
        } else if (country.length >= 2 && country.length <= 10) {
            divContainer.innerHTML = countryFlagAndName(country);
        } else if (country.length === 1) {
            divContainer.innerHTML = countryCardsMarkup(country);
        }
    });
}


function countryCardsMarkup(country) {
    return country.map(({ name, capital, population, languages, flags }) => {
        return `<div class="country__head">
        <img src="${flags.svg}" alt="${name.official}" height="200" width="300"/>
    </div>

    <div class="country">
        <h1 class="country__title">${name.official}</h1>
        <p class="country__text">Столица: ${capital}</p>
        <p class="country__text">Население: ${population}</p>
        <p class="country__text">Язык: ${Object.values(languages).join(', ')}</p>
    </div>`
    }).join('');
}

function countryFlagAndName(country) {
    return country.map(({ name, flags }) => {
        return `
        <div class="countrys">
            <img src="${flags.svg}" alt="${name.official}" height="30" width="40"/>
            <p class="country__textt">${name.official}</p>
        </div>`
    }).join('');
}

