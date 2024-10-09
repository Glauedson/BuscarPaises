# Buscador de Países

## Descrição

O **Buscador de Países** é um site que permite ao usuário explorar informações detalhadas sobre países ao redor do mundo. Na página principal, o usuário visualiza bandeiras e os nomes dos países. Ao clicar em uma bandeira, o usuário é redirecionado para uma página dedicada ao país selecionado, com mais informações, incluindo texto e imagens, fornecidas pela API RestCountries e pela API do Wikipedia.

## Tela inicial no computador
![alt text](/imagens-readme/image.png)

## Funcionalidades

- Página principal com bandeiras e nomes dos países.
- Ao clicar em uma bandeira, o usuário é levado a uma página de detalhes sobre o país.
- Exibição de informações detalhadas sobre o país, como:
  - Nome do país
  - Bandeira do país
  - Texto Informativo sobre o país
  - População
  - Capital
  - Texto Informativo sobre a capital
  - Idioma(s)
  - Moeda(s)
  - Continente
  - Área Geografica
  - Mapa
- Integração com a API do Wikipedia para obter mais informações e imagens adicionais sobre o país.

## Tela secundaria no computador
![alt text](/imagens-readme/image-2.png)
![alt text](/imagens-readme/image-3.png)
![alt text](/imagens-readme/image-4.png)

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **API RestCountries** (para dados sobre os países)
- **API do Wikipedia** (para informações extras e imagens)

## API Usadas

### RestCountries API

A API RestCountries retorna informações detalhadas sobre cada país. Um exemplo de resposta para um país (Brasil) seria:

```json
{
  "name": {
    "common": "Brazil",
    "official": "Federative Republic of Brazil"
  },
  "capital": ["Brasília"],
  "population": 212559417,
  "area": 8515767,
  "languages": {
    "por": "Portuguese"
  },
  "currencies": {
    "BRL": {
      "name": "Brazilian real",
      "symbol": "R$"
    }
  },
  "flag": "https://flagcdn.com/w320/br.png",
  "region": "Americas",
  "subregion": "South America",
  "timezones": ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
  "borders": ["ARG", "BOL", "COL", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"],
  "independent": true
}
```

### Wikipedia API

A API do Wikipedia pode ser usada para buscar informações e imagens sobre o país. Um exemplo de retorno para o Brasil seria:

```json
{
  "extract": "Brasil, oficialmente República Federativa do Brasil, é o maior país da América do Sul e da região da América Latina, sendo o quinto maior do mundo em área territorial, com 8 510 417,771 km², e o sétimo em população. É o único país na América onde se fala majoritariamente a língua portuguesa e o maior país lusófono do planeta, além de ser uma das nações mais multiculturais e etnicamente diversas, em decorrência da forte imigração oriunda de variados locais do mundo. Sua atual Constituição, promulgada em 1988, concebe o Brasil como uma república federativa presidencialista, formada pela união dos 26 estados, do Distrito Federal e dos 5 571 municípios.",
  "thumbnail": {
    "source": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
    "width": 200,
    "height": 133
  }
}
```

## Projeto na tela de celular
### Pagina inicial
![alt text](/imagens-readme/image-5.png)
### Pagina de detalhes
![alt text](/imagens-readme/image-1.png)
![alt text](/imagens-readme/image-6.png)
![alt text](/imagens-readme/image-7.png)