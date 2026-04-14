const dataEncontro = new Date (2025, 4, 30, 0, 0, 0, 0); // 30 de maio de 2025
const campoMeses = document.getElementById('meses');
const campoDias = document.getElementById('dias');
const campoHoras = document.getElementById('horas');
const campoMinutos = document.getElementById('minutos');
const campoSegundos = document.getElementById('segundos');


setInterval(() => {
    const dataAtual = new Date();
    const diferenca = dataAtual - dataEncontro;

    // transformacao dos tempos

    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const totalDias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const meses = Math.floor(totalDias / 30);
    const dias = totalDias % 30;
    
        
    campoMeses.innerText = `${String(meses).padStart(2, '0')} :`;
    campoDias.innerText = `${String(dias).padStart(2, '0')} :`;
    campoHoras.innerText = `${String(horas).padStart(2, '0')} :`;
    campoMinutos.innerText = `${String(minutos).padStart(2, '0')} :`;
    campoSegundos.innerText = String(segundos).padStart(2, '0');

}, 1000);
