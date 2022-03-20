import React, { createContext, useState } from "react";

export const Context = createContext();

export const DataContext = (props) => {

    const [data] = useState(dataObj);
    return (
        <>
        <Context.Provider value = {data}>
            {props.children}
        </Context.Provider>
        </>
    )
}




    const dataObj = [{
        category:"tourism",
        data:[{
            id:1,
            name:"Kerala: God's Own Country",
            info:"visit kerala",
            img:"https://miro.medium.com/max/1400/1*UmSF9883AXvP_1_ZS4Pi8Q.png",
            display_text:"Kerala in the South-Western region of India is often referred to as God's own country. This beautiful land is rightly called the paradise, given to its lush green scenic landscapes and crystal clear beaches that will leave you awestruck.",
            para1:"climate of kerala-Kerala is a tropical place that is located along the coast of the Arabian Sea on the west coast of the Indian Coastline. Out of 365 days in a year, there are 120 to 140 days with the rainy season. Most of the rainfall occurs in June, July, and August. Kerala is entrusted with the moist and tropical climate geographically and it is an all season destination. However the best time to visit Kerala is from September to March in winter when all destinations will be green after the rains.",
            para2:"There are many aspects of Kerala due to which it can be called God’s Own Country. Kerala will be among the few places in the world where you can enjoy beaches, backwaters, hill stations, houseboats, history, amusement parks, and rich culture and heritage within a distance of 400 kilometers. The variety of experiences it offers make it stand out among all the tourist destinations in the world.",
           

            },{

            id:2,
            name:"Sikkim: Valley of Rice",
            info:"visit sikkim",
            img:"https://img.nayatrip.com/images/state/big/SIKKIM.jpg",
            display_text:"Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes India’s highest mountain, 8,586m Kangchenjunga. Sikkim is also home to glaciers, alpine meadows and thousands of varieties of wildflowers.",
            para1:"A part of the Eastern Himalaya, Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth. Sikkim's capital and largest city is Gangtok. Almost 35% of the state is covered by the Khangchendzonga National Park.",
            para2:"Long a sovereign political entity, Sikkim became a protectorate of India in 1950 and an Indian state in 1975. Its small size notwithstanding, Sikkim is of great political and strategic importance for India because of its location along several international boundaries. Area 2,740 square miles (7,096 square km). Pop. (2011) 607,688.",
            
            
        },{
            id:3,
            name:"Maharashtra: Commershial and industies",
            info:"visit Maharashtra",
            img:"https://www.asparkholidays.com/uploads/47710_Mumbai%20(1).jpg",
            display_text:"Many important places have adorned the beauty of this district, including Mount Mary Church, Jogeshwari Caves, Mahakali Caves, Essel World, Water Kingdom, Marve Beach, Aksa Beach, Madh Island, Sanjay Gandhi National Park, Aarey Colony, Kanheri Caves, Film City, Tulsi Lake, Vihar Lake and Powai Lake.",
            para1:"Mumbai, long the centre of India’s cotton textile industry, subsequently developed a highly diversified manufacturing sector that included an increasingly important information technology (IT) component.",
            para2:"The city of Mumbai occupies a peninsular site on Bombay Island, a landmass originally composed of seven islets lying off the Konkan coast of western India. Since the 17th century the islets have been joined through drainage and reclamation projects, as well as through the construction of causeways and breakwaters, to form Bombay Island. East of the island are the sheltered waters of Mumbai (Bombay) Harbour.",
            
        },{
            id:4,
            name:"Himachal Pradesh: Heart of India",
            info:"visit Himachal Pradesh",
            img:"https://www.hptourism.org/wp-content/uploads/2020/06/Places-to-visit-in-Himachal-Pradesh.jpg",
            display_text:"This is popularly renowned for its Himalayan landscapes and popular hill-stations. Many outdoor activities such as rock climbing, mountain biking, paragliding, ice-skating, trekking, rafting, and heli-skiing are popular tourist attractions in Himachal Pradesh.",
            para1:"The verdict is that Shimla is mainly a more crowded destination but all its attractions are quite close to the city center. On the other hand, Manali is mainly more for adventure seekers and best visited during winter season. So, if you're someone who enjoys adventure sports, Manali is a good choice.",
            para2:" Himachal Pradesh is a northern Indian state in the Himalayas. It's home to scenic mountain towns and resorts such as Dalhousie. Host to the Dalai Lama, Himachal Pradesh has a strong Tibetan presence. This is reflected in its Buddhist temples and monasteries, as well as its vibrant Tibetan New Year celebrations. The region is also well known for its trekking, climbing and skiing areas."
        },{
            id:5,
            name:"Kashmir: Heaven On Earth",
            info:"Visit Kashmir",
            img: "https://i.ytimg.com/vi/bs-uYZZwyFY/hqdefault.jpg",
            display_text:"Jammu & Kashmir, a piece of heaven on earth, is the 19th largest state in India and it is located mostly all in the Himalayan mountains. It is also the only state in India with a Muslim-majority population.",
            para1:"Srinagar, Gulmarg, Sonamarg, Kupwara, Kargil, Pulwama, Pahalgam, Nishat Garden, Shalimar Garden Chashmashahi, Jama Masjid, Yusmarg, Aru Valley. From the charming valleys to alpine meadows that stretch as far as the horizon, these places to visit in Kashmir are known for their superior beauty.",
            para2:"The culture of Jammu and Kashmir is based on the dances, music and festivals of the people. Its rich, varied history means its arts and crafts have a multi-religious and multi-ethnic flavor. Kashmiris are known the world over for their handicrafts. There is much Persian influence in the floral designs that are typical of Kashmiri art. When in J&K, visitors can pick up souvenirs in the form of:."
        }]
    },{
        category:"fitness",
        data:[{
            id:6,
            name:"Yoga",
            info:"you must do yoga",
            img:"https://ak.picdn.net/shutterstock/videos/1022436478/thumb/1.jpg",
            display_text:"Yoga is a mind and body practice. Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation. Yoga is an ancient practice that may have originated in India. It involves movement, meditation, and breathing techniques to promote mental and physical well-being.",
            para1:"It's a total mind-body workout that combines strengthening and stretching poses with deep breathing and meditation or relaxation. There are more than 100 different forms of yoga. Some are fast-paced and intense. Others are gentle and relaxing.",
            para2:"Slow movements and deep breathing increase blood flow and warm up muscles, while holding a pose can build strength. Balance on one foot, while holding the other foot to your calf or above the knee (but never on the knee) at a right angle."
        
        },
        {
            id:7,
            name:"Push-ups",
            info:"you must do push-ups",
            img:"https://i.ndtvimg.com/i/2016-01/push-ups_625x350_61452668981.jpg",
            display_text:"If you're not using the right form you may set yourself up for injury (which could delay your progress even further) and slow tangible improvements in your performance over time. As with many other forms of exercise, push-ups get easier with regular practice.",
            para1:"There is no limit to how many push-ups one can do in a day. Many people do more than 300 push-ups a day. But for an average person, even 50 to 100 push-ups should be enough to maintain a good upper body, provided it is done properly. You can start with 20 push-ups, but do not stick to this number.",
            para2:"As a beginner at strength training, if you focus your initial efforts on a push-up progression, in two months, you will see massive results. Give it a try, you'll be happy with the increased definition, muscle size, and strength. After a month of this though, you may find that regular push-ups become a little dull."
        },
        {
            id:8,
            name:"Exercise",
            info:"exercise is good for health",
            img:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/11/457969-MR-MARKET-CLONE-8-of-the-best-online-workout-programs-to-do-at-hom-732x549-Feature-732x549.jpg",
            display_text:"Examples include brisk walking, jogging, swimming, and biking. Strength, or resistance training, exercises make your muscles stronger. Some examples are lifting weights and using a resistance band. Balance exercises can make it easier to walk on uneven surfaces and help prevent falls.",
            para1:"Whether people engage in light exercise, such as going for a walk, or high intensity activities, for example, uphill cycling or weight training, regular exercise provides a huge range of benefits for the body and mind.",
            para2:"Taking part in exercise of any intensity every day is essential for preventing a range of diseases and other health issues."
        },{
            id:9,
            name:"Squate",
            info:"You must do squate",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqExEKdN-phloh3t1_z0FIsP13LZ8k6jtjtw&usqp=CAU",
            display_text:"It's so easy to incorporate bodyweight squats into your daily schedule—after all, you only need your legs to do 'em.",
            para1:"Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles. It takes some of the weight off your knees and ankles.",
            para2:"You should at least do three sets of fifteen repetitions of squats every day to lose weight. Squats are a type of strength training exercise. This means they increase your muscle mass. The more muscle mass a person has, the faster their metabolism is."
        },{
            id:10,
            name:"Crunches",
            info:"Regular feet on the ground.",
            img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/young-woman-walking-dog-royalty-free-image-1603229590.jpg",
            display_text:"Calisthenics or callisthenics is a form of strength training consisting of a variety of movements that exercise large muscle groups, such as standing, grasping, pushing, etc.",
            para1:"Calisthenics were developed in ancient Greece and became popular again in the early 19th century. Today, fitness training of athletes, military personnel, law enforcement officers, and people trying to keep in shape use these exercises for warming up for strenuous sports or to help build up their bodies.",
            para2:"he effects of a calisthenics training intervention on posture, strength and body composition found that calisthenics training is an effective training solution to improve posture, strength and body composition without the use of any major training equipment"
        }]
    },{
        category:"Food",
        data:[{
            id:11,
            name:"VadaPav",
            info:"A vegetarian fast food dish.",
            img:"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/tlflbwllyyubg4nukvdr",
            display_text:"If you are not a Mumbaikar, this is something which should not be skipped. Whether it”s for breakfast, lunch or teatime, Batata Vada can go with anything.Vada pav, alternatively spelt wada pao, is a vegetarian fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun sliced almost in half through the middle. It is generally accompanied with one or more chutneys and a green chili pepper.",
            para1:"Vada pav, alternatively spelt wada pao, is a vegetarian fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun sliced almost in half through the middle. It is generally accompanied with one or more chutneys and a green chili pepper.",
            para2:"The carbohydrate-rich snack catered to the cotton mill workers of what was then known as Girangaon. This potato dumpling (batata vada) placed inside a pav was quick to make, cheap, and much convenient over the batata bhaji and chapati combination, which couldn't be eaten in overcrowded local trains."
        },{
            id:12,
            name:"Bakarwadi",
            info:"World famous pune's chitale bhakarwadi 500gm..Bakarwadi is a famous snack item from maharashtra. This crispy snack will have a spicy stuffing with the hint of sweet and tanginess.",
            img:"https://4.bp.blogspot.com/-ZZJgWX7Umu0/VeMlQnPJ3ZI/AAAAAAAAIrc/nA85FWq2IqA/s1600/20150828_171207.jpg",
            display_text:"One place that has been whetting Pune's appetite for sweets and savouries ( namkeen) over 62 years is the famous Chitale Bandhu. Chitale generates a more profound recall value for its Bhakarwadi , a crisp and spicy Maharashtrian snack which has a long shelf life. Set up in 1950 in a 500 sq.",
            para1:"In the Maharashtrian version of bakarwadi, the outer cover is made from gram flour (besan) and all purpose flour (maida) or whole wheat flour (atta). The stuffing has coconut, sesame seeds, poppy seeds with some spices added in it. A souring ingredient is added to give a tang in the bhakarwadi.",
            para2:"In the Maharashtrian version of bakarwadi, the outer cover is made from gram flour (besan) and all purpose flour (maida) or whole wheat flour (atta). The stuffing has coconut, sesame seeds, poppy seeds with some spices added in it. A souring ingredient is added to give a tang in the bhakarwadi."
        },{
            id:13,
            name:"Misal Pav",
            info:"Misal pav (Marathi: मिसळपाव) is a popular dish from Malshiras. It consists of misal (a spicy curry usually made from moth beans) and pav (a type of Indian bread roll). The final dish is topped with farsan or sev, onions, lemon and coriander (cilantro)..",
            img:"https://i1.wp.com/www.flavoursonplate.com/wp-content/uploads/2020/04/Misal-pav-recipe.jpg?resize=1200%2C799&ssl=1",
            display_text:"Misal pav is actually a spicier version of usal pav that is topped with sev, chivda, farsan, chopped onions, coriander leaves and lemon juice. Usal pav is a regular dish that is even prepared as a side vegetable in the daily household meal and is an important addition in the authentic Maharashtrian thali.",
            para1:"Originating in the 1960s, it was invented by a certain Keshavji Gabha Chudasama, resident of Mandvi, Kutchh.” Now this could start a righteous uprising (aka tantrum) in these parts, with a call to banish all non-Maharashtrians from the state, so we will leave this piece of information alone.",
            para2:"Misal pav is a popular Indian dish from Maharashtra. also known as most famous breakfast of Marathi peoples. It is made up of misal (a spicy curry prepared from moth beans) and pav (a type of Indian bread roll). Farsan or sev, onions, lemon, and coriander are sprinkled on top of the finished dish (cilantro).",
        },{
            id:14,
            name:"Tandoori Chicken",
            info:"The chicken is marinated in yogurt and seasoned with the spice mixture tandoori masala.",
            img:"https://media.istockphoto.com/photos/tandoori-chicken-whole-with-naan-and-raita-picture-id953514746?s=170667a",
            display_text:"Tandoori chicken is a popular North Indian dish consisting of roasted chicken prepared with yogurt and spices. The name comes from the type of cylindrical clay oven, a tandoor, in which the dish is traditionally prepared.Sounds unbelievable, but historians are said to have found the first evidence of a meat preparation which looked like Tandoori Chicken in the ruins of Harappa.",
            para1:"Among the most famous Indian foods, tandoori chicken is loved by people the world over. The nice thing about this dish is that it's really easy to make. It gets its name from the way it is cooked—in a tandoor, or clay oven.",
            para2:"Ancient Sanskrit treatise Sushruta Samhita mentions meat marinated with mustard powder and fragrant spices being cooked in clay ovens."
        },{
            id:15,
            name:"Tawa Fish",
            info:"Shallow Fry / Fish Fry / Omelet Pan 8 Inch Pre-Seasoned Cast Iron Skilletis 8 inch in diameter which is highly useful to make fish fry, shallow frying, omelets and rotis.",
            img:"https://c.ndtvimg.com/2021-02/gsq3frgg_fish-fry_625x300_10_February_21.jpg",
            display_text:"Overall, the healthiest cooking methods limit the loss of healthy omega-3 fats, retain the most nutrients and minimize the formation of harmful compounds. In general, this means that sous vide, microwaving, baking, steaming and poaching your fish are your best bets.",
            para1:"Being a rich source of protein, fish and chicken are equally considered good in terms of losing weight. While fish is an excellent source of omega-3 fatty acids too, which provides satiety and helps to cut down on food cravings and a person's indulgence is less for unhealthy food.",
            para2:"If cod isn't your style, try farm-raised tilapia or catfish. Both these ready-to-fry fish are readily available at most markets and very affordable. Tilapia is a mild-tasting versatile fish allows you to play with various seasonings and batters. Catfish has a stronger taste that pairs well with a corn meal breading.",
        }]
    
    },{
        category:"technology",
        data:[{
            id:16,
            name:"Mechanical",
            info:"Mechanical is a Technology  of the mechanical design",
            img:"https://www.ecpi.edu/sites/default/files/mecha.png",
            display_text:"Mechanical Engineering Technology is the application of engineering principles and technological developments to the creation of useful machinery or products. Software tools such as Finite Element Analysis and / or Computational Fluid Dynamics are often used to analyze parts and assemblies.",
            para1:"mechanical system, Any building service using machines. They include plumbing, elevators, escalators, and heating and air-conditioning system.",
            para2:"Employment of mechanical engineers is projected to grow 7 percent from 2020 to 2030, about as fast as the average for all occupations. About 20,200 openings for mechanical engineers are projected each year, on average, over the decade."
        },{
            id:17,
            name:"Electronic",
            info:"Electronics technology is the application of scientific theories and principles in the design, production, installation, testing, service, use, and control of electrical and electronic parts, equipment and systems. Electronics technology is used across all industries, including commercial, residential, and industrial.",
            display_text:"Electronics is the study of electricity (the flow of electrons) and how to use that to build things like computers. It uses circuits that are made with parts called components and connecting wires to do useful things.",
            img:"https://cdn-5ba2abb3f911c816a0454a99.closte.com/wp-content/uploads/2017/11/Article-2.jpg",
            para1:"Electronics encompasses an exceptionally broad range of technology. The term originally was applied to the study of electron behaviour and movement, particularly as observed in the first electron tubes.",
            para2:"Visions of Emerging Electronics Technologies include nanoelectronics, artificial intelligence, smart and autonomous systems, cyber security, 5G, quantum computing, Silicon Carbide electronics, robotics, cognitive science, education, bioelectronics, printed electronics, gas sensing, etc."
        },{
            id:18,
            name:"Industrial and Manufacturing",
            info:"Industrial and production engineering (IPE) is an interdisciplinary engineering discipline that includes manufacturing technology, engineering sciences, management science, and optimization of complex processes, systems, or organizations.",
            img:"https://media.istockphoto.com/photos/industrial-engineering-and-manufacturing-picture-id1204179856",
            display_text:"Manufacturing an industrial engineering is a multi-disciplinary field containing important elements of industrial, mechanical and materials engineering. Manufacturing engineers are leaders in design, innovation, and improvement of systems to provide a service or products.",
            para1:"Manufacturing engineers develop and create physical artifacts, production processes, and technology. It is a very broad area which includes the design and development of products.",
            para2:"Industrial and production engineers conduct research and design, organize and oversee the construction, operation and maintenance of process plant and installations. They establish programs for the coordination of manufacturing activities; and assess cost effectiveness and safety."
        },{
            id:19,
            name:"Medical",
            info:"Medical Technology can be defined as the technologies that diagnose, treat and/or improve a person's health and wellbeing, encompassing both low- and high-risk medical devices – products that can be as varied from tongue depressors, surgical gloves and medical thermometers to insulin pumps, pacemakers",
            img:"https://www.cio.com/wp-content/uploads/2021/12/healthcare_technology_medical_data_by_metamorworks_gettyimages-1127069581_2400x1600-100837041-orig-6.jpg?quality=50&strip=all",
            display_text:"For healthcare, this encompasses new technologies such as remote patient monitoring, 5g-enabled devices, and wearable sensors. The more than 500,000 web-enabled medical devices are increasingly interconnected to be able to provide the most accurate and up-to-date patient data.",
            para1:"It can help in early detection of health problems. It can also help in integrating data collected from tests instantly, monitor the condition of the patient, and then relay that information to the doctors and staff in real time, thereby improving the efficiency of the overall healthcare system.",
            para2:"Electronic health records (EHR) support sharing of patient data, test results and other information between healthcare providers and across departments. Today, it's nearly impossible to run a hospital efficiently without an EHR system."
        },{
            id:20,
            name:"Commiunicatios",
            info:"Communication technology is the transfer of messages (information) among people and/or machines through the use of technology. This processing of information can help people make decisions, solve problems, and control machines. TECHNOLOGY STANDARDS.",
            img:"https://www.incoutlook.com/wp-content/uploads/2020/01/Role-of-Technology-in-Communication.jpg",
            display_text:"Electronic communication such as e-mail, text messages, faxes, and even social networking are examples of communication technology. Technology has increased the limits of communications between employees in any business. CEOs of large companies can speak with one another via the Internet from around the world.",
            para1:"Modern communications technology or ICT( Internet Communications Technology) can be defined as 'anything which allows us to get information, to communicate with each other, or to have an effect on the environment using electronic or digital equipment' – (Angela Canavan Corr, Pg.",
            para2:"Thanks to smartphones, chat apps, and industry-specific social networking sites, communication in the workplace has become fast, collaborative, more deliberate, and unified. Technology allows employees to engage in important work even when outside the office, and keep in touch with coworkers, even face-to-face."
        }]
    }]

    