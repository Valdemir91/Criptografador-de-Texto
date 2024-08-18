document.getElementById('encrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let encryptedText = inputText
        .replace(/a/g, 'ai')
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    let decryptedText = inputText
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('output-text').value = decryptedText;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    // prompt('Texto copiado para a área de transferência!');//
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('input-text').value = '';
    document.getElementById('output-text').value = '';
});

document.getElementById('secret-btn').addEventListener('click', function() {
    alert('Segredo da Criptografia: \nA = ai, \nE = enter, \nI = imes, \nO = ober, \nU = ufat\
        \nAgora que você ja sabe o segredo da criptografia,\
        \nenvie desafios de textos criptografados para seus amigos (a)\
        \ne veja se eles conseguem resolve-los!');
});
