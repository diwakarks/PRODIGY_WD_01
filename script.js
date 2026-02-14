const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {
  const target = +counter.dataset.target;
  let count = 0;
  const increment = target / 200;

  const update = () => {
    if (count < target) {
      count += increment;
      counter.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };
  update();
};

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);

counters.forEach(counter => observer.observe(counter));

/* USERS GROWTH LINE CHART */
const usersCtx = document.getElementById('usersChart').getContext('2d');

new Chart(usersCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'User Growth',
      data: [200000, 400000, 600000, 900000, 1200000, 1500000],
      borderColor: '#ff4d4d',
      backgroundColor: 'rgba(255,77,77,0.1)',
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});


/* REVENUE BAR CHART */
const revenueCtx = document.getElementById('revenueChart').getContext('2d');

new Chart(revenueCtx, {
  type: 'bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Revenue (in Lakhs)',
      data: [15, 30, 45, 70],
      backgroundColor: '#3d6c48'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});
