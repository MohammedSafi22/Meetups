import { useNavigate } from "react-router-dom";
import NewMeetupsForm from '../components/Meetups/NewMeetupsForm';

function NewMeetup() {

     const navigate= useNavigate ();
     
    function addMeetupHandler(meetupData){
           fetch('https://react-example-5606b-default-rtdb.firebaseio.com/meetups.json',
           {
               method: 'POST',
               body: JSON.stringify(meetupData),
               headers: {
                   'Content-Type':'application/json'
               }
           }
           ).then(()=>{
            navigate('/');
           });
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupsForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}
export default NewMeetup;
