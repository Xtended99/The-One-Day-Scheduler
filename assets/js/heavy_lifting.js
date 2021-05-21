
/* *
 * The entire UI is derived entirely from JQuery.
 * If you look at the HTML all you will see is a minimal amount of HTML
 * All there is skeleton code for an HTML page.
 * The UI is dynamically built when the build_ui() function executes.
 * The UI is also primed with the last edits entered in to the planner.
 * If you were to reload or close the browser you will see the data for each time
 * will persist.
 *
 * Link to access the "The One Day Scheduler" https://xtended99.github.io/The-One-Day-Scheduler
 * Link to access the project page for "The One Day Scheduler"  https://github.com/Xtended99/The-One-Day-Scheduler
 *
 * Features included
 *
 *     Tab order - Tab order will take you from text field to button in succession
 *     throughout each time slot.
 *
 *     Initial verbage is present so that you know if data has not been entered for 
 *     time slot.
 *
 *     Time slots are differentiated by color code to represent paat, present and future states.
 *     Green - represents future dates from the present time the calendar is viewed.
 *     Red - is the present hour
 *     Grey - is / are time slots that have elapsed from the present time in Red.
 *
 *     The text field is expandable and contains scroll bars
 *
 *     Text fields will only blank the filed if the non standard messgage
 *        "Please enter appointment details" is not visible.
 *
 *     The date is shown at the top of each page
 *
 *     The hour the time slot belongs to is clearly marked on the very left hand side
 *
 *     The UI will shrink to accommodate smaller screen sizes
 *
 *     Console messages have been left in place to demonstrate how the application
 *     works at different stages.
 *
 *     And you verify the storage persistence when you open the application tab under
 *     developer tools
 *
 *    Text fields and the text will denote potential change is possible 
 *
 *    Buttons will denote a change in appearance when hovered over to show visual awareness.
 *
 *    Program operation:
 *
 *      Basically all you have to do is click on the time slot desired 
 *      Enter the text as you wish an to commit the text just press the commit but on the right,
 *
 *   TODOS
 *
 *      Move forward and backwards by day, month or year
 *      Roll back to the prior text if the user would want to revert the previous
 *      information for a time slot or day.
 *
 * */

// Experimental code


// $(document).ready(function()
//    {
//     $("button").click(function()
//        {
//         var html = '<ul>';
//         for (var i = 0; i < 9; i++) {
//             html += '<li>Inser Day Line Items</li>';
//         }
//         html += '</ul>';
//         $('#bd').append(html);
//        }
//      );
//    }
// );


// Setting up global variables

i = 0;

let today_time_date = "<p id=p2> " + moment().format("dddd MMMM Do, YYYY") + "</p>"
console.log(today_time_date)

let period_of_day = moment().format( "A" );
let hour_of_the_day = Number( moment().format( "h" ), 10 );

let color_line = "";
let am_color_line = "";
let pm_color_line = "";
let z = 0;

//hour_of_the_day = 12;
// period_of_day = "PM";

// The if directly below is so that 12 is countewd as zero

let external_text_obj = "";

if ( hour_of_the_day === 12 )
  {
   hour_of_the_day = 0;
  }

// This is the work hourse fucntion for this tool. It is the function that builds 
// The entire from the ground up

function build_ui ()
   {
    $("#bd").append('<h1 id=\'H1\'>Work Day Scheduler</h1>');
    $("#bd").append('<p id=\'p1\'>A simple calendar app for scheduling your work day</p>');

    $("#bd").append( today_time_date );

    $("#bd").append('<ul id=\'MainUL\'></ul>');
               for ( i = 9; i <= 11; i++ )
                  {
                   if ( hour_of_the_day === i )
                     {
                      am_color_line = "red";
                     }
                    else if( hour_of_the_day > i )
                     {
                      am_color_line = "grey";
                     }
                    else if( hour_of_the_day < i )
                     {
                      am_color_line = "green";
                     }
                    else
                     {
                      console.log( "what time is it" )
                     }

                   if (period_of_day === "PM" )
                     {
                      am_color_line = "grey";
                     }

                   console.log( " This is = " + am_color_line + ", " + i + ", hour_of_the_day = " + hour_of_the_day + ", AM" );

                   liid ="<li id=liid_" + i + " " + "class=" + am_color_line + ">" + i + " AM<textarea tabindex=" + ++z + ">Please enter appointment details</textarea><button tabindex=" + ( ++z ) + " id=bt_" + i + ">Commit</button></li>"
                   $("#MainUL").append( liid );
                  }

               for ( i = 0; i <= 5; i++ )
                  {

                   if ( hour_of_the_day === i )
                     {
                      pm_color_line = "red";
                     }
                    else if( hour_of_the_day > i )
                     {
                      pm_color_line = "grey";
                     }
                    else if( hour_of_the_day < i )
                     {
                      pm_color_line = "green";
                     }
                    else
                     {
                      console.log( "what time is it" )
                     }

                   if (period_of_day === "AM" )
                     {
                      pm_color_line = "green";
                     }

                   console.log( " This is = " + pm_color_line + ", " + i + ", hour_of_the_day = " + hour_of_the_day + ", PM" );

                   if ( i === 0 )
                     {
                      liid ="<li id=liid_" + ( i + 12 ) + " " + "class=" + pm_color_line + ">" + ( i + 12 ) + " PM<textarea tabindex=" + ( ++z ) + ">Please enter appointment details</textarea><button tabindex=" + ( ++z ) + " id=bt_" + ( i + 12 ) + ">Commit</button></li>"
                     }
                   else
                    {
                     liid ="<li id=liid_" + i + " " + "class=" + pm_color_line + ">" + i + " PM<textarea tabindex=" + ( ++z ) + ">Please enter appointment details</textarea><button tabindex=" + ( ++z ) + " id=bt_" + i + ">Commit</button></li>"
                    }

                   $("#MainUL").append( liid );

                  }
   }


// select_button is the function that makes the distinction on  which button has 
// pressed

function select_button ( btn_clicked )
   {
    console.log( btn_clicked.id );
    console.log( "Bt St = "+ btn_clicked.id.split( "_" )[ 1 ] );
    console.log( "Bt N = "+ Number( btn_clicked.id.split( "_" )[ 1 ] ) );
    // console.log ( $("ul #liid_9 textarea").val() );
    // console.log ( document.getElementsByTagName( 'textarea')[ 0 ].value );

    selected_text_area = "ul #liid_" + Number( btn_clicked.id.split( "_" )[ 1 ] ) + " textarea";
    console.log ( $( selected_text_area ).val() );

    if ( ( $( selected_text_area ).val() !== "Please enter appointment details" ) && ( $( selected_text_area ).val() !== "" ) )
      {
       localStorage.setItem( btn_clicked.id , $( selected_text_area ).val() );
      }

   }


// text_area_clear function is responsible of clearing the default message if 
// the time slot has never been used before.

function text_area_clear( clear_me )
   {
    console.log( $( clear_me ).parent().attr("id") );
    console.log( "Te N = "+ Number( $( clear_me ).parent().attr("id").split( "_" )[ 1 ] ) );

    selected_text_area = "ul #liid_" + Number( $( clear_me ).parent().attr("id").split( "_" )[ 1 ] ) + " textarea";
    console.log ( $( selected_text_area ).val() );


    if ( ( $( selected_text_area ).val() === "" ) || ( $( selected_text_area ).val() === "Please enter appointment details" ) )
      {
       console.log ( $( selected_text_area ).val( "" ) );
      }

   }


// retrieve_local pre populated time slots with committed data points.

function retrieve_local_storage()
   {
    console.log( ul_li_ch = $("ul li textarea").not( "button" ) );

    for ( j = 9; j <= 11; j++ )
       {
        console.log( localStorage.getItem( "bt_" + j ) );
        which_text_area = "ul #liid_" + j + " textarea"

        if ( localStorage.getItem( "bt_" + j ) !== null )
          {
           console.log( $( which_text_area ).val( localStorage.getItem( "bt_" + j ) ) );
          }
       }

    console.log( localStorage.getItem( "bt_" + 12 ) );
    which_text_area = "ul #liid_" + 12 + " textarea"

    if ( localStorage.getItem( "bt_" + 12 ) !== null )
      {
       console.log( $( which_text_area ).val( localStorage.getItem( "bt_" + 12 ) ) );
      }

    for ( m = 1; m <= 5 ; m++ )
       {
        console.log( localStorage.getItem( "bt_" + m ) );
        which_text_area = "ul #liid_" + m + " textarea"

        if ( localStorage.getItem( "bt_" + m ) !== null )
          {
           console.log( $( which_text_area ).val( localStorage.getItem( "bt_" + m ) ) );
          }
       }
   }

// Registers button clicks and text field to click actions

$(document).on("click", "button", function () { select_button( this ) } );
$(document).on("click", "textarea", function () { text_area_clear( this ) } );


// The whole starts with build_ui
// Prepolation of the fileds with pre existing data point is thew responsibility 
// retireve_local_storage

build_ui();
retrieve_local_storage();

