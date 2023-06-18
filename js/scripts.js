$(function() {
    // --------- Initializing Popovers ----------
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    // -------- Future Modal Code ---------
    $('#dealButton').click(function(){
        $('#dealModal').modal('show');
    });
    $('#eventButton').click(function(){
        $('#eventModal').modal('show');
    });

});