//IMPORTAÇAO DO PACOTE SEQUELIZE
const { SequelizeScopeError } = require('sequelize');
const sequelize = require('sequelize');

//IMPORTAÇAO DO ARQUIVO DE CONEXAO COM BANCO DE DADOS
const connection = require('../database/database');

/*
PARAMETROS METODO DEFINE
1-NOME DA TABELA - STRING
2-TIPO DE DADO DO CAMPO
3-REGRAS DO CAMPO DA TABELA (NULL, NOT NULL)
*/
const  modelCategoria = connection.define(
    'tbl_categoria',
    {
        cod_categoria:{

            type: Sequelize.INTEGER,

            primaryKey: true,

            autoIncrement:true

        },

        nome_categoria:{

            type: Sequelize.STRING(100),

            allowNull: false

        }
    }
);

module.export =  router;