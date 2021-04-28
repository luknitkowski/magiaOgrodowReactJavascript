type FooterConfigType = {
    mail: string,
    phone: string,
    street: string,
    city: string,
    mondayToFridayTimeOfWork: string,
    saturdayWork: string,
    additionalInfo: string,
    companyFacebookLink: string,
    developerLink: string,
    developerName: string
}

const FooterConfig: FooterConfigType = {
    mail: 'magiaogrodow@wp.pl',
    phone: '+48 606 652 317',
    street: 'Dębogórska 8',
    city: '84-230 Dębogórze Wybudowanie',
    mondayToFridayTimeOfWork: '9 - 18',
    saturdayWork: '9 - 15',
    additionalInfo: 'W okresie od 1 marca do 30 listopada',
    companyFacebookLink: 'https://www.facebook.com/Magia-Ogrod%C3%B3w-141887419310359/',
    developerLink: 'https://www.linkedin.com/in/lukasz-nitkowski-21025b132/',
    developerName: 'Łukasz Nitkowski'
}

export default FooterConfig;