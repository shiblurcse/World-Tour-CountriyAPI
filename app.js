fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountry(data))

const displayCountry = countries => {
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        const countryDiv = document.createElement('div')
        countryDiv.className = 'country'
            const countryInfo = `
                <h3 class="country-name">${country.name}</h3>
                <p class="country-capital">${country.capital}</p>
                <button onclick= "displayCountryDetails('${country.name}')">Show Details</button>
            `
            countryDiv.innerHTML = countryInfo
            countriesDiv.appendChild(countryDiv) 
    });
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div')


        // const countryName = document.createElement('h3')
        // countryName.innerText = country.name
        // countryDiv.appendChild(countryName)
        // const countryCapital = document.createElement('p')
        // countryCapital.innerText = country.capital
        // countryDiv.appendChild(countryCapital)


    //     countryDiv.className = 'country'
    //     const countryInfo = `
    //         <h3 class="country-name">${country.name}</h3>
    //         <p class="country-capital">${country.capital}</p>
    //     `
    //     countryDiv.innerHTML = countryInfo
    //     countriesDiv.appendChild(countryDiv)     
    // }
}

const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]))
}

const renderCountryInfo = country => {
    const countryDiv = document.getElementById('countryDetails')
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <h3>${country.capital}</h3>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}"></img>
    `
}
