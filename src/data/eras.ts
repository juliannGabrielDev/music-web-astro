export type EraMaskKey = 'circle' | 'square' | 'triangle' | 'puffyDiamond' | 'pixelCircle' | 'flower' | 'softBoom';
export type EraImageKey = 'musica-antiguedad' | 'musica-edad-media' | 'musica-renacimiento' | 'musica-barroco' | 'musica-clasicismo' | 'musica-romanticismo' | 'musica-siglo-xx';

export interface Era {
    id: string;
    name: string;
    years: string;
    desc: string;
    extendedDesc: string;
    imageKey: EraImageKey;
    maskKey: EraMaskKey;
}

export const eras: Era[] = [
    {
        id: 'antiguedad',
        name: 'Antigüedad',
        years: '50000 a.C. - 500 d.C.',
        desc: 'Orígenes rítmicos y primeras melodías en civilizaciones antiguas.',
        extendedDesc: 'La música en la antigüedad estaba profundamente ligada a rituales, mitología y eventos comunitarios. Los primeros instrumentos fueron percusiones, flautas de hueso y la propia voz humana. Civilizaciones como Mesopotamia, Egipto, Grecia y Roma sentaron bases tempranas de la teoría musical, conceptualizando la música no solo como un arte emocional, sino como una ciencia entrelazada acústicamente con las matemáticas y la armonía del universo.',
        imageKey: 'musica-antiguedad',
        maskKey: 'circle',
    },
    {
        id: 'edad-media',
        name: 'Edad Media',
        years: '500 - 1400',
        desc: 'Canto gregoriano y nacimiento de la polifonía.',
        extendedDesc: 'Un largo y fundamental periodo dominado fuertemente por la iglesia cristiana en Europa central. En esta época se estandarizó la notación musical sobre líneas y pautas para poder preservar cantos monódicos como el Canto Gregoriano sin depender de la tradición oral. Con el avance de los siglos, nació la polifonía —la revolucionaria idea de cantar múltiples líneas independientes matemáticas al mismo tiempo— impulsada fuertemente por la escuela de Notre Dame. Asimismo, trovadores y juglares mantenían viva la música profana con laúdes y flautas narrando epopeyas y romances.',
        imageKey: 'musica-edad-media',
        maskKey: 'square',
    },
    {
        id: 'renacimiento',
        name: 'Renacimiento',
        years: '1400 - 1600',
        desc: 'Exploración de la armonía y música coral rica y compleja.',
        extendedDesc: 'El glorioso "renacer" del pensamiento humanista clásico trajo consigo una textura contrapuntística mucho más interconectada y suavizada por la adopción de los intervalos de tercera y sexta como consonancias. Formas vocales enfocadas en la poética, como el madrigal, cobraron altísima popularidad a la par de las suntuosas misas corales sacras concebidas por maestros como Palestrina o Josquin des Prez. Además, la invención de la imprenta musical democratizó por primera vez las partituras a lo largo y ancho de Europa.',
        imageKey: 'musica-renacimiento',
        maskKey: 'triangle',
    },
    {
        id: 'barroco',
        name: 'Barroco',
        years: '1600 - 1750',
        desc: 'El bajo continuo, el contrapunto y el nacimiento de la ópera.',
        extendedDesc: 'El Barroco es el epicentro de la ornamentación, del contraste expresivo drástico (stilo representativo) y del virtuosismo. Durante estos agitados 150 años, se consolida el nuevo orden del sistema tonal e invenciones magistrales como la ópera italiana alzan vuelo dramático en manos de compositores pioneros como Monteverdi. Mientras la música vocal exploraba teatros colosales, el contrapunto instrumental alcanzaba su cumbre máxima matemática con la arquitectura sonora de J.S. Bach. Es también el reino del clavecín, los brillantes conciertos de Antonio Vivaldi y la omnipresencia del bajo continuo.',
        imageKey: 'musica-barroco',
        maskKey: 'puffyDiamond',
    },
    {
        id: 'clasicismo',
        name: 'Clasicismo',
        years: '1750 - 1820',
        desc: 'Claridad, equilibrio y la consolidación de la sinfonía y la sonata.',
        extendedDesc: 'Reaccionando al abrumador y denso entramado barroco, el periodo Clásico abogó fervientemente por la claridad estructural, el equilibrio formal y la melodía luminosa por encima de acompañamientos ligeros y gráciles. Es la era de la Primera Escuela de Viena liderada por el genio de Mozart, Haydn, y el primer Beethoven. Nace el molde perfecto de lo que se conoce como cuarteto de cuerdas moderno y la sonata clásica. Aquí la sinfonía se erige como el todopoderoso vehículo instrumental, dictando una nueva elegancia cortesana a los melómanos europeos.',
        imageKey: 'musica-clasicismo',
        maskKey: 'pixelCircle',
    },
    {
        id: 'romanticismo',
        name: 'Romanticismo',
        years: '1820 - 1910',
        desc: 'Expresividad emocional y expansión de la orquesta.',
        extendedDesc: 'Iniciado por el temperamento revolucionario de Beethoven, el Romanticismo rompió alegremente con las proporciones clásicas estrictas para sumergirse en lo literario, las pasiones del individuo y la identidad del nacionalismo poético. El tamaño físico y las filas acústicas de la orquesta crecieron desmesuradamente con las adiciones de los bronces y las nuevas percusiones. Fue la edad de oro del concertista atormentado, como Chopin y Liszt al piano o Paganini en el violín. Armónicamente, el lenguaje tonal exploró al máximo su límite mediante el progresivo cromatismo dramático operístico propuesto por Richard Wagner.',
        imageKey: 'musica-romanticismo',
        maskKey: 'flower',
    },
    {
        id: 'siglo-xx-xxi',
        name: 'Siglo XX y XXI',
        years: '1910 - Hoy',
        desc: 'Ruptura tonal, vanguardias, jazz, rock y música electrónica.',
        extendedDesc: 'Un siglo de violenta pero deslumbrante fragmentación del sonido universal. Desde la implosión absoluta del atonalismo por pioneros vieneses hasta los poliritmos escandalosos en composiciones como La Consagración de la Primavera de Stravinsky. Paralelamente, en una faceta totalmente fresca y popular, surgieron movimientos culturales afroamericanos trascendentales como el jazz, blues, R&B, evolucionando hasta el huracán del rock n\' roll, hip-hop, y el pop global. Todo propulsado ininterrumpidamente, por primera vez en la historia, por los milagros de la tecnología: grabación magnética fonográfica, electrificación de instrumentos, la llegada de los sintetizadores y la asombrosa omnipresencia del computador personal o los DSP, rehaciendo qué es, y cómo se distribuye y comprende, lo que el ser humano denomina genéricamente "música".',
        imageKey: 'musica-siglo-xx',
        maskKey: 'softBoom',
    },
];
