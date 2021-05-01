type objectPathListType = {
    first: string[],
    second: string[],
    third: string[],
    fourth: string[],
    fifth: string[],
    sixth: string[],
}

type gardenObjectType = {
    title: string,
    author: string,
    info: string,
    keyForButton: string
}

type GardeningConfigType = {
    pathsList: objectPathListType | any,
    mainInfo: string,
    signature: string,
    gardenExamples: Array<gardenObjectType>
}

const GardeningConfig: GardeningConfigType = {
    pathsList: {
        'first': [
            '/images/project-images/first/1-min.jpg',
            '/images/project-images/first/2-min.jpg',
            '/images/project-images/first/3-min.jpg',
            '/images/project-images/first/4-min.jpg',
            '/images/project-images/first/5-min.jpg',
            '/images/project-images/first/6-min.jpg',
            '/images/project-images/first/7-min.jpg',
            '/images/project-images/first/8-min.jpg',
            '/images/project-images/first/9-min.jpg'
        ],
        'second': [
            '/images/project-images/second/1-min.jpg',
            '/images/project-images/second/2-min.jpg',
            '/images/project-images/second/3-min.jpg',
            '/images/project-images/second/4-min.jpg',
            '/images/project-images/second/5-min.jpg',
            '/images/project-images/second/6-min.jpg',
            '/images/project-images/second/7-min.jpg',
            '/images/project-images/second/8-min.jpg',
            '/images/project-images/second/9-min.jpg',
            '/images/project-images/second/10-min.jpg',
            '/images/project-images/second/11-min.jpg',
            '/images/project-images/second/12-min.jpg'
        ],
        'third': [
            '/images/project-images/third/1-min.jpg',
            '/images/project-images/third/2-min.jpg',
            '/images/project-images/third/3-min.jpg',
            '/images/project-images/third/4-min.jpg',
            '/images/project-images/third/5-min.jpg',
            '/images/project-images/third/6-min.jpg',
            '/images/project-images/third/7-min.jpg',
            '/images/project-images/third/8-min.jpg',
            '/images/project-images/third/9-min.jpg'
        ],
        'fourth': [
            '/images/project-images/fourth/1-min.jpg',
            '/images/project-images/fourth/2-min.jpg',
            '/images/project-images/fourth/3-min.jpg',
            '/images/project-images/fourth/4-min.jpg',
            '/images/project-images/fourth/5-min.jpg',
            '/images/project-images/fourth/6-min.jpg',
            '/images/project-images/fourth/7-min.jpg',
            '/images/project-images/fourth/8-min.jpg',
            '/images/project-images/fourth/9-min.jpg',
            '/images/project-images/fourth/10-min.jpg',
            '/images/project-images/fourth/11-min.jpg'
        ],
        'fifth': [
            '/images/project-images/fifth/1-min.jpg',
            '/images/project-images/fifth/2-min.jpg',
            '/images/project-images/fifth/3-min.jpg',
            '/images/project-images/fifth/4-min.jpg',
            '/images/project-images/fifth/5-min.jpg',
            '/images/project-images/fifth/6-min.jpg',
            '/images/project-images/fifth/7-min.jpg',
            '/images/project-images/fifth/8-min.jpg'
        ],
        'sixth': [
            '/images/project-images/sixth/1-min.jpg',
            '/images/project-images/sixth/2-min.jpg',
            '/images/project-images/sixth/3-min.jpg',
            '/images/project-images/sixth/4-min.jpg',
            '/images/project-images/sixth/5-min.jpg',
            '/images/project-images/sixth/6-min.jpg',
            '/images/project-images/sixth/7-min.jpg',
            '/images/project-images/sixth/8-min.jpg'
        ]
    },
    mainInfo: '“Ogród powinien docierać do głębi. Odmienić serce, zasmucić, uszlachetnić. Jego rolą jest skłonić nas do zadumy nad przemijalnością wszystkiego, co nas otacza . Ten szczególny punkt w czasie, kiedy ostatni liść już-już ma opaść, gdy ostatni płatek już-już ma się osypać, ten moment zawiera wszystko, co w życiu piękne i bolesne.”',

    signature: 'Tan Twan Eng',
    gardenExamples: [
        {
            title:
            author:
            info:
            keyForButton: 
        }
    ]

}

export default GardeningConfig;