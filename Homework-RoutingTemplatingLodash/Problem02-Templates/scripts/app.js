var people = {
    people: [
        {
            name: "Garry Finch",
            job: 'Front End Technical Lead',
            website: 'http://website.com'
        },
        {
            name: "Bob McFray",
            job: 'Photographer',
            website: 'http://goo.gle'
        },
        {
            name: "Jenny O'Sullivan",
            job: 'LEGO Geek',
            website: 'http://stackoverflow.com'
        },
        {
            name: "Mark Zuckerberg",
            job: 'Internet entrepreneur',
            website: 'https://www.facebook.com'
        },
        {
            name: "Steve Jobs",
            job: 'Entrepreneur',
            website: 'http://www.apple.com/'
        }]
};

$.get('templates/table.html', function (template) {
    var rendered = Mustache.render(template, people);
    $('#content').html(rendered);
});