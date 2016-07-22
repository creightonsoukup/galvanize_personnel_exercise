$(document).ready(function() {
    $.ajax({
        url: 'http://galvanize-student-apis.herokuapp.com/gpersonnel/roles',
        error: function(err) {
            console.error(err)
        },
        method: 'GET',
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                option = data[i].title
                $("#role").append("<option></option>")
                $("option:nth-child(" + (i + 1) + ")").attr("id", "option" + i + "")
                $("option:nth-child(" + (i + 1) + ")").text("" + data[i].title + "")
            }
        }
    })
})
