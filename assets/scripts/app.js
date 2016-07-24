$(document).ready(function() {
    $.ajax({
        url: 'http://galvanize-student-apis.herokuapp.com/gpersonnel/roles',
        error: function(err) {
            console.error(err)
        },
        method: 'GET',
        success: function(data) {
            var images = []
            for (var i = 0; i < data.length; i++) {
                var option = data[i].title
                images.push(data[i].img)
                $("#role").append("<option></option>")
                $("option:nth-child(" + (i + 1) + ")").attr("id", +i + "")
                $("option:nth-child(" + (i + 1) + ")").text("" + data[i].title + "")
            }
            $("select").change(function() {
                var image = $("select option:selected").attr("id")
                $("img").attr("src", "" + images[image] + "")
            })

            $("button").on('click', function(event) {
                event.preventDefault();
                var formData = {
                    firstName: $('#first-name').val(),
                    lastName: $('#last-name').val(),
                    role: $("#role").val()
                }
                $.ajax({
                    type: "POST",
                    url: "http://galvanize-student-apis.herokuapp.com/gpersonnel/users",
                    data: formData,
                    error: function () {
                      $(".save-status").text("Not quite.")
                    },
                    success: function() {
                        $(".save-status").text("Success!")
                    }
                })
            })

        }
    })
})
