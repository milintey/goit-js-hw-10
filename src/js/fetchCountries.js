import Notiflix from 'notiflix';

export function fetchCountries(nameCountry) {
return fetch(`https://restcountries.com/v3.1/name/${nameCountry}?fields=name,capital,population,languages,flags`)
        .then(response => {
            if (response.status === 500) {
                Notiflix.Notify.failure("Oops, there is no country with that name");
            }

            return response.json();
        });

};
