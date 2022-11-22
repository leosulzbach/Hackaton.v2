const getTipo = (id) => {
    return axios.get(`http://177.44.248.55:3000/tipos/` + id);
}

const loadTable = () => {
    axios.get(`http://177.44.248.55:3000/tipos`)
        .then((response) => {
            console.log(response.data);
            const data = response.data;
            var trHTML = '';
            data.forEach(element => {
                trHTML += '<tr>';
                trHTML += '<td>' + element.id + '</td>';
                trHTML += '<td>' + element.descricao + '</td>';
                trHTML += '<td>' + element.percentual_ingresso + '</td>';
                trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showTipoEditBox(' + element.id + ')">Edit</button>';
                trHTML += '<button type="button" class="btn btn-outline-danger" onclick="tipoDelete(' + element.id + ')">Del</button></td>';
                trHTML += "</tr>";
            });
            document.getElementById("mytable").innerHTML = trHTML;
        })
};

loadTable();



const tipoEdit = () => {
    const id = document.getElementById("id").value;
    const descricao = document.getElementById("descricao").value;
    const percentual_ingresso = document.getElementById("percentual_ingresso").value;
    axios.put(`http://177.44.248.55:3000/tipos/` + id, {
        descricao: descricao,
        percentual_ingresso: percentual_ingresso,
    })
        .then((response) => {
            Swal.fire(`Tipo ${response.data.descricao} updated`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to update tipo: ${error.response.data.error} `)
                .then(() => {
                    showTipoEditBox(id);
                })
        });
}

const tipoDelete = async (id) => {
    const tipo = await getTipo(id);
    const data = tipo.data;
    axios.delete(`http://177.44.248.55:3000/tipos/` + id)
        .then((response) => {
            Swal.fire(`Tipo ${data.descricao} deleted`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to delete Tipo: ${error.response.data.error} `);
            loadTable();
        });
};

const tipoCreate = () => {
    const descricao = document.getElementById("descricao").value;
    const percentual_ingresso = document.getElementById("percentual_ingresso").value;
    axios.post(`http://177.44.248.55:3000/tipos`, {
        descricao: descricao,
        percentual_ingresso: percentual_ingresso,
    })
        .then((response) => {
            Swal.fire(`Tipo ${response.data.descricao} created`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to create Tipo: ${error.response.data.error} `)
                .then(() => {
                    showTipoCreateBox();
                })
        });
}


const showTipoCreateBox = async () => {
    Swal.fire({
        title: 'Create tipo',
        html:
            '<input id="id" type="hidden">' +
            '<input id="descricao" class="swal2-input" placeholder="Descricao">' +
            '<input id="percentual_ingresso" class="swal2-input" placeholder="percentual_ingresso">',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            tipoCreate();
        }
    });
}

const showTipoEditBox = async (id) => {
    const tipo = await getTipo(id);
    const data = tipo.data;
    Swal.fire({
        title: 'Edit tipo',
        html:
            '<input id="id" type="hidden" value=' + data.id + '>' +
            '<input id="descricao" class="swal2-input" placeholder="Descricao" value="' + data.descricao + '">' +
            '<input id="percentual_ingresso" class="swal2-input" placeholder="percentual_ingresso" value="' + data.percentual_ingresso + '">',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            tipoEdit();
        }
    });
}
