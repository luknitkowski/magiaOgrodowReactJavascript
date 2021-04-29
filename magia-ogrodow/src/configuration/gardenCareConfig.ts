type GardenCareConfigType = {
    mainInfo: string,
    firstColumn: Array<string>
}

const GardenCareConfig: GardenCareConfigType = {
    mainInfo: 'W czystym i zadbanym ogrodzie odpoczywa się znacznie przyjemniej.  W naszej ofercie znajdziecie Państwo także tę usługę. Koszt zalezy od indywidualnej oceny stanu ogrodu oraz nakładu pracy.',
    firstColumn: [
        'opryski wiosenne i jesienne',
        'koszenie trawników',
        'napowietrzanie (wertykulacja) trawników',
        'formowanie żywopłotów',
        'nawożenie roślin',
        'ochrona roślin',
        'plewienie ( odchwaszczanie)',
        'spulchnianie gleby',
        'nasadzenia'
    ]
}

export default GardenCareConfig;