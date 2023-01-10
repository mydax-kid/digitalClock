class DigitalClock {
  
  constructor(element){
    this.element= element;
  }
  
  
  start() {
    setInterval( ()=>{
      this.updateTime()
    }, 1000);
  }
    
  getTime(){
       const date= new Date();
       
       return {
         hour: date.getHours() % 12 || 12,
         mins: date.getMinutes(),
         secs: date.getSeconds(),
         isAm: date.getHours() < 12
       }
     }
  
  updateTime(){
      const timenow = this.getTime();
      
      const minutes= timenow.mins.toString().padStart(2,'0');
      const seconds= timenow.secs.toString().padStart(2,'0');
      const ampm= timenow.isAm ? 'AM' : 'PM' ;
      const fullTime= `${timenow.hour}: ${minutes}: ${seconds}`;
      
      this.element.querySelector('.clock-time').textContent= fullTime;
      this.element.querySelector('.clock-period').textContent= ampm;
    }
    
}

clockElement= document.querySelector('.clock');

const clockObject = new DigitalClock(clockElement);
clockObject.start();
