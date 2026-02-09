import Header from "./Header";
import MemberCard from "./MemberCard";
import ActivityList from "./ActivityList";
import './App.css'

function App() {
  return (
    <>
    <Header />
    <>________________________________________________________________</>
    <h2>Members List</h2>
    <>________________________________________________________________</>
    <table>
      <MemberCard 
      name="Charmaine Danes Dagusen" 
      course="BSIT" status="Active" 
      email="20255342@s.ubaguio.edu" 
      phone="09060855974" 
      activities= {[""]} />
      <ActivityList />
    </table>
    <>________________________________________________________________</>
    <table>
      <MemberCard
      name="Ashley Izabelle Carorocan" 
      course="BSCE" 
      status="Active" 
      email="20257843@s.ubaguio.edu" 
      phone="09450855987" 
      activities= {[""]} />
      <ActivityList />
    </table>
    <>________________________________________________________________</>
    <table>
    <MemberCard
      name="MJ Kyle Stephen Domondon" 
      course="BMMA" 
      status="Active" 
      email="20256364@s.ubaguio.edu" 
      phone="098560855965" 
      activities= {[""]} />
      <ActivityList />
    </table>

    <h2>Members Activities</h2>
    <ActivityList />
    </>
  )
}

export default App
