import {
    Chart as ChartJS,
    Filler,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Doughnut } from 'react-chartjs-2';
  import TitleCard from './TitleCard';
 
  
  ChartJS.register(ArcElement, Tooltip, Legend,
      Tooltip,
      Filler,
      Legend);
  
  const DoughnutChart = ({approvedevents}) => {
    const csEvents = approvedevents?.filter(event => event.category==="Computer science" )
    const csPourcentage=(csEvents?.length/approvedevents?.length)*100
    console.log("dddd",csPourcentage)

    const roboticsEvents = approvedevents?.filter(event => event.category==="Robotics" )
    const rPourcentage=(roboticsEvents?.length/approvedevents?.length)*100
    console.log("dddd",rPourcentage)

    const culturalEvents = approvedevents?.filter(event => event.category==="Cultural" )
    const cPourcentage=(culturalEvents?.length/approvedevents?.length)*100
    console.log("dddd",cPourcentage)

  
      const options = {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
        };
        
        const labels = ['Computer Science', 'Robotics', 'Cultural'];
        
        const data = {
          labels,
          datasets: [
              {
                  label: '# of events',
                  data: [csPourcentage, rPourcentage, cPourcentage],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                   
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                   
                  ],
                  borderWidth: 1,
                }
          ],
        };
  
      return(
          <TitleCard title={"Events by Category"}>
                  <Doughnut options={options} data={data} />
          </TitleCard>
      )
  }
  
  
  export default DoughnutChart