# RAA-STYLE

Gemensam style (scss/css) för Riksantikvarieämbetet.

[Grafiska plattformen på wikin](http://raawiki.raa.se/display/GRAP/)

## Användning

För att använda raa-style:s SASS filer i andra projekt måste path:en för ikons fonten sättas upp rätt. Innan raa-styles icons.scss importeras måste variabeln raa-style-font-path defineras enligt

    $raa-style-font-path: '~raa-style/dist';
    @import "~raa-style/dist/scss/icons";

## Publicering

Skriptet publishNewVersion.js hanterar publiceringen av paketet till RAÄ:s egna npm-repository. Det finns tre olika typer av publiceringar i package.json som beror på vad för typer av förändringar som har gjorts

- publish:patch
- publish:minor
- publish:major

### patch

Används vid bakåtkompatibla buggfixar.

### minor

Används vid ny funktionalitet har lagts till på ett bakåtkompatibel sätt.

### major

Används när förändringarna gör att vi inte längre är bakåtkompatibla.

Vid en publicering kommer paketets version i `package.json` uppdateras samt en ny tag att skapas och commitas. Sedan publiceras den nya versionen till det gemensamma npm-repository och förändringarna pushas upp till git.
