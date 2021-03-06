// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')
require("packs/semantic")


import JQuery from 'jquery';
window.$ = window.jQuery = JQuery;

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// loads jquery
//= require jquery
//= require jquery_ujs

// Loads all Semantic javascripts
//= require semantic-ui

function scroll_bottom() {
    if ($('#messages').length > 0) {
        $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
}

function submit_message() {
    $('input[type=text]').on('keydown', function(e) {
        if (e.which == 13) {
            // e.preventDefault();
            $('button').click();
            e.target.value = "";
        }
    });
};



$(document).on('turbolinks:load', function(){
    $('.ui.dropdown').dropdown("clear");
    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });
    submit_message();
    scroll_bottom();
})
