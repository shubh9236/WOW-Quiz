
(function(){

    angular
        .module("WonderFacts")
        .factory("DataService", DataService);


    function DataService(){

        var dataObj = {
            wondersData: wondersData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };
        return dataObj;
    }

    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];

    var quizQuestions  = [
        {
            type: "text",
            text: "Where is the Colosseum located?",
            possibilities: [
                {
                    answer: "Paris"
                },
                {
                    answer: "Rome"
                },
                {
                    answer: "Tokyo"
                },
                {
                    answer: "United States"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of the following is the oldest seven wonders of the world?",
            possibilities: [
                {
                    answer: "Great Wall of China"
                },
                {
                    answer: "Taj Mahal"
                },
                {
                    answer: "Great Pyramid of Giza"
                },
                {
                    answer: "Colosseum"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is referred as the 'Lost city of Incas'?",
            possibilities: [
                {
                    answer: "images/2.jpg"
                },
                {
                    answer: "images/3.jpg"
                },
                {
                    answer: "images/4.jpg"
                },
                {
                    answer: "images/9.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is located in England?",
            possibilities: [
                {
                    answer: "images/4.jpg" 
                },
                {
                    answer: "images/1.jpg" 
                },
                {
                    answer: "images/8.jpg" 
                },
                {
                    answer: "images/5.jpg" 
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Where is the Taj Mahal located?",
            possibilities: [
                {
                    answer: "New York,U.S."
                },
                {
                    answer: "Lucknow,India"
                },
                {
                    answer: "Agra,India"
                },
                {
                    answer: "Wiltshire,England"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these has its name derived from the nickname of a city in U.S.?",
            possibilities: [
                {
                    answer: "The Empire State Building" 
               },
                {
                    answer: "Colosseum"                },
                {
                    answer: "Machu Picchu"                },
                {
                    answer: "Taj Mahal"                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of the following has been declared one of the Wonders of the Modern World by the American Society of Civil Engineers",
            possibilities: [
                {
                    answer: "Machu Picchu" 
                },
                {
                    answer: "The Great Wall of China" 
                },
                {
                    answer: "The Empire State Building" 
                },
                {
                    answer: "The Golden Gate Bridge" 
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of the following was built to keep out invaders?",
            possibilities: [
                {
                    answer: "images/2.jpg" 
                },
                {
                    answer: "images/6.jpg" 
                },
                {
                    answer: "images/3.jpg" 
                },
                {
                    answer: "images/8.jpg" 
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the height of the Empire State Building?",
            possibilities: [
                {
                    answer: "443.2 m" 
                },
                {
                    answer: "470 m" 
                },
                {
                    answer: "435.6 m" 
                },
                {
                    answer: "500 m" 
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "The Colosseum, also known as the 'Flavian Amphitheatre' was made for what purpose?",
            possibilities: [
                {
                    answer: "Football Matches" 
                },
                {
                    answer: "Bull Fighting" 
                },
                {
                    answer: "Horse Racing" 
                },
                {
                    answer: "Gladiatoral Contests" 
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var wondersData = [
        {
            name: "Great Pyramid of Giza",
            image_url: "images/1.jpg",
            locations: "El Giza, Egypt",
            co_ordinates: "29.9792° N,31.1342° E",
            height: "146.5 m(481 ft)",
            built: "2580–2560 BC",
            description: "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex bordering what is now El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.Egyptologists believe that the pyramid was built as a tomb over a 10 to 20-year period concluding around 2560 BC. Initially at 146.5 metres (481 feet), the Great Pyramid was the tallest man-made structure in the world for more than 3,800 years."
        },
        {
            name: "Colosseum",
            image_url: "images/2.jpg",
            locations: "Regio IV Templum Pacis",
            co_ordinates: "41.8902° N,12.4922° E",
            height: "48 m(157 ft)",
            built: "70-80 AD",
            description: "The Colosseum or Coliseum, also known as the Flavian Amphitheatre or Colosseo, is an oval amphitheatre in the centre of the city of Rome, Italy. Built of concrete and sand, it is the largest amphitheatre ever built.The Colosseum is situated just east of the Roman Forum.Construction began under the emperor Vespasian in AD 72, and was completed in AD 80 under his successor and heir Titus.The Colosseum could hold, it is estimated, between 50,000 and 80,000 spectators, having an average audience of some 65,000. It was used for gladiatorial contests and public spectacles such as mock sea battles, animal hunts, executions, re-enactments of famous battles, and dramas based on Classical mythology"
        },
        {
            name: "Great Wall of China",
            image_url: "images/3.jpg",
            locations: "Northern borders of China",
            co_ordinates: "40.4319° N,116.5704° E",
            height: "5-8 m",
            built: "220–206 BC",
            description: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe. Several walls were being built as early as the 7th century BC.These, later joined together and made bigger and stronger, are now collectively referred to as the Great Wall.Especially famous is the wall built 220–206 BC by Qin Shi Huang, the first Emperor of China.Since then, the Great Wall has been rebuilt, maintained, and enhanced; the majority of the existing wall is from the Ming Dynasty (1368–1644)."
        },
        {
            name: "Stonehenge",
            image_url: "images/4.jpg",
            locations: "Wiltshire, England",
            co_ordinates: "51.1789° N,1.8262° W",
            height: "9 m(30 ft)",
            built: "3100 BC",
            description: "Stonehenge is a prehistoric monument in Wiltshire, England, 2 miles (3 km) west of Amesbury and 8 miles (13 km) north of Salisbury. Stonehenge consists of ring of standing stones, with each standing stone around 4.1 metres (13 ft) high, 2.1 metres (6 ft 11 in) wide and weighing around 25 tons. The stones are set within earthworks in the middle of the most dense complex of Neolithic and Bronze Age monuments in England, including several hundred burial mounds.Archaeologists believe it was constructed from 3000 BC to 2000 BC. The surrounding circular earth bank and ditch, which constitute the earliest phase of the monument, have been dated to about 3100 BC. Radiocarbon dating suggests that the first bluestones were raised between 2400 and 2200 BC"
        },
        {
            name: "Taj Mahal",
            image_url: "images/5.jpg",
            locations: "Agra, Uttar Pradesh, India",
            co_ordinates: "27.1750° N,78.0422° E",
            height: "73 m(240 ft)",
            built: "1632-1653",
            description: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned 1628–1658), to house the tomb of his favourite wife, Mumtaz Mahal. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.Construction of the mausoleum was essentially completed in 1643 but work continued on other phases of the project for another 10 years.The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage."
        },
        {
            name: "Machu Picchu",
            image_url: "images/6.jpg",
            locations: "Cuzco Region, Peru",
            co_ordinates: "13.1631° S,72.5450° W",
            height: "2,430 m(7,972 ft)",
            built: "15th Century",
            description: "Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge 2,430 metres (7,970 ft) above sea level.It is located in the Cusco Region, Urubamba Province, Machupicchu District in Peru above the Sacred Valley, which is 80 kilometres (50 mi) northwest of Cuzco and through which the Urubamba River flows.Most archaeologists believe that Machu Picchu was built as an estate for the Inca emperor Pachacuti (1438–1472). Often mistakenly referred to as the 'Lost City of the Incas', it is the most familiar icon of Inca civilization.Machu Picchu was built in the classical Inca style, with polished dry-stone walls. Its three primary structures are the Inti Watana, the Temple of the Sun, and the Room of the Three Windows"
        },
        {
            name: "Empire State Building",
            image_url: "images/7.jpg",
            locations: "350 Fifth Avenue Manhattan, New York ",
            co_ordinates: "40.7484° N,73.9857° W",
            height: "443.2 m(1454 ft)",
            built: "March 1930",
            description: "The Empire State Building is a 102-story skyscraper located on Fifth Avenue between West 33rd and 34th Streets in Midtown, Manhattan, New York City. It has a roof height of 1,250 feet (381 m), and with its antenna included, it stands a total of 1,454 feet (443.2 m) tall.Its name is derived from the nickname for New York, the Empire State. It stood as the world's tallest building for nearly 40 years, from its completion in early 1931 until the topping out of the original World Trade Center's North Tower in late 1970.Following the September 11,2001 attacks,it was again the tallest building in New York, until One World Trade Center reached a greater height in April 2012.It is currently the 5th-tallest skyscraper in the U.S. and the 34th-tallest in the world."
        },
        {
            name: "Golden Gate Bridge",
            image_url: "images/8.jpg",
            locations: "San Francisco, California and Marin County, California, U.S.",
            co_ordinates: "37.8199°N,122.4783°W",
            height: "227.81 m(746 ft)",
            built: "April 1937",
            description: "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate strait, the one-mile-wide (1.6 km), 1.7 mile-long (2.7 km) channel between San Francisco Bay and the Pacific Ocean. The structure links the American city of San Francisco, California  to Marin County, carrying both U.S. Route 101 and California State Route 1 across the strait. The bridge is one of the most internationally recognized symbols of San Francisco, California, and the United States. It has been declared one of the Wonders of the Modern World by the American Society of Civil Engineers.The Frommer's travel guide describes the Golden Gate Bridge as 'possibly the most beautiful, certainly the most photographed, bridge in the world.' It opened in 1937 and was, until 1964, the longest suspension bridge main span in the world, at 4,200 feet (1,300 m)."
        }
    ];

})();
