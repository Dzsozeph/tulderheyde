

function showGallery() {
	var galleryBackground = document.querySelector('.gallery');
    galleryBackground.style.display = 'block';
    var selectBox = document.getElementById("menu1");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    
    var galleryContainer = document.getElementById("gallery");
    galleryContainer.innerHTML = ""; // Ürítsük ki a galéria tartalmát

    if (selectedValue === "opcio1") {
		
        // Betöltjük a "summer" galériát
        var imagesSummer = [
            
			"IMG_20240225_140719.jpg",
			"IMG_20240128_154118.jpg",
			"IMG_20240225_140153.jpg",
			"IMG_20240410_200013.jpg",
			"IMG_20240410_200040.jpg",
			"IMG_20240407_202527.jpg",
			"IMG_20240413_193404.jpg",
			"IMG_20240225_140221.jpg",
			"IMG_20240128_170655.jpg",
			"IMG_20240416_201022.jpg",
			"IMG_20240224_140143.jpg",
			
			
            // Add more image links as needed
        ];
     
        imagesSummer.forEach(function(image) {
  var imgElement = document.createElement("img");
            imgElement.src = image;
			imgElement.addEventListener("click", function() {
                window.open(image, "_blank");
            });
            galleryContainer.appendChild(imgElement);
        });
    
}
	
	else if (selectedValue === "opcio2") {
        // Betöltjük a "winter" galériát
        var imagesWinter = [
            "IMG-20240120-WA0022.jpg",
            "IMG-20240120-WA0016.jpg",
			"IMG-20240120-WA0014.jpg",
			"IMG-20240120-WA0010.jpg",
			"IMG-20240120-WA0004.jpg",
			"IMG_20240120_153544.jpg",
			"IMG_20240120_153954.jpg",
			
			
            // Add more image links as needed
        ];

        imagesWinter.forEach(function(image) {
            var imgElement = document.createElement("img");
        imgElement.src = image;
		imgElement.addEventListener("click", function() {
            window.open(image, "_blank");
	});
            galleryContainer.appendChild(imgElement);
    });
    }
	
	else if (selectedValue === "opcio3") {
        // Betöltjük a "winter" galériát
        var imagesWinter = [
            "IMG_20231217_211512.jpg",
            "IMG_20231217_173127.jpg",
			"IMG_20240116_213655.jpg",
			"IMG_20240116_214845.jpg",
			"IMG_20231217_172247.jpg",
			"IMG_20240212_183338.jpg",
			"IMG_20240306_192602.jpg",
			"IMG_20231212_040716.jpg",
			
			
            // Add more image links as needed
        ];

        imagesWinter.forEach(function(image) {
            var imgElement = document.createElement("img");
        imgElement.src = image;
		imgElement.addEventListener("click", function() {
            window.open(image, "_blank");
	});
            galleryContainer.appendChild(imgElement);
    });
    }

	else if (selectedValue === "opcio4") {
        // Betöltjük a "winter" galériát
        var imagesWinter = [
            "DJI_0625.jpg",
            "DJI_0635.jpg",
			"DJI_0676.jpg",
			"DJI_0679.jpg",
			"DJI_0641.jpg",
			"DJI_0609.jpg",
			
			
			
            // Add more image links as needed
        ];

        imagesWinter.forEach(function(image) {
            var imgElement = document.createElement("img");
        imgElement.src = image;
		imgElement.addEventListener("click", function() {
            window.open(image, "_blank");
	});
            galleryContainer.appendChild(imgElement);
    });
    }
	
	
    galleryContainer.style.display = "block"; // Megjelenítjük a galériát

}

//back to home



//video
function showVideo() {
    var menu = document.getElementById("menu2");
    var videoPlayer = document.getElementById("videoPlayer");

    if (menu.value === "opcio2") {
        // Ha a "Timelapses" opciót választották, megjelenítjük a videólejátszót
        videoPlayer.style.display = "block";
        // Dinamikusan hozzáadjuk a videót a videólejátszóhoz
        videoPlayer.innerHTML = '<video controls id="timelapseVideo"><source src="VID_20231212_203300.mp4" type="video/mp4">A böngésződ nem támogatja a videó lejátszást.</video>';
    } else {
        // Ha más opciót választottak, elrejtjük a videólejátszót
        videoPlayer.style.display = "none";
        videoPlayer.innerHTML = ''; // Töröljük a tartalmat
    }
	function playVideo() {
            var videoContainer = document.getElementById('video-container');
            videoContainer.style.display = 'block';

            var menuContainer = document.getElementById('menu-container3');
            menuContainer.style.display = 'none';
        }
}

//background

 const images = [
        'url("IMG-20240120-WA0014.jpg")',
        'url("IMG_20231217_172309.jpg")',
        'url("IMG_20240107_163022.jpg")',
	    'url("IMG_20240120_174212.jpg")',
    ];

    let currentIndex = 0;

