# RAA-STYLE

Gemensam style (scss/css) för Riksantikvarieämbetet.

[Grafiska plattformen på wikin](http://raawiki.raa.se/display/GRAP/)

## Användning

Raa-style har en tailwind-configurationsfil som varje projekt skall utgå ifrån. I varje projekt som ska använda raa-style gör följande:

- Installera tailwindcss
- Kör kommandot `npx tailwindcss init` för att skapa en ny konfigurationsfil.
- Ändra konfigurationsfilens innehåll till att peka mot raa-styles tailwind-konfiguration på detta sätt:

```
const raaTailwindConfig = require('raa-style/tailwind.config');

module.exports = {
    prefix: raaTailwindConfig.prefix,
    content: raaTailwindConfig.content,
    theme: raaTailwindConfig.theme,
    variants: raaTailwindConfig.variants,
    plugins: raaTailwindConfig.plugins,
};
```

Behöver man projektspecifika tailwindklasser måste man spreada in raa-style theme och lägga till det man behöver efter.

Ex.

```
theme: { 
    ...raaTailwindConfig.theme, 
    fontFamily: { 
        runlitt: ['runlitt', 'sans-serif'], 
    }, 
},
```

####Obs! Används raa-angular också, se nedan:
Då Tailwind använder Just In Time-kompilering behöver path:en för raa-angular tas med i tailwind-konfigurationen för att få dessa klasser genererade.

`content: ['./src/**/*.html', './node_modules/raa-angular/**/*.*']`

För att använda raa-style:s SASS filer i andra projekt måste path:en för ikons-fonten sättas upp rätt. Innan raa-styles icons.scss importeras måste variabeln raa-style-font-path defineras enligt

    $raa-style-font-path: '~raa-style/dist';
    @import "~raa-style/dist/scss/icons";

### Artifactory (publicera och hämta)

#### Hämta:

För att hämta beroenden för projektet används det virtuella repositoriet 'raa-npm-prod'.  
Ex. https://artifactory.raa.se/artifactory/raa-npm-prod/  
Default-registry för detta sätts i .npmrc.

#### Publicera:

Publicering till Artifactory sker manuellt/lokalt, dvs. ej genom Bamboo. Följ instruktioner nedan:

För att kunna publicera nya versioner av raa-style till artifactory behöver man logga in på det virtuella repositoriet 'common-npm-prod'.
Konfiguration för till var nya publiceringar sker sätts i package.json på:

      "publishConfig": {
        "registry": "https://artifactory.raa.se/artifactory/api/npm/common-npm-prod/"
      },

Logga in på repot genom:

    npm login --registry https://artifactory.raa.se/artifactory/api/npm/common-npm-prod/

Ange sedan dina credentials då detta krävs för att få skrivrättigheter på artifactory.  
Kör sedan skriptet publishNewVersion.js som hanterar publiceringen av paketet till Artifactory.  
Det finns tre olika typer av publiceringar i package.json som beror på vad för typer av förändringar som har gjorts.

- publish:patch
- publish:minor
- publish:major

#### Exempel

    yarn publish:patch

#### patch

Används vid bakåtkompatibla buggfixar.

#### minor

Används vid ny funktionalitet har lagts till på ett bakåtkompatibel sätt.

#### major

Används när förändringarna gör att vi inte längre är bakåtkompatibla.

Vid en publicering kommer paketets version i `package.json` uppdateras samt en ny tag att skapas och commitas. Sedan publiceras den nya versionen till det gemensamma npm-repository och förändringarna pushas upp till git.

### Dokumentation

- https://www.jfrog.com/confluence/display/JFROG/npm+Registry - Guide för hur man använder npm/artifactory
- http://raawiki.raa.se/pages/viewpage.action?pageId=82023997 - Översikt över raa:s artifactory setup
