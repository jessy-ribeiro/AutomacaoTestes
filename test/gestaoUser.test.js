import { realizarLogin } from "../src/gestaoUser.js";
import assert from "node:assert";

describe('Testando Função de gestão de usuários', function () {

    it('Validar login realizado com sucesso', function () {

        //Arrange
        const email = 'maria@user.com';
        const senha = '123456';
        const mensagemEsperada = 'Login realizado com sucesso';

        //Act
        const retornoDaFuncao = realizarLogin(email, senha);

        //Assert
        assert.equal(retornoDaFuncao, mensagemEsperada);
    });

    it('Validar credencial expirada', function () {

        //Arrange
        const email = 'joao@user.com';
        const senha = 'senha123';
        const mensagemEsperada = 'Renove suas credenciais';

        //Act
        const retornoDaFuncao = realizarLogin(email, senha);

        //Assert
        assert.equal(retornoDaFuncao, mensagemEsperada);
    });

    it('Validar usuário não encontrado', function () {

        //Arrange
        const email = 'usuarioinexistente@email.com';
        const senha = '123456';
        const mensagemEsperada = 'Credenciais incorretas';

        //Act
        const retornoDaFuncao = realizarLogin(email, senha);

        //Assert
        assert.equal(retornoDaFuncao, mensagemEsperada);
    });

    it('Validar senha incorreta para o usuário encontrado', function () {

        //Arrange
        const email = 'caio@user.com';
        const senha = 'senhaErrada';
        const mensagemEsperada = 'Credenciais incorretas';

        //Act
        const retornoDaFuncao = realizarLogin(email, senha);

        //Assert
        assert.equal(retornoDaFuncao, mensagemEsperada);
    });

});