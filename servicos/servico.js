import colecaoUf from '../dados/dados.js';

export const buscarUfs = () => {
    return colecaoUf;
};

export const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase())); //filter serve para filtrar, já o includes serve para pegar apenas uma parte
};

export const buscarUfPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
};