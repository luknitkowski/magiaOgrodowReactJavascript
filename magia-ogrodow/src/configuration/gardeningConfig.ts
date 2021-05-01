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
            title: 'Ogród przydomowy 845 m² – Rumia',
            author: 'Beata Kulling- Nitkowska',
            info: 'Ogród został zmodernizowany ze starego ogrodu. Część roślin została zaadaptowana, jak na przykład wysoki żywopłot, dzięki temu uzyskaliśmy zieloną ścianę i intymność. Drugim zachowanym elementem są średniej wysokości żywopłoty bukszpanowe, które wyznaczyły strefy. Punktem centralnym stał się kwadrat , w którym znajduje się mini fontanna otoczona różami, szałwią i trawami. Przestrzeń ta przyciąga wzrok widza przez cały czas. Pozostałe strefy to skalniak przy altanie i trawnik na którym może odbywać się aktywność dzieci. Wprowadziliśmy rośliny kwitnące , jak : liliowce, przetaczniki, hortensje, rudbekie , rododendrony. Od wczesnej wiosny do jesieni cały czas coś kwitnie.',
            keyForButton: 'first'
        },
        {
            title: 'Ogród przydomowy',
            author: 'Beata Kulling- Nitkowska',
            info: 'Przekształcenie zaniedbanego , starego ogrodu polegało na uporządkowaniu przestrzeni. Wprowadzono linie proste i geometryczne donice, dzięki temu pozbyliśmy się chaosu i zastanego bałaganu. Jak to w starszych ogrodach pozostawiliśmy roślinność , którą można poprzez odpowiednią pielęgnację przywrócić do życia . Takim elementem był na pewno wysoki żywopłot. Na życzenie klienta zaproponowane rośliny na rabaty wymagają minimum pracy.',
            keyForButton: 'second'
        },
        {
            title: 'Ogród przydomowy - Mrzezino,',
            author: 'Zofia Dzielińska',
            info: 'W tym ogrodzie byliśmy wykonawcami zaplanowanego już ogrodu przez naszą koleżankę , z którą współpracujemy Zofią Dzielińską. Zaproponowane owalne kształty , przenikające i stykające się z sobą dały spójność przestrzeni. Ogród kwitnący, tętniący kolorem i życiem wielu owadów. W tym ogrodzie nie posadziliśmy , ani jednego iglaka . Oprócz mnóstwa bylin, znalazł swoje miejsce warzywniak i szklarenka.',
            keyForButton: 'third'
        },
        {
            title: 'Ogród nad jeziorem - Nadole',
            author: 'Zofia Dzielińska',
            info: 'Pierwszy nasz tak duży ogród, dlatego na zawsze pozostanie w mojej pamięci. Przedstawiana działka ma kształt wąskiego prostokąta, z lekkim spadkiem w kierunku jeziora. Zastaliśmy już położone nawierzchnie . Musieliśmy wkomponować się w istniejące wygrodzone przestrzenie. Ogród podzieliliśmy na trzy strefy . Pierwsza to przedogródek, reprezentacyjny zapraszający do domu . Zaproponowana roślinność biegnie w kształcie fali wychodzącej z pierwszego podjazdu , biegnącej wzdłuż dwóch wejść do budynku. Znalazły tu miejsce róże okrywowe, berberysy , tuje kuliste. Druga strefa znajduje się z boku budynku i ma charakter leśny , gdyż została wkomponowana w już istniejące sosny. Znalazły tam miejsce rośliny tolerujące cień : Rododendrony, żurawki, hosty, rodgersje. Trzecia wydzielona przestrzeń znajduje się po drugiej stronie budynku, blisko jeziora. W tej części ogrodu przez spadek terenu stworzył się taras , który kończy mała skarpa Zagospodarowana ona została roślinami zadarniającymi : jałowce, skalniaki, runianka , żurawki.',
            keyForButton: 'fourth'
        },
        {
            title: 'Przedogródek - Rumia',
            author: 'Zofia Dzielińska',
            info: 'Mały przedogródek w kształcie litery L. Mały , ale dużo się się dzieje. Rabty wydzieliły łuki i dla ich podkreślenia zastosowano dwa rodzaje kamienia, ciemny i jasny. Jedna część skąpana w słońcu , dlatego miejsce znalazły tam trawy i w różnych okresach kwitnące byliny. Z drugiej strony budynku poprzez zastane drzewa i krzewy zamieszkały rośliny cienia i półcienia. Zakątek ten mieni się kolorami . Dwie części przedogródka połączył trawnik w kształcie księżyca.',
            keyForButton: 'fifth'
        },
        {
            title: 'Przestrzeń publiczna przed blokiem - Rumia',
            author: 'Zofia Dzielińska',
            info: 'Czasami trzeba zaprojektować przestrzeń publiczną , która należy do Wszystkich. Takie miejsca oprócz funkcji dekoracyjnej muszą być funkcjonalne. Zadbane wejścia , czy przdogródki w blokach podnoszą atrakcyjność takiego miejsca i cieszą samych mieszkańców, wpływając pozytywnie na ich samopoczucie , klimat oraz różnorodność biologiczną. Proponowane rośliny powinny być samoobsługowe , jak i odporne na warunki pogodowe np. susze.',
            keyForButton: 'sixth'
        },
    ]

}

export default GardeningConfig;