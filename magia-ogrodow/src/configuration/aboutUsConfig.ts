type AboutUsConfigType = {
    signature: string,
    education: string,
    infoAboutOwner: string,
    mainInfos: Array<string>
}

const AboutUsConfig: AboutUsConfigType = {
    signature: 'Beata Kulling-Nitkowska',
    education: 'inż. architekt krajobrazu',
    infoAboutOwner: 'Praca w szkółce oraz zakładanie ogrodów nie jest dla mnie tylko pracą.... jest także pasją. Każdego klienta traktuję indywidualnie. Moją szkółkę i usługi cechuje wysoka jakość, a nie ilość.',
    mainInfos: [
        'Szkółka roślin ozdobnych Magia Ogrodów od 2010 roku zaprasza w świat roślin. Każdy miłośnik roślinności znajdzie u nas coś dla siebie, a osoby dopiero rozpoczynające przygodę z ogrodem dostaną od Nas uwagę i doświadczenie.',
        'Magia Ogrodów to przede wszystkim szkółka roślin w której można nabyć drzewa, krzewy, byliny , jak i kwiaty rabatowe. Prowadzimy sprzedaż roślin w doniczkach , które można sadzić przez cały okres wegetacyjny.',
        'Specjalizujemy się także w projektowaniu, zakładaniu oraz pielęgnacji ogrodów.',
        'Dołożymy wszelkich starań , aby Państwa ogrody były piękne i niepowtarzalne, dopasowane do indywidualnych potrzeb.'
    ],
}

export default AboutUsConfig;