import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import { useEffect, useState } from 'react';
  import { Line } from 'react-chartjs-2';
  import TitleCard from './TitleCard';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
  const LineChart = ({approvedevents}) => {
    const [position, setPosition] = useState({ j: 0, f: 0 , m:0, a:0, may:0, jun:0, ju:0, aug:0, sep:0, oct:0, no:0, de:0});

    let jj=0
    let ff=0
    let mm=0
    let aa=0
    let ma=0
    let ju=0
    let jul=0
    let au=0
    let ss=0
    let oc=0
    let nov=0
    let dec=0

    useEffect(()=>{
      //Approved
      for(let i=0;i<=approvedevents?.length+1;i++){
       // console.log("ttt",approvedorgs.approvedorgs[i])
       
        switch(new Date(approvedevents[i]?.date).getMonth()){
          case 0 :
              jj=jj+1
              break
          case 1 :
            ff=ff+1
            break
          case 2: 
            mm=mm+1
            break
          case 3 :
            aa=aa+1
            break
          case 4 :
              ma=ma+1
              break
          case 5 :
                ju=ju+1
                break
          case 6 :
                  jul=jul+1
                  break
          case 7 :
                  au=au+1
                  break
          case 8 :
                  ss=ss+1
                   break
          case 9 :
                    oc=oc+1
                    break
          case 10 :
                  nov=nov+1
                      break
          case 11 :
                  dec=dec+1
                        break

         
        }
      }
      if(jj!=0){
        position.j=jj
      }
      if(ff!=0){
        position.f=ff
      }
      if(mm!=0){
        position.m=mm
      }
      if(aa!=0){
        position.a=aa
      }
      if(ma!=0){
        position.may=ma
      }
      if(ju!=0){
        position.jun=ju
      }
      if(jul!=0){
        position.ju=jul
      }
      if(au!=0){
        position.aug=au
      }
      if(ss!=0){
        position.sep=ss
      }
      if(oc!=0){
        position.oct=oc
      }
      if(nov!=0){
        position.no=nov
      }
      if(dec!=0){
        position.de=dec
      }

      
    
    },[approvedevents])

  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    };
  
    
    const labels =  ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
  
    const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'NEM',
        data: labels.map((label) => { 
          if(label==='January')
          return position.j
          if(label==='February')
          return position.f
          if(label==='March')
          return position.m
          if(label==='April')
          return position.a
          if(label==='May')
          return position.may
          if(label==='June')
          return position.jun
          if(label==='July')
          return position.ju
          if(label==='August')
          return position.aug
          if(label==='September')
          return position.sep
          if(label==='October')
          return position.oct
          if(label==='November')
          return position.no
          if(label==='December')
          return position.de
        }),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
    
  
      return(
        <TitleCard title={"Number of Events per month"}>
            <Line data={data} options={options}/>
        </TitleCard>
      )
  }
  
  
  export default LineChart