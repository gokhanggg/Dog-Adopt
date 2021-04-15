import item1 from './images/item-1.jpg';
import item2 from './images/item-2.jpg';
import item3 from './images/item-3.jpg';
import item4 from './images/item-4.jpg';
import item5 from './images/item-5.jpg';
import item6 from './images/item-6.jpg';
import item7 from './images/item-7.jpg';
import item9 from './images/item-9.jpg';
import item10 from './images/item-10.jpg';
import item11 from './images/item-11.jpg';
import item12 from './images/item-12.jpeg';

const dogData = [
  {
    id: 1,
    name: 'Duman',
    sex: 'male',
    age: 9,
    address: 'ankara',
    phone: '123467896',
    img: item3,
    desc: `Hi, there. I'm Duman, a big fella finding his way in this brave new world.
    I'm a shy guy who is becoming more social and trusting. My crate is my safe space, but I like going for walks and romping around with playful dogs. 
    Cats are OK, but new people, kids and loud noises can be scary! Give me a little time to get to know and trust you. We'll be friends in no time, I promise.
    Things can be pretty frightening for me sometimes, but I'll feel a lot braver with you at my side. Are you the human hero I'm looking for? Apply to meet me today! `,
  },
  {
    id: 2,
    name: 'Anten',
    sex: 'female',
    age: 10,
    address: 'izmir',
    phone: '123467896',
    img: item4,
    desc: `Cheers, I'm Anten! I'm a loving and medium energy lady looking for her forever home. I would really shine in a calm and structured environment!
     I know all my basic commands like house training, crate training and leash walking. I really enjoy learning new stuff and pleasing my people. 
     I can be a choosy about my dog friends, so slow and patient intros are best to help me feel comfortable. 
     Serious cuddlers only, please!! Cuddling is my passion and I love to be close to my people. I'm a big ol' couch potato and I can spend my whole day there if you let me. 
    (Are there pillows? PLEASE say there are pillows!) I would do best with older kiddos who are gentle with doggos like me. `,
  },
  {
    id: 3,
    name: 'Isot',
    sex: 'male',
    age: 7,
    address: 'antalya',
    phone: '123467896',
    img: item5,
    desc: `Ahoy, friends! My name is Isot! I'm a very smart seven-year-old boy who loves to show off about it. My foster mom says she thinks I've had training in my prior life. 
     I know all my commands, make great eye contact, and just want to please. I always look for affirmation!
     If you're looking for a new family member who loves going for walks, car rides, and sunbathing while lying on his back, then I'm your guy. Apply to meet me!`,
  },
  {
    id: 4,
    name: 'Kahve',
    sex: 'male',
    age: 8,
    address: 'mersin',
    phone: '123467896',
    img: item6,
    desc: `Hi everybody! My name is Kahve and, as you can see, I'm such a handsome, spotted boy who is looking for his forever home.
     I would love a family who is patient and confident. I can be timid in new situations, but I feel much better if I have my person (or people) there to support me.
     I know all my basic commands and am very cooperative about going in my crate when I'm told. I'm very smart and eager to please. Are you looking for the biggest cuddle machine in all the land? Apply to meet me! `,
  },
  {
    id: 5,
    name: 'Kori',
    sex: 'female',
    age: 5,
    address: 'kocaeli',
    phone: '123467896',
    img: item7,
    desc: `Hello, I'm Kori. I've spent nearly my whole life in this awesome rescue! I've worked hard, and I'm ready for my forever home. 
  Do you like tricks and treats? I'm your girl. Learning new things is my strong suit, and I love a long hike with my person, too.
  Are you the human hero I'm waiting for? Apply to meet me today!`,
  },
  {
    id: 6,
    name: 'Patik',
    sex: 'male',
    age: 4,
    address: 'ankara',
    phone: '123467896',
    img: item9,
    desc: `My name is Patik, but you can call me Pat for short! (I am still working on the fetch part.)
     I'm super friendly and I love, love, love playing with other dogs. I used to be BFFs with a cat at the shelter I came from. 
     (Although sometimes chasing kitties is just as fun...) I bet I would be great with kids, but just know that I can get a little bouncy when I'm excited.
     If you're looking for a medium energy buddy to take on adventures and then snuggle up with on the couch, you found him. Apply to meet me today!`,
  },
  {
    id: 7,
    name: 'Uzum',
    sex: 'female',
    age: 7,
    address: 'istanbul',
    phone: '123467896',
    img: item2,
    desc: `Hi everybody, my name is Uzum! I'm a wiggly girl who is looking to be your family's 55-pound lap dog for life. I love toys and am allll about the balls. 
     I carry my ball around with me the entire time I'm outside. I'm a power chewer for sure, so I'll need my toy bin to always be fully stocked! 
          My perfect day looks something like this: fetch, eat, sleep, repeat. Does this sound like your family's lifestyle, too? Apply to meet me!`,
  },
  {
    id: 8,
    name: 'Pasa',
    sex: 'male',
    age: 5,
    address: 'adana',
    phone: '123467896',
    img: item1,
    desc: `Hey, everyone! My name is Pasa. I'm a happy-go-lucky guy with a sweet personality who loves to snuggle and be by your side. 
     I also like to play with my toys and go for long walk with you. I do have some very irresistible qualities, like an amazing wiggle when I'm really happy and a signature high-five move just to make you smile. 
     I even like to surprise you with a little dog talk. I promise to be extra loyal, bring you lots of happiness and be an incredibly good boy. 
     Apply to meet me! I could be the companion you've been looking for - and you could be the forever family I'm dreaming of.`,
  },
  {
    id: 9,
    name: 'Kete',
    sex: 'female',
    age: 6,
    address: 'aydın',
    phone: '123467896',
    img: item5,
    desc: `Hello world, my name is Kete, named after this little area in Turkey that makes extraordinary wine, and extraordinary I am. 
    I am not quite ready for adoption yet, my foster mommy told me I still need to get spayed and going through therapy. So it will be a little while before somebody can snatch me and love me forever.
    So follow my story and I will see you soon when I am ready for adoption!  `,
  },
  {
    id: 10,
    name: 'Loki',
    sex: 'female',
    age: 5,
    address: 'konya',
    phone: '123467896',
    img: item10,
    desc: `I'm Loki, the BFF you've been looking for. I'm a low-drama girl who is always here to listen, go for joy rides, hang out on the patio or just sleep in and watch Netflix. 
     I'm looking for a mellow family to vibe with! I can't wait to meet you and give you five million kisses before committing to a life-long snuggle session. Apply to meet me now`
  },
  {
    id: 11,
    name: 'Fırtına',
    sex: 'female',
    age: 1,
    address: 'izmir',
    phone: '123467896',
    img:item11,
    desc: `My foster family is still learning all about me! Check back soon for more updates!`,
  },
  {
    id: 12,
    name: 'Golge',
    sex: 'male',
    age: 7,
    address: 'adana',
    phone: '123467896',
    img: item12,
    desc: `Cheers, I'm Gölge! I'm a loving and medium energy lady looking for her forever home. I would really shine in a calm and structured environment!
     I know all my basic commands like house training, crate training and leash walking. I really enjoy learning new stuff and pleasing my people. 
     I can be a choosy about my dog friends, so slow and patient intros are best to help me feel comfortable. 
     Serious cuddlers only, please!! Cuddling is my passion and I love to be close to my people. I'm a big ol' couch potato and I can spend my whole day there if you let me. 
    (Are there pillows? PLEASE say there are pillows!) I would do best with older kiddos who are gentle with doggos like me. `,
  },
];
export default dogData;