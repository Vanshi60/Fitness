const ctx = document.getElementById('studyChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Study',
        data: [4, 3, 2, 3, 1, 4, 5],
        backgroundColor: '#3b82f6',
        barThickness: 14,   // 👈 SLIM BARS
        borderRadius: 10
      },
      {
        label: 'Revision',
        data: [2, 2, 1, 2, 1, 3, 4],
        backgroundColor: '#8b5cf6',
        barThickness: 14,   // 👈 SLIM BARS
        borderRadius: 10
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#e5e7eb'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});
