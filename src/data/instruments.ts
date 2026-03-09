export type MaskKey = 'circle' | 'flower' | 'ghost' | 'pill' | 'softBoom';

export type ImageKey = 'laud' | 'organo-de-tubos' | 'violin' | 'piano' | 'sintetizador';

export interface Instrument {
    id: string;
    title: string;
    year: string;
    region: string;
    description: string;
    highlights: string[];
    maskKey: MaskKey;
    imageKey: ImageKey;
}

export const instruments: Instrument[] = [
    {
        id: 'oud',
        title: 'Laud (Oud)',
        year: 'c. 3000 a.C. - actualidad',
        region: 'Mesopotamia y mundo árabe',
        description:
            'Antepasado de muchos instrumentos de cuerda europeos. Su caja periforme y su técnica de púa marcaron siglos de música cortesana y popular.',
        highlights: [
            'Base histórica del laúd renacentista europeo.',
            'Clave en la teoría modal árabe (maqam).',
            'Influyó en técnicas de composición para cuerda pulsada.',
        ],
        maskKey: 'circle',
        imageKey: 'laud',
    },
    {
        id: 'organo',
        title: 'Órgano de tubos',
        year: 's. III a.C. - actualidad',
        region: 'Mediterráneo y Europa',
        description:
            'Uno de los instrumentos más complejos de la historia. Definió la música litúrgica occidental y desarrolló la escritura polifónica.',
        highlights: [
            'Impulsó la armonía tonal en iglesias y cortes.',
            'Repertorio central en Bach, Buxtehude y Franck.',
            'Precursor de conceptos tímbricos usados en sintetizadores.',
        ],
        maskKey: 'flower',
        imageKey: 'organo-de-tubos',
    },
    {
        id: 'violin',
        title: 'Violín',
        year: 's. XVI - actualidad',
        region: 'Italia y Europa',
        description:
            'Consolidado en Cremona, se volvió esencial en orquestas, cámara y virtuosismo solista. Su rango expresivo lo hizo protagonista por siglos.',
        highlights: [
            'Pilar del lenguaje sinfónico clásico y romántico.',
            'Centro de la pedagogía instrumental moderna.',
            'Expandió técnicas extendidas en música contemporánea.',
        ],
        maskKey: 'ghost',
        imageKey: 'violin',
    },
    {
        id: 'piano',
        title: 'Piano',
        year: 'c. 1700 - actualidad',
        region: 'Italia, Francia, Alemania',
        description:
            'Desde Bartolomeo Cristofori hasta el concierto moderno, el piano se convirtió en el laboratorio armónico por excelencia en clásica, jazz y pop.',
        highlights: [
            'Instrumento central para composición y estudio armónico.',
            'Transformó el recital solista en el siglo XIX.',
            'Puente natural entre música académica y popular.',
        ],
        maskKey: 'pill',
        imageKey: 'piano',
    },
    {
        id: 'sintetizador',
        title: 'Sintetizador',
        year: 's. XX - actualidad',
        region: 'Europa y Estados Unidos',
        description:
            'Revolucionó la producción musical con control de timbre y secuenciación. Es clave en electrónica, cine, pop y diseño sonoro contemporáneo.',
        highlights: [
            'Democratizó la experimentación sonora en estudio.',
            'Impulsó géneros como techno, house y synth-pop.',
            'Integró software, MIDI y flujo digital actual.',
        ],
        maskKey: 'softBoom',
        imageKey: 'sintetizador',
    },
];
