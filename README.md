# <img src="Src/Imagens/Icons/map-solid.svg" width="26px"> BUSCAR PAÍSES
<div align="center">

<img src="Src/Imagens/Icons/map-solid.svg" width="150px">
</div>

O **Buscar de Países** é uma aplicação web que permite aos usuários buscar informações detalhadas sobre qualquer país do mundo. Utilizando APIs externas, o projeto fornece dados como nome, bandeira, população, região, entre outras informações relevantes sobre os países.

## <img src="Src/Imagens/Icons/map-solid.svg" width="20px"> Topicos

- [Descrição do Projeto](#descrição-do-projeto)
- [Screenshots Do Projeto](#screenshots-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Endpoints da API](#endpoints-da-api)
- [Como Executar o Projeto Localmente](#como-executar-o-projeto-localmente)
- [Licença](#licença)
- [Contato](#contato)

## <img src="Src/Imagens/Icons/map-solid.svg" width="20px"> Descrição do Projeto

Este projeto utiliza a API RestCountries para buscar informações sobre os países e a API do Wikipedia para exibir informações adicionais, como descrições e fotos. O site apresenta uma página inicial com imagens de bandeiras e o nome dos países, permitindo ao usuário clicar em qualquer uma das bandeiras para ser redirecionado a uma página com mais informações sobre o país selecionado.

### Funcionalidades
- Exibição das bandeiras e nomes dos países.
- Redirecionamento para uma página com informações detalhadas do país.
- Exibição de informações como população, área, idiomas, entre outras.

## <img src="Src/Imagens/Icons/map-solid.svg" width="20px"> Screenshots Do Projeto

**Screenshots Desktop - (Clique nas imagens para amplia-las)**
- TELA INICIAL

<div class="desktop">

  <img src="imagens-readme/glauedson.github.io_BuscarPaises_.png">
</div>

- TELA SECUNDÁRIA

<div class="desktop">

  <img src="imagens-readme/glauedson.github.io_BuscarPaises_Src_html_maisDetalhes.html_id=BR.png">
</div>


## <img src="Src/Imagens/Icons/map-solid.svg" width="20px"> Tecnologias Utilizadas

- **Frontend**:

  [![My Skills](https://skillicons.dev/icons?i=js,html,css)](https://skillicons.dev)

- **APIs**:
   - **API RestCountries**: Para obter dados sobre os países.

   - **API Wikipedia**: Para buscar informações adicionais sobre os países.


## <img src="Src/Imagens/Icons/map-solid.svg" width="20px"> Endpoints da API

### 1. **RestCountries API**
### **Obter todos os Dados**

**Endpoint:** `https://restcountries.com/v3.1/all`

**Descrição:** Retorna uma lista de todos os países com dados como nome, bandeira, população, e região.

**Exemplo de Resposta:**
```json
{
    [
  {
    "name": {
      "common": "South Georgia",
      "official": "South Georgia and the South Sandwich Islands",
      "nativeName": {
        "eng": {
          "official": "South Georgia and the South Sandwich Islands",
          "common": "South Georgia"
        }
      }
    },
    "tld": [
      ".gs"
    ],
    "cca2": "GS",
    "ccn3": "239",
    "cca3": "SGS",
    "independent": false,
    "status": "officially-assigned",
    "unMember": false,
    "currencies": {
      "SHP": {
        "name": "Saint Helena pound",
        "symbol": "£"
      }
    },
    "idd": {
      "root": "+5",
      "suffixes": [
        "00"
      ]
    },
    "capital": [
      "King Edward Point"
    ],
    "altSpellings": [
      "GS",
      "South Georgia and the South Sandwich Islands"
    ],
    "region": "Antarctic",
    "languages": {
      "eng": "English"
    },
    "translations": {
      "ara": {
        "official": "جورجيا الجنوبية وجزر ساندوتش الجنوبية",
        "common": "جورجيا الجنوبية"
      },
      "bre": {
        "official": "Georgia ar Su hag Inizi Sandwich ar Su",
        "common": "Georgia ar Su hag Inizi Sandwich ar Su"
      },
      "ces": {
        "official": "Jižní Georgie a Jižní Sandwichovy ostrovy",
        "common": "Jižní Georgie a Jižní Sandwichovy ostrovy"
      },
      "cym": {
        "official": "South Georgia and the South Sandwich Islands",
        "common": "South Georgia"
      },
      "deu": {
        "official": "Südgeorgien und die Südlichen Sandwichinseln",
        "common": "Südgeorgien und die Südlichen Sandwichinseln"
      },
      "est": {
        "official": "Lõuna-Georgia ja Lõuna-Sandwichi saared",
        "common": "Lõuna-Georgia ja Lõuna-Sandwichi saared"
      },
      "fin": {
        "official": "Etelä-Georgia ja Eteläiset Sandwichsaaret",
        "common": "Etelä-Georgia ja Eteläiset Sandwichsaaret"
      },
      "fra": {
        "official": "Géorgie du Sud et les îles Sandwich du Sud",
        "common": "Géorgie du Sud-et-les Îles Sandwich du Sud"
      },
      "hrv": {
        "official": "Južna Džordžija i Otoci Južni Sendvič",
        "common": "Južna Georgija i otočje Južni Sandwich"
      },
      "hun": {
        "official": "Déli-Georgia és Déli-Sandwich-szigetek",
        "common": "Déli-Georgia és Déli-Sandwich-szigetek"
      },
      "ita": {
        "official": "Georgia del Sud e isole Sandwich del Sud",
        "common": "Georgia del Sud e Isole Sandwich Meridionali"
      },
      "jpn": {
        "official": "サウスジョージア·サウスサンドウィッチ諸島",
        "common": "サウスジョージア・サウスサンドウィッチ諸島"
      },
      "kor": {
        "official": "조지아",
        "common": "조지아"
      },
      "nld": {
        "official": "Zuid-Georgië en de Zuidelijke Sandwich-eilanden",
        "common": "Zuid-Georgia en Zuidelijke Sandwicheilanden"
      },
      "per": {
        "official": "جزایر جورجیای جنوبی و ساندویچ جنوبی",
        "common": "جزایر جورجیای جنوبی و ساندویچ جنوبی"
      },
      "pol": {
        "official": "Georgia Południowa i Sandwich Południowy",
        "common": "Georgia Południowa i Sandwich Południowy"
      },
      "por": {
        "official": "Geórgia do Sul e Sandwich do Sul",
        "common": "Ilhas Geórgia do Sul e Sandwich do Sul"
      },
      "rus": {
        "official": "Южная Георгия и Южные Сандвичевы острова",
        "common": "Южная Георгия и Южные Сандвичевы острова"
      },
      "slk": {
        "official": "Južná Georgia a Južné Sandwichove ostrovy",
        "common": "Južná Georgia a Južné Sandwichove ostrovy"
      },
      "spa": {
        "official": "Georgia del Sur y las Islas Sandwich del Sur",
        "common": "Islas Georgias del Sur y Sandwich del Sur"
      },
      "srp": {
        "official": "Јужна Џорџија и Јужна Сендвичка Острва",
        "common": "Јужна Џорџија и Јужна Сендвичка Острва"
      },
      "swe": {
        "official": "Sydgeorgien",
        "common": "Sydgeorgien"
      },
      "tur": {
        "official": "Güney Georgia ve Güney Sandwich Adaları",
        "common": "Güney Georgia ve Güney Sandwich Adaları"
      },
      "urd": {
        "official": "جنوبی جارجیا و جزائر جنوبی سینڈوچ",
        "common": "جنوبی جارجیا"
      },
      "zho": {
        "official": "南乔治亚岛和南桑威奇群岛",
        "common": "南乔治亚"
      }
    },
    "latlng": [-54.5, -37],
    "landlocked": false,
    "area": 3903,
    "demonyms": {
      "eng": {
        "f": "South Georgian South Sandwich Islander",
        "m": "South Georgian South Sandwich Islander"
      }
    },
    "flag": "🇬🇸",
    "maps": {
      "googleMaps": "https://goo.gl/maps/mJzdaBwKBbm2B81q9",
      "openStreetMaps": "https://www.openstreetmap.org/relation/1983629"
    },
    "population": 30,
    "car": {
      "signs": [
        ""
      ],
      "side": "right"
    },
    "timezones": [
      "UTC-02:00"
    ],
    "continents": [
      "Antarctica"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/gs.png",
      "svg": "https://flagcdn.com/gs.svg"
    },
    "coatOfArms": {

    },
    "startOfWeek": "monday",
    "capitalInfo": {
      "latlng": [-54.28, -36.5]
    }
  },
}
```

### **Obter dados de um unico país**
**Endpoint:** `https://restcountries.com/v3.1/alpha/`

**Parâmetros de Consulta:**
- `/BRA` Sigla do país.

**Exemplo de Requisição:**
```http
  https://restcountries.com/v3.1/alpha/bra
```

**Exemplo de Resposta:**
```json
[
  [
  {
    "name": {
      "common": "Brazil",
      "official": "Federative Republic of Brazil",
      "nativeName": {
        "por": {
          "official": "República Federativa do Brasil",
          "common": "Brasil"
        }
      }
    },
    "tld": [
      ".br"
    ],
    "cca2": "BR",
    "ccn3": "076",
    "cca3": "BRA",
    "cioc": "BRA",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
      "BRL": {
        "name": "Brazilian real",
        "symbol": "R$"
      }
    },
    "idd": {
      "root": "+5",
      "suffixes": [
        "5"
      ]
    },
    "capital": [
      "Brasília"
    ],
    "altSpellings": [
      "BR",
      "Brasil",
      "Federative Republic of Brazil",
      "República Federativa do Brasil"
    ],
    "region": "Americas",
    "subregion": "South America",
    "languages": {
      "por": "Portuguese"
    },
    "translations": {
      "ara": {
        "official": "جمهورية البرازيل الاتحادية",
        "common": "البرازيل"
      },
      "bre": {
        "official": "Republik Kevreel Brazil",
        "common": "Brazil"
      },
      "ces": {
        "official": "Brazilská federativní republika",
        "common": "Brazílie"
      },
      "cym": {
        "official": "Gweriniaeth Ffederal Brasil",
        "common": "Brasil"
      },
      "deu": {
        "official": "Föderative Republik Brasilien",
        "common": "Brasilien"
      },
      "est": {
        "official": "Brasiilia Liitvabariik",
        "common": "Brasiilia"
      },
      "fin": {
        "official": "Brasilian liittotasavalta",
        "common": "Brasilia"
      },
      "fra": {
        "official": "République fédérative du Brésil",
        "common": "Brésil"
      },
      "hrv": {
        "official": "Savezne Republike Brazil",
        "common": "Brazil"
      },
      "hun": {
        "official": "Brazil Szövetségi Köztársaság",
        "common": "Brazília"
      },
      "ita": {
        "official": "Repubblica federativa del Brasile",
        "common": "Brasile"
      },
      "jpn": {
        "official": "ブラジル連邦共和国",
        "common": "ブラジル"
      },
      "kor": {
        "official": "브라질 연방 공화국",
        "common": "브라질"
      },
      "nld": {
        "official": "Federale Republiek Brazilië",
        "common": "Brazilië"
      },
      "per": {
        "official": "جمهوری فدراتیو برزیل",
        "common": "برزیل"
      },
      "pol": {
        "official": "Federacyjna Republika Brazylii",
        "common": "Brazylia"
      },
      "por": {
        "official": "República Federativa do Brasil",
        "common": "Brasil"
      },
      "rus": {
        "official": "Федеративная Республика Бразилия",
        "common": "Бразилия"
      },
      "slk": {
        "official": "Brazílska federatívna republika",
        "common": "Brazília"
      },
      "spa": {
        "official": "República Federativa del Brasil",
        "common": "Brasil"
      },
      "srp": {
        "official": "Савезна Република Бразил",
        "common": "Бразил"
      },
      "swe": {
        "official": "Förbundsrepubliken Brasilien",
        "common": "Brasilien"
      },
      "tur": {
        "official": "Brezilya Federal Cumhuriyeti",
        "common": "Brezilya"
      },
      "urd": {
        "official": "وفاقی جمہوریہ برازیل",
        "common": "برازیل"
      },
      "zho": {
        "official": "巴西联邦共和国",
        "common": "巴西"
      }
    },
    "latlng": [-10, -55],
    "landlocked": false,
    "borders": [
      "ARG",
      "BOL",
      "COL",
      "GUF",
      "GUY",
      "PRY",
      "PER",
      "SUR",
      "URY",
      "VEN"
    ],
    "area": 8515767,
    "demonyms": {
      "eng": {
        "f": "Brazilian",
        "m": "Brazilian"
      },
      "fra": {
        "f": "Brésilienne",
        "m": "Brésilien"
      }
    },
    "flag": "🇧🇷",
    "maps": {
      "googleMaps": "https://goo.gl/maps/waCKk21HeeqFzkNC9",
      "openStreetMaps": "https://www.openstreetmap.org/relation/59470"
    },
    "population": 212559409,
    "gini": {
      "2019": 53.4
    },
    "fifa": "BRA",
    "car": {
      "signs": [
        "BR"
      ],
      "side": "right"
    },
    "timezones": [
      "UTC-05:00",
      "UTC-04:00",
      "UTC-03:00",
      "UTC-02:00"
    ],
    "continents": [
      "South America"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/br.png",
      "svg": "https://flagcdn.com/br.svg",
      "alt": "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center."
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/br.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/br.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
      "latlng": [-15.79, -47.88]
    },
    "postalCode": {
      "format": "#####-###",
      "regex": "^(\\d{8})$"
    }
  }
]
]
```

### 2. **Wikipedia API**
**Endpoint:** `https://pt.wikipedia.org/api/rest_v1/page/summary`

**Exemplo de Requisição:**
```http
  https://pt.wikipedia.org/api/rest_v1/page/summary/brasil
```

**Exemplo de Resposta:**
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


## <img src="Src/Imagens/Icons/map-solid.svg" width="20px"> Como Executar o Projeto Localmente

1. Clone este repositório:
   ```bash
   https://github.com/Glauedson/BuscarPaises.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd BuscarPaises
   ```
3. Abra o arquivo ``index.html`` no navegador ou rode localmente com um servidor (ex: ``Live Server`` no ``VS Code``).

## 📄 Licença

Este projeto não possui uma licença definida. Sinta-se livre para utilizar e modificar o código conforme necessário.

## 📩 Contato

Para dúvidas ou sugestões, entre em contato:

- **Nome**: Glauedson Carlos Rodrigues
- **Email**: (gluedson18s@gmail.com)
