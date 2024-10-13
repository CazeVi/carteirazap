import React, { useState } from 'react';
import './App.css';
import { Line } from 'react-chartjs-2';
import { FaHome, FaChartLine, FaHistory, FaCog, FaBars } from 'react-icons/fa'; // Ícones para o menu
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function App() {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true); // Controla o estado do menu

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded); // Alterna entre expandido e minimizado
  };

  const data = {
    labels: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
      'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
      'Novembro', 'Dezembro'
    ],
    datasets: [
      {
        label: 'Entradas',
        data: [300, 500, 200, 700, 400, 600, 450, 550, 300, 650, 500, 750],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Saídas',
        data: [200, 300, 250, 400, 350, 500, 300, 400, 350, 500, 600, 700],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Controle de Finanças',
      },
    },
  };

  return (
    <div className="dashboard-container">
      <aside className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="logo-container">
          <img
            src="https://www.carteirazap.com.br/wp-content/uploads/2024/06/logo-3-e1719455409944.png"
            alt="Logo"
            className="logo"
            style={{ display: isSidebarExpanded ? 'block' : 'none' }} // Esconde logo quando colapsado
          />
        </div>
        <button className="toggle-button" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <ul>
          <li>
            <a href="#">
              <FaHome className="icon" />
              {isSidebarExpanded && ' Minhas Finanças'}
            </a>
          </li>
          <li>
            <a href="#">
              <FaChartLine className="icon" />
              {isSidebarExpanded && ' Relatórios'}
            </a>
          </li>
          <li>
            <a href="#">
              <FaHistory className="icon" />
              {isSidebarExpanded && ' Histórico'}
            </a>
          </li>
          <li>
            <a href="#">
              <FaCog className="icon" />
              {isSidebarExpanded && 'Configurações'}
            </a>
          </li>
        </ul>
      </aside>

      <main className="content">
        <header className="dashboard-header">
          <h1>Bem-vindo, Cazeca!</h1>
        </header>

        <section className="cards">
          <div className="card">
            <h3>Saldo Inicial</h3>
            <p>1.000</p>
          </div>
          <div className="card">
            <h3>Entradas</h3>
            <p>300</p>
          </div>
          <div className="card">
            <h3>Saídas</h3>
            <p>200</p>
          </div>
          <div className="card">
            <h3>Saldo Final</h3>
            <p>100</p>
          </div>
          <div className="card">
            <h3>Investimentos</h3>
            <p>90.000</p>
          </div>
        </section>

        {/* Contêiner para o gráfico de linhas suaves */}
        <section className="chart-container">
          <h2>Gráfico de Controle</h2>
          <div className="chart-placeholder">
            <Line data={data} options={options} /> {/* Substitua todas as ocorrências de 'Bar' por 'Line' */}
          </div>
        </section>

        {/* Tabela de Resumo Financeiro */}
        <section className="summary-table">
          <h2>Resumo Financeiro</h2>
          <table>
            <thead>
              <tr>
                <th>Mês</th>
                <th>Entradas</th>
                <th>Saídas</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              {data.labels.map((mes, index) => (
                <tr key={mes}>
                  <td>{mes}</td>
                  <td>{data.datasets[0].data[index]}</td>
                  <td>{data.datasets[1].data[index]}</td>
                  <td>{data.datasets[0].data[index] - data.datasets[1].data[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App; // Exportar no final do arquivo
