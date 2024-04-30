import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { FormatAlignJustify } from '@mui/icons-material';

const ImageDetailsPage = () => {
  const { id } = useParams();

  // Fetch deity details based on the ID (e.g., from an API)
  const deityDetails = {
    // 1: { title: 'Ganesha', imageUrl: 'https://play-lh.googleusercontent.com/8ZfoHwsH-3bwhNJal0EO3ZOozKi7oI0rJd4KvmhW-DppNWHdb4FIQvH8vMn2TM27XPE', description: 'The deity of intellect and wisdom.' },
    1: { title: 'Thiruvizha', imageUrl: 'https://i.pinimg.com/564x/52/a6/d1/52a6d1abba000b518a5bf716b5ce8979.jpg',description: 'The deity of intellect and wisdom.with new moon and full moon respectively). As a result, the same day may refer to belonging to different but adjoining months. If a festival occurs during śukla paksha, the two traditions assign it to the same month; if a festival occurs during kṛṣṇa paksha the two traditions assign it to different but adjoining months' },

        2: { title: 'Kambam Thiruvizha', imageUrl: 'https://media.maalaimalar.com/h-upload/2023/04/08/1862800-07.webp', description: 'The deity of intellect and wisdom.with new moon and full moon respectively). As a result, the same day may refer to belonging to different but adjoining months. If a festival occurs during śukla paksha, the two traditions assign it to the same month; if a festival occurs during kṛṣṇa paksha the two traditions assign it to different but adjoining months' },
    
    3: { title: 'Pongal Thiruvizha', imageUrl: 'https://c8.alamy.com/comp/ET09W2/women-celebrating-pongal-festival-tamil-nadu-india-ET09W2.jpg', description: 'The deity of intellect and wisdom.with new moon and full moon respectively). As a result, the same day may refer to belonging to different but adjoining months. If a festival occurs during śukla paksha, the two traditions assign it to the same month; if a festival occurs during kṛṣṇa paksha the two traditions assign it to different but adjoining months' },
    4: { title: 'Thiruvizha', imageUrl: 'https://i.pinimg.com/474x/c4/28/62/c42862a30755b991b7daab27af42deaa.jpg', description: 'The deity of intellect and wisdom.with new moon and full moon respectively). As a result, the same day may refer to belonging to different but adjoining months. If a festival occurs during śukla paksha, the two traditions assign it to the same month; if a festival occurs during kṛṣṇa paksha the two traditions assign it to different but adjoining months' },
    5: { title: 'Manjal neer', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZk1P-Aduk16J1G8VKjEOaV-bFLC-GnTZbA3M0rglHYE5rLljJuh_AP1mNxWEFzA2OoTc&usqp=CAU', description: 'The deity of intellect and wisdom.with new moon and full moon respectively). As a result, the same day may refer to belonging to different but adjoining months. If a festival occurs during śukla paksha, the two traditions assign it to the same month; if a festival occurs during kṛṣṇa paksha the two traditions assign it to different but adjoining months' },
    6: { title: 'Annual Chariot Festival', imageUrl: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2018/4/28/w600X300/A_tale_of_two.jpg?w=400&dpr=2.6', description: 'The deity of intellect and wisdom.with new moon and full moon respectively). As a result, the same day may refer to belonging to different but adjoining months. If a festival occurs during śukla paksha, the two traditions assign it to the same month; if a festival occurs during kṛṣṇa paksha the two traditions assign it to different but adjoining months. he deity of intellect and wisdom.with new moon and full moon respectively). As a result, the same day may refer to belonging to different but adjoining months. If a festival occurs during śukla paksha, the two traditions assign it to the same month; if a festival occurs during kṛṣṇa paksha the two traditions assign it to different but adjoining months' },
    7: { title: 'KaragamFestival', imageUrl: 'https://c8.alamy.com/comp/2G1FKDE/karagam-tanz-anthimahakallai-kavu-festival-in-cheelakkarai-bei-thrissur-kerala-indien-2G1FKDE.jpg', description: 'The deity of intellect and wisdom.with new moon and full moon respectively). As a result, the same day may refer to belonging to different but adjoining months. If a festival occurs during śukla paksha, the two traditions assign it to the same month; if a festival occurs during kṛṣṇa paksha the two traditions assign it to different but adjoining months' },
    8: { title: 'Agni-gundam Festival', imageUrl: 'https://funglitz.com/wp-content/uploads/2022/04/images-2.jpg', description: 'The deity of intellect and wisdom.' },
    9: { title: 'Kavadi Festival', imageUrl: 'https://www.atyutka.com/wp-content/uploads/2021/11/KavadiAttam-2100x1200.jpg', description: 'The deity of intellect and wisdom.' },

    // Add more deity details as needed
  };
  
  const deity = deityDetails[id];

  if (!deity) {
    return <div>Deity not found</div>;
  }

  return (
    <>
    <div>
     <Header/>
      <h2>{deity.title}</h2>
      <img src={deity.imageUrl} alt={deity.title} style={{marginLeft:"300px"}} />
      <p>{deity.description}</p>
    </div>
    <Footer/>
    </>
  );
};

export default ImageDetailsPage;