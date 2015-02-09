   $(document).ready(function(){
        $('#add-profile').on('submit', function(e){
          e.preventDefault();

        var url = 'https://api.github.com/users/' + $('#username').val();
        
        var userData = 
          $.get(url, function(user) { 

            var template = $('#profile-template').html();
            $('.profile-container').append(Mustache.render(template, user));
          
          // error message when unknown user
          }).fail(function(){
            alert('Could not find this user.');
          // clears the input
          }).always(function(){
            $('#username').val('');
          })
        })
      })