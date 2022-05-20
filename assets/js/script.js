// search button event
$('#submit-prompt-btn').click(function(e) {
    if ($('#user-prompt').val()) {
        e.preventDefault()
        console.log('submit button clicked')
        outputField.text('')
        $('#user-prompt').val('') //clears search field
    }
})