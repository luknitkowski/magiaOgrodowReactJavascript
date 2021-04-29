type ObjForBushes = {
    type: string,
    description: string
}

type PlantNurseryConfigType = {
    bushesList: Array<ObjForBushes>,
    plantImages: Array<number>,
    titleMainInfo: string,
    mainInfo: string,
    additionalInfo: string
}

const PlantNurseryConfig: PlantNurseryConfigType = {
    bushesList: [
    {
      type: 'Drzewa i krzewy iglaste',
      description: 'Większość roślin iglastych to gatunki zimozielone, ale można znaleźć gatunki gubiące igły na zimę. Różnorodność kształtów i kolorów jest ogromna. Iglaki są nieocenionym elementem ożywiającym krajobraz zimowy.'
    },
    {
      type: 'Drzewa i krzewy liściaste',
      description: 'Od zawsze zajmowały szczególne miejsce w otoczeniu ludzi. Tworzą urozmaiconą grupę. Są to rośliny o różnych formach pokrojowych, o barwnych i wymyślnych liściach, dekoracyjnych kwiatach i owocach. Zastosowanie ich to wprowadzenie życia do ogrodu, pozbycie się nudy i monotonii.'
    },
    {
      type: 'Drzewa i krzewy owocowe',
      description: 'Dostarczają smacznych owoców, które można wykorzystać na różne sposoby. Zbiory z własnych drzewek i krzewów smakują lepiej i sprawiają dużo radości. Większość drzewek zaszczepione są na podkładkach karłowych, które można wysadzać nawet w najmniejszych ogrodach.'
    },
    {
      type: 'Pnącza',
      description: 'To rośliny szczególne wytwarzające dużą masę zieleni lub kwiatów. Potrafią zdynamizować każdą przestrzeń, zapełniają trzeci wymiar tworząc kolorowe, pionowe ściany'
    },
    {
      type: 'Byliny',
      description: 'Są zielonymi roślinami wieloletnimi zimującymi w gruncie i wyrastającymi ponownie każdego roku. Różnorodność bylin pozwala zagospodarować każdy zakątek w ogrodzie. Można dobrać byliny dobrze czujące się w słońcu, cieniu, na glebach suchych i podmokłych.'
    },
    {
      type: 'Rośliny jednoroczne',
      description: 'Grupa roślin ozdobnych. Ich rozwój przebiega przez jeden sezon wegetacyjny, co oznacza, że potrzebują one więcej uwagi i naszego zaangażowania, dzięki temu pokażą nam swoje najpiękniejsze oblicze.'
    }
  ],
  plantImages: [2,3,4,5,6,7,8,9,11,13,14,15,16,17,18,19,20],
  titleMainInfo: 'NASZA SZKÓŁKA',
  mainInfo: 'W naszej szkółce znajdziecie Państwo rośliny w pojemnikach, które można wysadzać przez cały okres wegetacyjny tj. od wczesnej wiosny do próżnej jesieni. Dokładamy wszelkich starań, aby nasz materiał roślinny był najwyższej jakości . Z każdym sezonem zwiększamy nasz asortyment o ciekawe gatunki i odmiany, których stale przybywa na rynku ogrodniczym. Zadowolenie i radość klientów to nasz priorytet.',
  additionalInfo: 'Jeśli chcesz zobaczyć wiecej zdjęć to zapraszamy na naszą stronę na facebooku! Link znajdziesz na dole strony.'
}

export default PlantNurseryConfig;