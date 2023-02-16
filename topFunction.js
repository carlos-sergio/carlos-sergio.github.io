function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


const link = document.querySelector('#link');
const loader = document.querySelector('#loader2');

link.addEventListener('click', function(event) {
   event.preventDefault();
   loader.style.display = 'block';
  $('#link').click(function(event) {
    event.preventDefault();
    $('#loader').show();
 
    $.ajax({
       type: 'GET',
       url: 'https://jsonplaceholder.typicode.com/posts',
       success: function(data) {
          $('#loader').hide();
          console.log(data);
       }
    });
 });
});