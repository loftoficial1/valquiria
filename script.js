/* ABRIR MODAL */

function abrirForm(){

    document
    .getElementById("recruitModal")
    .style.display = "flex"

}



/* FECHAR MODAL */

function fecharForm(){

    document
    .getElementById("recruitModal")
    .style.display = "none"

}




/* ENVIAR RECRUTAMENTO */

async function enviarForm(){


    let nick =
    document
    .getElementById("nick")
    .value



    let funcao =
    document
    .getElementById("funcao")
    .value



    let descricao =
    document
    .getElementById("descricao")
    .value



    let motivo =
    document
    .getElementById("motivo")
    .value




    /* VERIFICAR CAMPOS */

    if(
        nick == "" ||
        descricao == "" ||
        motivo == ""
    ){

        alert(
        "Preencha todos os campos"
        )

        return

    }




    /* WEBHOOK DISCORD */

    let webhook =

    "COLE_WEBHOOK_AQUI"




    /* EMBED */

    let mensagem = {

        embeds:[{

            title:
            "⚔️ NOVO RECRUTAMENTO VALK ⚔️",

            color:0xff003c,



            thumbnail:{

                url:
                "https://cdn.discordapp.com/embed/avatars/0.png"

            },



            fields:[

                {

                    name:
                    "👤 NICK DO JOGADOR",

                    value:nick,

                    inline:false

                },



                {

                    name:
                    "⚔️ FUNÇÃO",

                    value:funcao,

                    inline:false

                },



                {

                    name:
                    "📜 DESCRIÇÃO",

                    value:descricao,

                    inline:false

                },



                {

                    name:
                    "🔥 POR QUE ENTRAR?",

                    value:motivo,

                    inline:false

                }

            ],



            footer:{

                text:
                "VALK RECRUTAMENTO"

            },



            timestamp:
            new Date()

        }]
    }




    /* ENVIAR */

    try{


        await fetch(webhook,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(mensagem)

        })



        alert(
        "Recrutamento enviado!"
        )



        /* LIMPAR */

        document
        .getElementById("nick")
        .value = ""



        document
        .getElementById("descricao")
        .value = ""



        document
        .getElementById("motivo")
        .value = ""



        fecharForm()


    }catch(err){

        alert(
        "Erro ao enviar recrutamento"
        )

        console.log(err)

    }

}




/* FECHAR CLICANDO FORA */

window.onclick = function(event){

    let modal =
    document.getElementById(
    "recruitModal"
    )



    if(event.target == modal){

        fecharForm()

    }

}
