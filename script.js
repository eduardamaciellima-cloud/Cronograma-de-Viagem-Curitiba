const ctx = document.getElementById('graficoPizza').getContext('2d');

const graficoPizza = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [
      'Passagem de avião', 
      'Hospedagem', 
      'Alimentação', 
      'Transporte'
    ],
    datasets: [{
      label: 'Valor Total (R$)',
      data: [1300, 1000, 500, 150],
      backgroundColor: [
        '#4A90E2', // Passagem
        '#50E3C2', // Hospedagem
        '#F5A623', // Alimentação
        '#E35050'  // Transporte
      ],
      borderWidth: 2,
      borderColor: '#ffffff'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            let value = context.raw || 0;
            return ` ${label}: R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
          }
        }
      }
    }
  }
});
