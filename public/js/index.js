(function ($)
{
  $("#send").click(function ()
  {
    if ($("#receiver").hasClass("border_b")) {
      $("#receiver").removeClass("border_b");
      $("#send").addClass("border_b");
      $("#box-send").addClass("animate__animated animate__fadeIn");
      $("#box-send").css("display", 'block');
      $("#box-receiver").css("display", 'none');
    }
  });
  $("#receiver").click(function ()
  {
    if ($("#send").hasClass("border_b")) {
      $("#send").removeClass("border_b");
      $("#receiver").addClass("border_b");
      $("#box-receiver").addClass("animate__animated animate__fadeIn");
      $("#box-receiver").css("display", 'block');
      $("#box-send").css("display", 'none');
    }
  });
})(jQuery);

const form = document.querySelector('#form');

form.addEventListener('submit', (e) =>
{
  e.preventDefault();
  const formData = new FormData(form);

  fetch('/mail', {
    method: 'POST',
    body: JSON.stringify({
      in1: formData.get('in1'),
      in2: formData.get('in2'),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch((err) =>
  {
    console.log(err);
  });
});

