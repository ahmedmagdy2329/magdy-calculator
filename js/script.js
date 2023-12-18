const switchers = [...document.querySelectorAll(".switcher")];

switchers.forEach((item) => {
  item.addEventListener("click", function () {
    switchers.forEach((item) =>
      item.parentElement.classList.remove("is-active")
    );
    this.parentElement.classList.add("is-active");
  });
});

function calculateDuration() {
  const inputDateTime = document.getElementById("datetime").value;
  const selectedDateTime = new Date(inputDateTime);
  const currentDateTime = new Date();
  const durationMilliseconds = currentDateTime - selectedDateTime;
  const durationDays = Math.floor(durationMilliseconds / (1000 * 60 * 60 * 24));
  const durationHours = Math.floor(
    (durationMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  if (inputDateTime) {
    if (selectedDateTime <= currentDateTime) {
      document.getElementById("result").innerHTML =
        " كده الحاله قعدت : " +
        durationDays +
        " أيام و " +
        durationHours +
        " ساعات";
      document.getElementById("result").style.color = "red";
    } else {
      Swal.fire({
        title: "<h5>مدخل يوم لسه معشناهوش <br>  ده انت جاى تهزر بقا؟</h5>",

        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> حاضر
          `,
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
    }
  } else {
    Swal.fire({
      title: "<h5> دخل الوقت والتاريخ ي حبيبي</h5>",

      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> حاضر
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
    });
  }
}

function multiplyAndAdd() {
  let plastick = document.getElementById("plastick").value;

  let userNumber = parseFloat(plastick);

  if (plastick) {
    if (isNaN(plastick)) {
      Swal.fire({
        title: "<h5> دخل الرقم اللى عايز تخصمه  ي حبيبي</h5>",

        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> حاضر
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
    } else {
      let multipliedResult = userNumber * 0.14;

      let result = userNumber + multipliedResult;

      document.getElementById("result-plastick").innerHTML =
        " الخصم اللى هيتعمل :  " + Math.floor(result) + "جنيه";
      document.getElementById("result-plastick").style.color = "red";
    }
  } else {
    Swal.fire({
      title: "<h5> دخل الرقم اللى عايز تخصمه  ي حبيبي</h5>",

      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> حاضر
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
    });
  }
}
// loader
