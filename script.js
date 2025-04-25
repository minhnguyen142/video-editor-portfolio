window.onbeforeunload = function () 
{
    window.scrollTo(0, 0);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => 
{
    anchor.addEventListener('click', function (e) 
    {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView
        (
            {
            behavior: 'smooth'
            }
        );
    });
});