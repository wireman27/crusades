function removeMarker() {
    config.showMarkers = false;
}

function addMarker() {
    config.showMarkers = true;
}

var config = {
    style: 'mapbox://styles/mslee/cif5p01n202nisaktvljx9mv3',
    accessToken: 'pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg',
    showMarkers: true,
    markerColor: 'black',
    theme: 'light',
    use3dTerrain: false,
    title: 'The Geography of the First Crusade',
    byline: 'Switch to landscape if using a mobile device.',
    footer: `
        <h3>Attributions</h3>
        Content: 
        <a 
            href="https://en.wikipedia.org/wiki/Extraordinary_Popular_Delusions_and_the_Madness_of_Crowds"
            target="_blank"
        >
        Extraordinary Popular Delusions
        and the Madness of Crowds
        </a>
        by Charles Mackay
        <br>
        Technology:
        <a href="https://labs.mapbox.com/education/impact-tools/interactive-storytelling/" target="_blank">
        Interactive Storytelling
        </a>
        by Mapbox
        <br>
        Map Style:
        <a href="https://api.mapbox.com/styles/v1/mslee/cif5p01n202nisaktvljx9mv3.html?title=true&access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg#12.69/38.8889/-77.0409" target="_blank"> 
        Vintage
        </a>
        by mslee
        <br>
        Font:
        <a href="https://fonts.google.com/specimen/Viaoda+Libre#about" target="_blank">
        Viaoda Libre
        </a>
        by Vietanh Nguyen
        <br>
        <br>
        <svg height="20" width="20">
          <circle cx="10" cy="10" r="10" fill="black" />
        </svg>
        `,
    chapters: [
        {
            id: 'baghdad',
            alignment: 'left',
            hidden: false,
            title: 'Welcome to a journey through the First Crusade',
            description: `
                Let's begin with some context.<br><br>
                Baghdad was the seat of the Abbasid Caliphate.
                <br><br>
                The Abbasid Caliphate was extremely tolerant of Christian
                pilgrims to Jerusalem.`,
            location: {
                center: [44.363692, 33.3156056],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'crusades-layer', opacity: 1}],
            onChapterExit: []
        },
        {
            id: 'cairo',
            alignment: 'right',
            hidden: false,
            title: 'Cairo',
            description: 
                `Cairo was the seat of the Fatimid Caliphate.
                <br><br>
                The Fatimid Caliphate, more distressed for money
                than its predecessor,
                imposed a tax of a bezant for 
                each pilgrim that entered Jerusalem.`,
            location: {
                center: [31.2361001, 30.0444885],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'jerusalem',
            alignment: 'left',
            hidden: false,
            title: 'Jerusalem',
            description: `Jerusalem is the Holy Land.`,
            location: {
                center: [35.1053185, 31.7962994],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rouen',
            alignment: 'right',
            hidden: false,
            title: 'Rouen',
            description: 
                `Rouen was the capital of the Duchy of Normandy 
                and the seat of Robert of Normandy.
                <br><br>
                Robert of Normandy undertook a pilgrimage 
                to Jerusalem and found scores of pilgrims at 
                the gate waiting for someone to pay the tax 
                imposed by the Fatimid Caliphate.`,
            location: {
                center: [1.0801958, 49.4413619],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'isfahan',
            alignment: 'left',
            hidden: false,
            title: 'Isfahan',
            description: `
                Isfahan was the capital of the Seljuk Empire. 
                The Seljuk Turks ruled Jerusalem at
                the time of the First Crusade.`,
            location: {
                center: [51.6667519, 32.6537553],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'amiens',
            alignment: 'right',
            hidden: false,
            title: 'Amiens',
            description: `
                Amiens was Peter the Hermit's birthplace.
                <br><br>
                Peter The Hermit is credited as being the man 
                who played a significant role in riling up 
                the populace of Europe against the Seljuk Turks 
                at Jerusalem at the time.`,
            location: {
                center: [2.2926311, 49.8980113],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bari',
            alignment: 'left',
            hidden: false,
            title: 'Bari, Apulia',
            description: `
                While Peter the Hermit was going around Europe 
                calling for action in Jerusalem, 
                Pope Urban II took refuge in Bari, Apulia 
                under the protection of Robert Guiscard. 
                He had fled here due to disputes with 
                Henry IV of Germany and Philip I of France.`,
            location: {
                center: [16.8571752, 41.1204722],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'placentia',
            alignment: 'right',
            hidden: false,
            title: 'Placentia',
            description: `
                At Placentia, Pope Urban II 
                called a council with the other clergy to propose the Crusades. 
                Peter the Hermit was there as well.`,
            location: {
                center: [9.6923274, 45.051937],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'clermont',
            alignment: 'left',
            hidden: false,
            title: 'Clermont',
            description: `
                At Clermont, the Pope called a council again; 
                this time to actually plan the holy war.`,
            location: {
                center: [3.1131016, 45.7871783],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'boissy-sans-avoir',
            alignment: 'right',
            hidden: false,
            title: 'Boissy-sans-Avoir',
            description: `
                Walter the Pennyless was another leader of the First Crusade 
                with Peter the Hermit. He was the Lord of Boissy-sans-Avoir.`,
            location: {
                center: [1.7962415, 48.8206477],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'semlin',
            alignment: 'left',
            hidden: false,
            title: 'Semlin',
            description: `
                As the Crusaders plundered through Hungary, 
                the Hungarians killed many of the Crusaders 
                who were led by Walter the Pennyless as they approached 
                Semlin (Zemun).
                <br><br>
                Peter the Hermit, who followed, on seeing his dead comrades, 
                unleashed all the horrors possible on the people of Semlin.
                <br><br>
                The King of Hungary, on being apprised of this, 
                marched to chastise Peter the Hermit.
                <br><br>
                When Peter the Hermit heard of the King of Hungary's advance, 
                he broke up the camps and retreated towards the 
                Morava (a tributary of the Danube) just a few miles east of Semlin. 
                Here, the Bulgarians, awaiting the Crusaders, 
                made the passage of the river very difficult.`,
            location: {
                center: [20.3648043, 44.8480107],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nis',
            alignment: 'right',
            hidden: false,
            title: 'Nissa',
            description: `
                The Duke of Bulgaria fortified himself at Nissa 
                against possible atrocities from the Crusaders.
                <br><br>
                Although Peter the Hermit wanted to pass through Nissa 
                without causing any hostilities, some vagabond Germans 
                set fire to the mills and house of a Bulgarian leading to 
                a dirty battle and the subsequent fleeing of Peter 
                to a forest nearby.`,
            location: {
                center: [21.8948318, 43.3208761],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'constantinople',
            alignment: 'left',
            hidden: false,
            title: 'Constantinople',
            description: `
                Constantinople was the seat of Emperor Alexios I Komnenos 
                of the Eastern Roman (Byzantine) Empire.
                <br><br>
                Several buildings were set to fire here by the 
                Crusaders led by Peter the Hermit and Walter the Pennyless 
                simply out of mischief.`,
            location: {
                center: [28.9752159, 41.0077934],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'exorogorgon',
            alignment: 'right',
            hidden: false,
            title: 'Exorogorgon Castle',
            description: `
                After confusion reigned within the Crusaders, 
                an army led by Reinhold took possession of 
                the fortress of Exorogorgon.
                <br><br>
                Kilij Arslan I attacked and the 
                <a href="https://en.wikipedia.org/wiki/Siege_of_Xerigordos" target="_blank">
                Siege of Exorogorgon
                </a> 
                continued for 8 days with a large section of the Crusaders 
                getting killed for not agreeing to 
                renounce their faith and become Muslims.`,
            location: {
                center: [29.7622347, 40.4443042],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: `
                After the escapades of Walter the Pennyless and Peter the Hermit 
                were rendered fruitless, fresh hordes were making their way 
                from the forests of Germany towards Jerusalem; 
                they were led by a German monk named Gottschalk.
                <br><br>
                However, gruesome conflicts with the Hungarians, 
                to the point where 'the stream of the Danube (was) said to have 
                been choked up by (the Crusaders') unburied bodies', 
                slaughtered any chances of these fanatics ever reaching the Holy Land.
                <br><br>
                Once 'the worst paroxysm of the madness of Europe' passed, 
                Europe's chivalry entered the scene.
                <br><br>
                Of these the most prominent were the Duke of Lorraine (Godfrey of Bouillon), 
                the Count of Toulouse (Raymond), the Count of Vermandois (Hugh), 
                the Duke of Normandy (Robert, the same person who 
                witnessed scores of pilgrims at Jerusalem waiting to pay the tax), 
                the Count of Flanders (Robert) and the Prince of Tarentum (Boemund).`,
            location: {
                center: [29.7622347, 40.4443042],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'durazzo',
            alignment: 'left',
            hidden: false,
            title: 'Durazzo',
            description: `
                At Durazzo, the Count of Vermandois was arrested by 
                the order of Emperor Alexios. Guibert de Nogent speculates as follows:
                'fearful of the designs of the Crusaders upon his throne, [Emperor Alexios] 
                resorted to this extremity in order afterwards to force 
                the Count to take the oath of allegiance to him, 
                as the price of his liberation'.`,
            location: {
                center: [19.4464773, 41.3102364],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'philippopoli',
            alignment: 'right',
            hidden: false,
            title: 'Philippopoli',
            description: `
                At Philippopoli, Godfrey of Bouillon was informed 
                for the first time about the imprisonment of the 
                Count of Vermandois and immediately sent messengers 
                demanding the Count's release.`,
            location: {
                center: [24.7469098, 42.1427415],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'dorylaeum',
            alignment: 'left',
            hidden: false,
            title: 'Valley of Dorylaeum',
            description: `
                The scene of the 
                <a href="https://en.wikipedia.org/wiki/Battle_of_Dorylaeum_(1097)" target="_blank">
                Battle of Dorylaeum
                </a>.`,
            location: {
                center: [30.5193093, 39.7659389],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'antiochetta',
            alignment: 'right',
            hidden: false,
            title: 'Antiochetta',
            description: `
                The Battle of Dorylaeum and the profligacy and absent-mindedness 
                of the Crusaders led to starvation and thirst. 
                They made their way to Antiochetta in search of food and water.
                <br><br>
                At Antiochetta, food and water were in abundance 
                and the Crusaders 'gave themselves up to luxury and waste'.`,
            location: {
                center: [32.4508862, 36.1665567],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'antioch',
            alignment: 'left',
            hidden: false,
            title: 'Antioch',
            description: `
                The scene of the 
                <a href="https://en.wikipedia.org/wiki/Siege_of_Antioch" target="_blank"
                >
                Siege of Antioch
                </a>.`,
            location: {
                center: [36.2359182, 36.2670348],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'edessa',
            alignment: 'right',
            hidden: false,
            title: 'Edessa',
            description: `
                During the Siege of Antioch, 
                hunger and starvation reached a point where Baldwin, 
                Count of Flanders detached himself from the army 
                and became the supreme leader of the County of Edessa.`,
            location: {
                center: [38.7953229, 37.1672667],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'alexandretta',
            alignment: 'left',
            hidden: false,
            title: 'Alexandretta',
            description: `
                Stephen, Count of Blois withdrew from the Crusades 
                and established himself with four thousand retainers in 
                Alexandretta.
                <br><br>
                Towards the end of the Siege of Antioch, 
                when Kerbogha, the Emir of Mosul, attacked Antioch with Kilij Arslan I, 
                many Crusaders tried to escape to Alexandretta.`,
            location: {
                center: [36.1693627, 36.5801027],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mamistra',
            alignment: 'right',
            hidden: false,
            title: 'Port of Mamistra',
            description: `
                Peter Barthelemy, a priest from Provence 
                credited to have raised the spirits of the Crusaders 
                at the nadir of the Siege of Antioch 
                was about to sail for Cyprus from the Port of Mamistra when, 
                Peter claims, St Andrew threatened him with perdition 
                if he did not bear his command to the Count of Toulouse.`,
            location: {
                center: [35.6242053, 36.9602315],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'marah',
            alignment: 'left',
            hidden: false,
            title: 'Marah',
            description: `
                The location of the 
                <a href="https://en.wikipedia.org/wiki/Siege_of_Ma%27arra">
                Siege of Ma'arra
                </a>.`,
            location: {
                center: [36.6788323, 35.6483845],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'emmaus',
            alignment: 'right',
            hidden: false,
            title: 'Emmaus',
            description: `
                After the Siege of Ma'arra, the army led by Godfrey of Bouillon 
                and the Count of Toulouse was met by a deputation of Christians 
                from Bethlehem 'praying for immediate aid against the oppression 
                of the infidels'.`,
            location: {
                center: [34.9891175, 31.8388193],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'addMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'interlude-2',
            alignment: 'center',
            hidden: false,
            description: `
                After a final battle with the Turks, 
                the Crusaders took Jerusalem and thus ended the First Crusade.
                <br><br>
                Scroll down to see all the locations that appear in this story.`,
            location: {
                center: [34.9891175, 31.8388193],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'removeMarker',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'appendix',
            alignment: 'center',
            hidden: true,
            title: 'Appendix',
            location: {
                center: [27.9891175, 40.8388193],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'addMarker',
            onChapterEnter: [{layer: 'crusades-layer', opacity: 1}],
            onChapterExit: []
        }
    ]
};
