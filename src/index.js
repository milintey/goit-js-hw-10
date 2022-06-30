import './css/styles.css';
var debounce = require('lodash.debounce');
import { fetchCountries } from '../src/fetchCountries';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const divContainer = document.querySelector('.country-info');

input.addEventListener('input', debounce(onCountry, DEBOUNCE_DELAY));

function onCountry(event) {
    event.preventDefault();

    // divContainer.innerHTML = "";

    // let inputValue = input.value.trim();

    // fetchCountries(inputValue).then(countryCardMarkup)
    //     .catch(error => {
    //         input.value = "";
    //     });

    fetchCountries(event.target.value).then(country => {
        divContainer.innerHTML = countryCardMarkup({ country });
        // console.log(countryCardMarkup({ country }));
    });
};


// function countryCardMarkup(country) {
//     return country.map(({ name, capital, population, languages, flags }) => {
//         return `<div class="country__head">
//         <img src="${flags}" alt="" />
//     </div>

//     <div class="country">
//         <h1 class="country__title">${name}</h1>
//         <p class="country__text">Столица: ${capital}</p>
//         <p class="country__text">Население: ${population}</p>
//         <p class="country__text">Язык: ${languages}</p>
//     </div>`
//     }).join('');
// }

function countryCardMarkup({ name, capital, population, languages, flags}) {
    return `
    <div class="country__head">
        <img src="${flags}" alt="" />
    </div>

    <div class="country">
        <h1 class="country__title">${name}</h1>
        <p class="country__text">Столица: ${capital}</p>
        <p class="country__text">Население: ${population}</p>
        <p class="country__text">Язык: ${languages}</p>
    </div>`;
}


// import './css/styles.css'
// import debounce from 'lodash.debounce'
// import Notiflix from 'notiflix'
// import { fetchCountries } from './js/fetch-countries'

// const DEBOUNCE_DELAY = 300

// const countryInput = document.querySelector('#search-box')
// const countryList = document.querySelector('.country-list')
// const countryInfo = document.querySelector('.country-info')

// countryInput.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY))

// function onCountryInput() {
//   const name = countryInput.value.trim()
//   if (name === '') {
//     return (countryList.innerHTML = ''), (countryInfo.innerHTML = '')
//   }

//   fetchCountries(name)
//     .then(countries => {
//       countryList.innerHTML = ''
//       countryInfo.innerHTML = ''
//       if (countries.length === 1) {
//         countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
//         countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries))
//       } else if (countries.length >= 10) {
//         alertTooManyMatches()
//       } else {
//         countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
//       }
//     })
//     .catch(alertWrongName)
// }

// function renderCountryList(countries) {
//   const markup = countries
//     .map(({ name, flags }) => {
//       return `
//           <li class="country-list__item">
//               <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 30px height = 30px>
//               <h2 class="country-list__name">${name.official}</h2>
//           </li>
//           `
//     })
//     .join('')
//   return markup
// }

// function renderCountryInfo(countries) {
//   const markup = countries
//     .map(({ capital, population, languages }) => {
//       return `
//         <ul class="country-info__list">
//             <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
//             <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
//             <li class="country-info__item"><p><b>Languages: </b>${Object.values(languages).join(', ')}</p></li>
//         </ul>
//         `
//     })
//     .join('')
//   return markup
// }

// function alertWrongName() {
//   Notiflix.Notify.failure('Oops, there is no country with that name')
// }

// function alertTooManyMatches() {
//   Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
// }