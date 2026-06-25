const biblioteca = {
    livros: [],

    adicionarLivros(nome, autor, ano, genero, estoque = 1) {
        const livro = {
            nome:nome,
            autor:autor,
            ano:ano,
            genero:genero,
            vezesAlugado: 0,
            estoque:estoque
        };

        this.livros.push(livro);
    },

    mostrarLivros() {
        for (let i = 0; i < this.livros.length; i++) {
            const l = this.livros[i];

            console.log(
                `${l.nome} - ${l.autor} - ${l.ano} - ${l.genero} - Estoque: ${l.estoque} - Disponível: ${l.estoque > 0 ? "Sim" : "Não"}`
            );
        }
    },

    alugar(nome) {
        for (let i = 0; i < this.livros.length; i++) {
            const l = this.livros[i];

            if (l.nome === nome) {
                if (l.estoque > 0) {
                    l.estoque--;
                    l.vezesAlugado++;

                    console.log(`O livro "${nome}" foi alugado com sucesso!`);
                    return;
                } else {
                    console.log(`O livro "${nome}" está sem estoque, por favor escolha outro livro.`);
                    return;
                }
            }
        }

        console.log(`O livro "${nome}" não existe na biblioteca.`);
    }
};


biblioteca.adicionarLivros(
    "Orgulho e Preconceito",
    "Jane Austen",
    1813,
    "Romance",
    2
);

biblioteca.adicionarLivros(
    "Como Eu Era Antes de Você",
    "Jojo Moyes",
    2012,
    "Romance"
);

biblioteca.mostrarLivros();

biblioteca.alugar("Orgulho e Preconceito");

biblioteca.mostrarLivros();