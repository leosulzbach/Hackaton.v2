const getCategoria = (id) => {
    return axios.get(`http://177.44.248.55:3000/categorias/` + id);
}

const loadTable = () => {
    axios.get(`http://177.44.248.55:3000/categorias`)
        .then((response) => {
            const data = response.data;
            var trHTML = '';
            data.forEach(element => {
                trHTML += '<tr>';
                trHTML += '<td>' + element.id + '</td>';
                trHTML += '<td>' + element.descricao + '</td>';
                trHTML += '<td>' + element.preco + '</td>';
                trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showCategoriaEditBox(' + element.id + ')">Edit</button>';
                trHTML += '<button type="button" class="btn btn-outline-danger" onclick="categoriaDelete(' + element.id + ')">Del</button></td>';
                trHTML += "</tr>";
            });
            document.getElementById("mytable").innerHTML = trHTML;
        })
};

loadTable();



const categoriaEdit = () => {
    const id = document.getElementById("id").value;
    const descricao = document.getElementById("descricao").value;
    const preco = document.getElementById("preco").value;
    axios.put(`http://177.44.248.55:3000/categorias/` + id, {
        descricao: descricao,
        preco: preco,
    })
        .then((response) => {
            Swal.fire(`Categoria ${response.data.descricao} updated`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to update categoria: ${error.response.data.error} `)
                .then(() => {
                    showCategoriaEditBox(id);
                })
        });
}

const categoriaDelete = async (id) => {
    const categoria = await getCategoria(id);
    const data = categoria.data;
    axios.delete(`http://177.44.248.55:3000/categorias/` + id)
        .then((response) => {
            Swal.fire(`Categoria ${data.descricao} deleted`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to delete Categoria: ${error.response.data.error} `);
            loadTable();
        });
};

const categoriaCreate = () => {
    const descricao = document.getElementById("descricao").value;
    const preco = document.getElementById("preco").value;
    axios.post(`http://177.44.248.55:3000/categorias`, {
        descricao: descricao,
        preco: preco,
    })
        .then((response) => {
            Swal.fire(`Categoria ${response.data.descricao} created`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to create Categoria: ${error.response.data.error} `)
                .then(() => {
                    showCategoriaCreateBox();
                })
        });
}


const showCategoriaCreateBox = async () => {
    Swal.fire({
        title: 'Create categoria',
        html:
            '<input id="id" type="hidden">' +
            '<input id="descricao" class="swal2-input" placeholder="Descricao">' +
            '<input id="preco" class="swal2-input" placeholder="Preço">',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            categoriaCreate();
        }
    });
}

const showCategoriaEditBox = async (id) => {
    const categoria = await getCategoria(id);
    const data = categoria.data;
    Swal.fire({
        title: 'Edit categoria',
        html:
            '<input id="id" type="hidden" value=' + data.id + '>' +
            '<input id="descricao" class="swal2-input" placeholder="Descricao" value="' + data.descricao + '">' +
            '<input id="preco" class="swal2-input" placeholder="Preco" value="' + data.preco + '">',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            categoriaEdit();
        }
    });
}
