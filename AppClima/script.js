const button = document.getElementById('button');

button.addEventListener('click', function(event){
    event.preventDefault();

    const cityInput = document.getElementById('cityInput').value;
    const apiKey = '0120f7b8c0f55c18af41773179b1a148'; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric&lang=pt_br`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(dados => {
            const weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = '';
            if (dados && dados.main && dados.weather && dados.weather.length > 0) {
                weatherResult.innerHTML = `
                    <div class="dados">
                        <h2>${dados.name}, ${dados.sys.country}</h2>
                        <p>Temperatura: ${dados.main.temp}°C</p>
                        <p>Sensação Termica: ${dados.main.feels_like}°C</p>
                        <p>Tempo: ${dados.weather[0].description}</p>
                        <p>Humidade: ${dados.main.humidity}%</p>
                        <p>Pressão Atmosférica: ${dados.main.pressure} hPa</p>
                        <p>Velocidade do Vento: ${dados.wind.speed}km/h</p>
                    </div>
                `;
            } else {
                weatherResult.innerHTML = `<p>Dados meteorológicos não encontrados ou incompletos.</p>`;
            }
        })
    .catch(erro => {
        console.error("Erro na Requisição: ", erro);
        const weatherResult = document.getElementById('weatherResult');
        weatherResult.innerHTML = `<p>Erro ao buscar os dados. Verifique o nome da cidade.</p>`;
    });
});