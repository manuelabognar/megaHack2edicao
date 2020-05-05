pragma solidity >=0.4.21 <0.7.0;


contract Registration {
    uint256 public registers = 0; // Variável global para indexar os blocos

    struct Register {
        uint256 id; // ID
        string data; // Dados
        bool valid; // Válido? Só será válidado no teste de hash
    }

    mapping(uint256 => Register) public registersChain; // Faz um mapeamento entre todos os registros

    event RegisterCreated(uint256 id, string data, bool valid); // Definindo o evento

    function createRegister(string memory _data) public {
        // Função que vai receber os dados para ser gravado no smart contract
        registers++; // Vai iterar o número de registros
        // Em um novo índice da cadeia de registros será atribuído o registro, que é uma struct...
        // Vai entrar o número do registro (seu ID), _data (os dados em JSON.stringfy) e o teste de autenticação/validade
        registersChain[registers] = Register(
            registers,
            _data,
            registersChain[registers].valid
        ); // Chamando a struct
        // Se o registersChain[registers].valid for TRUE
        //if (registersChain[registers].valid == true) {

        emit RegisterCreated(registers, _data, registersChain[registers].valid); // Dispara o evento RegisterCreated
        //}
    }
}
