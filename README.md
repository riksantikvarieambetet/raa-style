# RAA-STYLE

Gemensam style (scss/css) för Riksantikvarieämbetet.

[Grafiska plattformen på wikin](http://raawiki.raa.se/display/GRAP/)

## Användning

För att använda raa-style:s SASS filer i andra projekt måste path:en för ikons fonten sättas upp rätt. Innan raa-styles icons.scss importeras måste variabeln raa-style-font-path defineras enligt

    $raa-style-font-path: '~raa-style/dist';
    @import "~raa-style/dist/scss/icons";
