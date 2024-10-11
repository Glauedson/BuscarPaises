// API de paises
const lerURL = window.location.search
const URL = new URLSearchParams(lerURL)
const paisId = URL.get('id').toLowerCase()

var TopoNome = document.querySelector("#nomeTopo")
var NomePais = document.querySelector("#nome-pais")
var Capital = document.querySelector("#capial")
var Bandeira = document.querySelector("#bandeira-pais")
var Idioma = document.querySelector("#Idioma")
var Moeda = document.querySelector("#Moeda")
var Continente = document.querySelector("#Continente")
var Populacao = document.querySelector("#Populacao")
var Area = document.querySelector("#Area")

//API Wikipedia
var InfoPais = document.querySelector("#wiki-info-pais")
var Background = document.getElementById("background")
var FotoCapital = document.getElementById("Foto-Capital")
var InfoCapital = document.getElementById("Info-Capital")


async function codigoPrincipal() {
    // paises -------------
    var API = await fetch("https://restcountries.com/v3.1/alpha/" + paisId)
    var dados = await API.json()
    var subdados = dados[0]
    var IdiomaDado = Object.values(subdados.languages).join(`, `)
    var MoedaDado = Object.values(subdados.currencies)[0].name

    TopoNome.innerHTML = `${subdados.translations.por.common} - ${paisId.toUpperCase()}`
    NomePais.innerHTML = `${subdados.translations.por.common.toUpperCase()}`
    Capital.innerHTML = `${subdados.capital}`
    Bandeira.innerHTML = ` <img src="${subdados.flags.svg}" /> `
    Idioma.innerHTML = `${IdiomaDado.toUpperCase()}`
    Moeda.innerHTML = `${MoedaDado.toUpperCase()}`
    Continente.innerHTML = `${subdados.continents[0].toUpperCase()}`
    Populacao.innerHTML = `${subdados.population}`
    Area.innerHTML = `${subdados.area} Km²`

  
    // wikipedia --------------
    var urlwiki = await fetch(`https://pt.wikipedia.org/api/rest_v1/page/summary/${subdados.translations.por.common}_(país)`)
    var dadoswiki
    var CapitalWiki = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${subdados.capital}`)
    var CapitalDados = await CapitalWiki.json()
    var CapitalWikiBR = await fetch(`https://pt.wikipedia.org/api/rest_v1/page/summary/${subdados.capital}`)
    var CapitalDadosBR = await CapitalWikiBR.json()

    try{
    Background.style.backgroundImage = `url(${CapitalDados.originalimage.source})`
    } catch (error){
    Background.style.backgroundImage = `url(../Imagens/img-paises/main-erro.jpg)`
    }

    if (urlwiki.ok){
        dadoswiki = await urlwiki.json()
    } else {
        var urlwiki = await fetch(`https://pt.wikipedia.org/api/rest_v1/page/summary/${subdados.translations.por.common}`)
        if (urlwiki.ok){
            dadoswiki = await urlwiki.json()
        }
    }

    InfoPais.innerHTML = `${dadoswiki.extract}`

    try{
    FotoCapital.style.backgroundImage =  `url(${CapitalDados.originalimage.source})`
    } catch (error){
    FotoCapital.style.backgroundImage = `url(../Imagens/Icons/não_encontrado.png)`
    }

    InfoCapital.innerHTML = `${CapitalDadosBR.extract}`

    // Leaflet 
    const lat = subdados.latlng[0]; 
    const lng = subdados.latlng[1]; 

    var map = L.map('map').setView([lat, lng], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
        .bindPopup(`<b>${subdados.translations.por.common}</b><br>Localização do país.`)
        .openPopup();

  }

codigoPrincipal();
