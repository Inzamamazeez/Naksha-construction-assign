import React,{createContext, useState} from 'react';
import wedding from '../../Components/Allimages/wedding.jpg';
import reception from '../../Components/Allimages/reception.jpg';
import birthday from '../../Components/Allimages/birthday.jpg';
import housewarming from '../../Components/Allimages/housewarming.jpg';
import reunion from '../../Components/Allimages/reunion.jpg';
import prewedding from '../../Components/Allimages/prewedding.jpg';
import medical from '../../Components/Allimages/medical.jpg';
import babyshower from '../../Components/Allimages/babyshower.jpg';


export const CateringData = createContext();

function Store(props){
    const[data,setData]=useState(
        [
            {
              id: 1,
              label: 'Wedding Events',
              key: 'weeve-wedding',
              img: wedding,
              price: 80000,
              time: '4-6 months in advance',
              process: 'Custom menu planning, tastings, catering staff',
              info: 'Weddings aren’t a sprint—they’re a marathon. Beyond the ceremony and reception, there are many additional opportunities to bring family members and loved ones together in celebration, and they sometimes begin the very day you get engaged. With help from two event planning experts, Ani Sandhu and Kaitlin Przezdziecki, we’re breaking down everything you need to know about the most common pre and post-wedding events.',
              servicesOffered: ['Custom menu planning', 'Tastings', 'Catering staff', 'Event coordination','Buffet style catering'],
        
            },
            {
              id: 2,
              label: 'Reception',
              key: 'weeve-reception',
              img: reception,
              price: 50000,
              time: '2-3 months in advance',
              process: 'Buffet style catering, event coordination',
              info: 'The reception is the celebration that follows the wedding ceremony. It\'s a time for family and friends to come together, enjoy delicious food, dance, and celebrate the newlywed couple. Our reception catering service includes buffet-style catering and expert event coordination to make your reception a memorable event.',
              servicesOffered: ['Buffet style catering', 'Event coordination', 'Venue setup', 'Tastings', 'Catering staff'],
            
            },
            {
              id: 3,
              label: 'Birthday Parties',
              key: 'weeve-birthday',
              img: birthday,
              price: 20000,
              time: '2 days in advance',
              process: 'Themed party planning, entertainment options',
              info: 'Birthday parties are all about celebrating another year of life and having a great time with friends and family. Our birthday party catering service offers themed party planning and various entertainment options to make your celebration unforgettable.',
              servicesOffered: ['Themed party planning', 'Entertainment options', 'Custom cake design'],
        
            },
            {
              id: 4,
              label: 'House Warming',
              key: 'weeve-housewarming',
              img: housewarming,
              price: 25000,
              time: '15 days in advance',
              process: 'Home decoration, catering, guest invitations',
              info: 'Housewarming parties mark the beginning of a new chapter in your life. Our housewarming catering service includes home decoration, catering services, and assistance with guest invitations to make your housewarming event special.',
              servicesOffered: ['Home decoration', 'Catering services', 'Guest invitations', 'Tastings', 'Catering staff'],
              
            },
            {
              id: 5,
              label: 'Reunion',
              key: 'weeve-reunion',
              img: reunion,
              price: 18000,
              time: '10 days in advance',
              process: 'Event coordination, catering, venue setup',
              info: 'Reunions are a time to reconnect with old friends and create new memories. Our reunion catering service offers event coordination, catering, and venue setup to ensure your reunion is a joyful and hassle-free occasion.',
              servicesOffered: ['Event coordination', 'Catering', 'Venue setup'],
            },
            {
              id: 6,
              label: 'Pre Wedding Ceremonies',
              key: 'weeve-prewedding',
              img: prewedding,
              price: 35000,
              time: '15 days in advance',
              process: 'Ceremony planning, catering, photography',
              info: 'Pre-wedding ceremonies are an integral part of Indian weddings. Our pre-wedding catering service includes ceremony planning, catering, and photography to make your pre-wedding rituals memorable.',
              servicesOffered: ['Ceremony planning', 'Catering', 'Photography','Tastings', 'Catering staff'],
              
            },
            {
              id: 7,
              label: 'Medical Conferences',
              key: 'weeve-medical',
              img: medical,
              price: 30000,
              time: '1-2 months in advance',
              process: 'Speaker arrangements, venue setup, catering',
              info: 'Medical conferences require meticulous planning. Our medical conference catering service includes speaker arrangements, venue setup, and catering to ensure the success of your medical event.',
              servicesOffered: ['Speaker arrangements', 'Venue setup', 'Catering','Tastings'],
            },
            {
              id: 8,
              label: 'Baby Showers',
              key: 'weeve-babyshower',
              img: babyshower,
              price: 15000,
              time: '4-6 days in advance',
              process: 'Baby-themed decoration, games, catering',
              info: 'Baby showers are a time to celebrate the upcoming arrival of a new baby. Our baby shower catering service offers baby-themed decoration, games, and catering to create a joyous atmosphere.',
              servicesOffered: ['Baby-themed decoration', 'Games', 'Catering'],
              
            },
            {
              id: 9,
              label: 'Naming Ceremonies',
              key: 'weeve-namingceremony',
              img: 'https://img.freepik.com/free-psd/maternity-baby-shower-background_23-2150237221.jpg?w=1060&t=st=1695728897~exp=1695729497~hmac=cfb3636b779d8020f62355dd14163057c20641e1e0bfb7faefb5058bbc766ea1',
              price: 12000,
              time: '2-3 days in advance',
              process: 'Custom menu planning, catering, naming ritual',
              info: 'Naming ceremonies are a significant tradition in many cultures. Our naming ceremony catering service includes custom menu planning, catering, and assistance with the naming ritual.',
              servicesOffered: ['Custom menu planning', 'Catering', 'Naming ritual assistance'],
              
            }
        ]
    )
    return(
        <CateringData.Provider value={[data,setData]}>
            {props.children}
        </CateringData.Provider>
    )
}

export default Store;