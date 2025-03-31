let toggleButtonState = false; // meaning the button state is not pressed
    function hamburgerClickEvent(){
        if (!toggleButtonState){
            $( ".nav-abs-phone" ).css('display', 'block');
            $( ".nav-links-phone" ).css('display', 'block');
            toggleButtonState = true;
        }
        else{
            $( ".nav-abs-phone" ).css('display', 'none');
            $( ".nav-links-phone" ).css('display', 'none');
            toggleButtonState = false;
        }        
    }

    function imageChangeSize(){
        wind_size_x = ($(window).width());
        let value = 0;
        if (wind_size_x>=1440){
            value = 400;
        }
        else if (wind_size_x < 1440 && wind_size_x > 770){
            value = (wind_size_x * 400 / 1440); // The reference is 1440px, from 1440px to 770px the size of image diminishes starting from 400px (original size)
        }
        else if (wind_size_x<=770){
            value = (wind_size_x * 380 / 770); // The new reference is 770px, the image starts at 380px and then diminishes again
        }
        $(".main-image-div").css('width', value + "px"); 
        $(".main-image-div").css('height', value + "px"); 
        $(".main-image-div").css('background-size', value + "px");
    }

    function screenresize() {
        if (window.matchMedia("(min-width: 990px)").matches) {
            /* La largeur minimum de l'affichage est 990px inclus */
            $( ".nav-abs-phone" ).css('display', 'none');
            $( ".nav-links-phone" ).css('display', 'none');
            toggleButtonState = false;
        } else {
            /* L'affichage est inférieur à 990px de large */
        }

        // The size of the image diminishes or increases
        imageChangeSize();

        // The size of the items inside the hobbie grid diminishes or increases
        setSizeHobbiesGrid();
    }

    // Each time the screen width is changed:
    window.addEventListener('resize', screenresize, true);

    // To move the background image
    $(document).ready(function() {
        $("body").mousemove(function(event){            
            let posX = event.pageX - $(this).offset().left;
            let posY = event.pageY - $(this).offset().top;
            posX = posX / 100;
            posY = posY / 100;
            let value = 'calc(50% + '+posX+'px) calc(50% + '+posY+'px)';
            $(".main-image-div").css('background-position', value); 
        });
    });

    function setSizeHobbiesGrid(){ /*Change the width and height of the grid items of hobbies section*/
        let hobbiesGrid_width = $(".grid-main-hobbies").width();
        let hobbiesGrid_height = $(".grid-main-hobbies").height();
        let gapX = $(".grid-main-hobbies").css("row-gap").split("px")[0];
        console.log("gap for rows:", gapX);
        let newWidth = (hobbiesGrid_width - 2 * parseInt(gapX)) / 3; // There are 3 elements each row.
        $(".flip-card").css("width", newWidth + "px");
        $(".flip-card").css("height", newWidth + "px");
    }
    
    function main(){ // called when body is loaded
        /*First thing to do: changing the size of the main image corresponding to current width: */
        imageChangeSize();

        //Below is to load a random position for the image on screen
        value = 'calc(50% + 1px) calc(50% + 1px)';
        $(".main-image-div").css('background-position', value); 

        setSizeHobbiesGrid();

        //change footer year in case:
        document.getElementById("footer-current-year").innerHTML = new Date().getFullYear();
    }