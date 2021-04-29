type Column = {
    title: string,
    list: Array<string>
}


type ProjectsConfigType = {
    mainInfo: string,
    firstColumn: Column,
    secondColumn: Column,
    iframeLinkToYT: string
}

const ProjectsConfig: ProjectsConfigType = {
    mainInfo: 'Ładny ogród nie jest na ogól dziełem przypadku, lecz wynikiem dobrego planowania. Zarówno zakładanie ogrodu, jak i jego przekształcanie wymagają gruntownych rozważań. Na ogród nie można patrzeć jak na sumę poszczególnych części, należy go traktować jako całość , zharmonizowaną z domem i otoczeniem. Zaprojektowanie ciekawego ogrodu z charakterem nie jest proste, dlatego warto powierzyć to zadanie fachowcom. Dzięki temu unikniemy wielu błędów i przypadkowości w ogrodzie, a później nie będziemy musieli przemeblowywać ogrodu przez kilka następnych lat. Do prac projektowych potrzebna będzie nam mapka do celów projektowych z naniesionymi budynkami lub tez nawierzchniami, jeżeli już takie istnieją. W czasie spotkania wysłuchamy Państwa życzeń i oczekiwań, dotyczących ogrodu. Na następnym spotkaniu przedstawie dwie koncepcie o których porozmawiamy wspólnie i wybierzemy jedną, na podstawie której powstanie projekt.',
    firstColumn:{
        title: 'Usługi projektowe',
        list: [
            'projekty koncepcyjne ogrodów i terenów zieleni',
            'projekty zieleni przy firmach, hotelach, kawiarniach, restauracjach',
            'projekty zieleni osiedlowej',
            'projekty zieleni na tarasach, balkonach',
            'nadzór autorski podczas realizacji projektów',
            'wizualizacje'
        ]
    },
    secondColumn:{
        title: 'Przykładowy projekt zawiera',
        list: [
            'projekt koncepcyjny zagospodarowania terenu',
            'projekt techniczny  z doborem roślin',
            'wykaz roślinności z uwagami pielęgnacyjnymi',
            'wizualizacje'
        ]
    },
    iframeLinkToYT: 'https://www.youtube.com/embed/gtWyCMKXjMk'
}

export default ProjectsConfig;