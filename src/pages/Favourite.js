 import {useContext} from 'react';
 import FavoritesContext from '../store/FavouriteContext';
 import MeetupList from '../components/Meetups/MeetupList';
 function Favourite() {
     const favoriteCtx =useContext(FavoritesContext);

     let content;
     if(favoriteCtx.totalFavorites===0){
        content= <p>You got no favorit yet, start adding some!</p>
     }else{
          content= <MeetupList meetups={favoriteCtx.favorites}/>
     }

    return (
        <section>
            <h1>My Favourites</h1>
            {content}
        </section>
    )
}
export default Favourite;
