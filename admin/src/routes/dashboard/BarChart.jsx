import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useEffect } from 'react';
import { useState } from 'react';
  import { Bar } from 'react-chartjs-2';
import { useGetOrgnizationsQuery } from '../../endpoints/apiEndpoints';
  import TitleCard from './TitleCard';
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  
  const BarChart =({approvedorgs, pendingorgs}) =>{
  
    //Approved
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

    //pending

    const [positionn, setPositionn] = useState({ j: 0, f: 0 , m:0, a:0, may:0, jun:0, ju:0, aug:0, sep:0, oct:0, no:0, de:0});
    let j=0
    let f=0
    let m=0
    let a=0
    let may=0
    let jun=0
    let july=0
    let aug=0
    let sep=0
    let oct=0
    let no=0
    let de=0



    useEffect(()=>{
      //Approved
      for(let i=0;i<=approvedorgs?.length+1;i++){
       // console.log("ttt",approvedorgs.approvedorgs[i])
       
        switch(new Date(approvedorgs[i]?.creationDate).getMonth()){
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

      
    
    },[approvedorgs])


    useEffect(()=>{
      //Pending
      for(let i=0;i<=pendingorgs?.length+1;i++){
      
       
        switch(new Date(pendingorgs[i]?.creationDate).getMonth()){
          case 0 :
              j=j+1
              break
          case 1 :
            f=f+1
            break
          case 2: 
            m=m+1
            break
          case 3 :
            a=a+1
            break
          case 4 :
              may=may+1
              break
          case 5 :
                jun=jun+1
                break
          case 6 :
                  july=july+1
                  break
          case 7 :
                  aug=aug+1
                  break
          case 8 :
                  sep=sep+1
                   break
          case 9 :
                    oct=oct+1
                    break
          case 10 :
                  no=no+1
                      break
          case 11 :
                  de=de+1
                        break

         
        }
      }
      if(j!=0){
        positionn.j=j
      }
      if(f!=0){
        positionn.f=f
      }
      if(m!=0){
        positionn.m=m
      }
      if(a!=0){
        positionn.a=a
      }
      if(may!=0){
        positionn.may=may
      }
      if(jun!=0){
        positionn.jun=jun
      }
      if(july!=0){
        positionn.ju=july
      }
      if(aug!=0){
        positionn.aug=aug
      }
      if(sep!=0){
        positionn.sep=sep
      }
      if(oct!=0){
        positionn.oct=oct
      }
      if(no!=0){
        positionn.no=no
      }
      if(de!=0){
        positionn.de=de
      }

      
    
    },[pendingorgs])
  
 
  console.log("eeeeee",positionn)
  
      const options = {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            }
          },
        };
        
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
        
        const data = {
          labels,
          datasets: [
            {
              label: 'Approved',
              data: labels.map((label) => { 

                // return Math.random() * 1000 + 500 
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
              backgroundColor: 'rgba(255, 99, 132, 1)',
            },
            {
              label: 'Pending',
              data: labels.map((label) => { 
                // return Math.random() * 1000 + 500
                if(label==='January')
                return positionn.j
                if(label==='February')
                return positionn.f*100
                if(label==='March')
                return positionn.m
                if(label==='April')
                return positionn.a
                if(label==='May')
                return positionn.may
                if(label==='June')
                return positionn.jun
                if(label==='July')
                return positionn.ju
                if(label==='August')
                return positionn.aug
                if(label==='September')
                return positionn.sep
                if(label==='October')
                return positionn.oct
                if(label==='November')
                return positionn.no
                if(label==='December')
                return positionn.de
               }),
              backgroundColor: 'rgba(53, 162, 235, 1)',
            },
          ],
        };
  
      return(
        <TitleCard title={"Approved and Pending organizations per Month"} topMargin="mt-2">
              <Bar options={options} data={data} />
        </TitleCard>
  
      )
  }
  
  
  export default BarChart