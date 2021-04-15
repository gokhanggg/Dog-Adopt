import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ResponsiveLayout from '../../components/ResponsiveLayout';
import DogCard from '../../components/DogCard';
import DogCardExtendedView from '../../components/DogCardExtendedView';
import { useApplicationContext } from '../../contexts/applicationContext';
import { getAllDogs } from '../../api';

const DogCards = () => {
  const {
    dogsToShow = []
  } = useApplicationContext();
  const [allDogData, setAllDogData] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [modalDog, setModalDog] = useState({
    id: 1,
    name: 'Duman',
    sex: 'male',
    age: 9,
    address: 'Ankara',
    phone: '123467896',
    img: 'img',
    desc: `Hi, there. I'm Duman, a big fella finding his way in this brave new world.
    I'm a shy guy who is becoming more social and trusting. My crate is my safe space, but I like going for walks and romping around with playful dogs. 
    Cats are OK, but new people, kids and loud noises can be scary! Give me a little time to get to know and trust you. We'll be friends in no time, I promise.
    Things can be pretty frightening for me sometimes, but I'll feel a lot braver with you at my side. Are you the human hero I'm looking for? Apply to meet me today! `,
  });

  useEffect(() => {
    getAllDogs().then(res => {
      console.log(res)
      setAllDogData(res.data.content);
  })}, [])

  const openDogInModal = (id) => {
    const dogToShow = allDogData.find(d => d.id === id);
    setModalDog(dogToShow);
    setIsModelOpen(true);
  }

  return (
    <ResponsiveLayout>
      {dogsToShow.map(({
        id,
        name,
        sex,
        age,
        address,
        img
      }) => (
        <DogCard
          key={id}
          id={id}
          name={name}
          sex={sex}
          age={age}
          address={address}
          img={img}
          onShowMoreClick={openDogInModal}
        />
      ))}
      <Modal
        isOpen={isModelOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsModelOpen(false)}
        style={{
          content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            padding: 0,
            maxWidth: '90%'
          }
        }}
      >
        <DogCardExtendedView
          {...modalDog}
        />
      </Modal>
    </ResponsiveLayout>
  )
}

export default DogCards;