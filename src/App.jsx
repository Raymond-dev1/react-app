import Hero  from './components/Hero';
import Features  from './components/Features';
import Navbar  from './components/Navbar';
import Testimonials  from './components/Testimonials';
import Count from './components/count'
import Form from './components/form'
import Pairs from './components/pairs'


 export default function App(){
  return(
    <div className= "min-h-screen bg-slate-950 text-white overflow-hidden">
    <Count />
    <Form />
    <Pairs />
    {/* <Hero />
    <Features />
    <Navbar />
    <Testimonials />   */}
     </div> 
  );
}












    





// export function AlertButton({message , children}){
// return(
//   <button onClick={()=>alert(message)}>
//     {children}
//     </button>
// );
// }

// export default function Toolbar(){
//   return(
//     <div>
//       <AlertButton message="looking">
//         tap to look
//       </AlertButton>
//       <AlertButton message="jump">
//         tap to jump
//       </AlertButton>
//     </div>
//   );
// }


