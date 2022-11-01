export enum menuPaths {
    homePage = 'homepage',
    galeria = 'galeria',
    formulario = 'formulario',
    comoAjudar = 'como-ajudar',
    quemSomos = 'quem-somos',
}

export enum menuNames {
    homePage = 'Home',
    galeria = 'Galeria',
    formulario = 'Formulário',
    comoAjudar = 'Como ajudar',
    quemSomos = 'Quem somos',
} 

export interface menuOptions {
    path: menuPaths;
    name: menuNames;
}
