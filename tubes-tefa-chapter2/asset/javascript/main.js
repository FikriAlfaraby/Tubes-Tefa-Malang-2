let current_fs, next_fs, previous_fs;
let left, opacity, scale;
let animating;
const validations = [];
$(".next").click(function () {
  const input = $('#step1 input ,#step1 textarea')
  .attr('required',true).map(function(i, requiredField){
    return requiredField.checkValidity();
  })
  for (let i = 0; i < 9; i++) {validations[i] = Object.values(input)[i]};
  const allAreTrue = (arr) => arr.every(element => element === true);
  if (allAreTrue(validations)) {
    $(".fs-hint").html("")
    if (animating) return false;
      animating = true;
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      next_fs.show();
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now) {
            scale = 1 - (1 - now) * 0.2;
            left = now * 50 + "%";
            opacity = 1 - now;
            current_fs.css({
              transform: "scale(" + scale + ")",
              position: "absolute"
            });
            next_fs.css({ left: left, opacity: opacity });
          },
          duration: 800,
          complete: function () {
            current_fs.hide();
            animating = false;
          },
          easing: "easeInOutBack"
        }
      );
  } else if(validations[2] != true) {
    alert("Nomor telephone tidak valid ")
    $(".fs-hint").html("*Gunakan angka 0 dan 8 pada 2 digit awal")
  } else if(validations[4] != true) {
    alert("Email tidak valid ")
    $(".fs-hint").html("*Isi email anda dengan benar")
  }  else if(validations[6] != true) {
    alert("Lama Pengalaman tidak valid ")
    $(".fs-hint").html("*Pengalaman anda tidak sesuai recruitment (minimal 5 tahun)")
  } else {
    alert("Isi formulir sampai selesai")
    $(".fs-hint").html("*terdapat input form yang tidak terisi")
  }
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  previous_fs.show();
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now) {
        scale = 0.8 + (1 - now) * 0.2;
        left = (1 - now) * 50 + "%";
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity
        });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      easing: "easeInOutBack"
    }
  );
});
$(".submit").click(function () {
  if (confirm("Apakah data yang diinputkan sudah benar?") == true) {
   $("#popup").addClass("open-popup");
   $("#pesan-popup").html(`Terimakasih kepada ${$("#nama").val()} 
   telah mendaftar ke Perusahaan PT. Telkom Indonesia, untuk informasi lebih lanjut kami akan
    kirimkan ke alamat email ${$("#email").val()} / ke nomer ${$("#telephone").val()} yang telah anda catumkan `);
   $("#blur").addClass("active-blur")
  }
});
$(".close-popup").click(function () {
   location.reload();
});

function hanyaAngka(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false
    return true;
}
function validasiSizePDF(input) {
  const fileSize = input.files[0].size;;
  var ekstensiPdf = /(\.pdf)$/i;
  if (!ekstensiPdf.exec($("#cv").val())) {
    alert('Silakan upload file dengan ekstensi .pdf');
    $("#cv").val('');
  } else if (fileSize> 500000) {
    alert('File lebih dari 500kb');
    $("#cv").val('');
  }
}
function validasiEkstensiImg(){
    var inputFile = document.getElementById('fotoDiri');
    var ekstensiOk = /(\.jpg|\.jpeg|\.png)$/i;
    if(!ekstensiOk.exec($("#fotoDiri").val())){
        alert('Silakan upload file dengan ekstensi .jpeg/.jpg/.png');
        $("#fotoDiri").val('');
    }else{
        // Preview gambar
        if (inputFile.files && inputFile.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('preview').innerHTML = '<img src="'+e.target.result+'" style="height:200px"/>';
            };
            reader.readAsDataURL(inputFile.files[0]);
        }
    }
}

// Library Signature
var wrapper = document.getElementById("signature-pad");
var clearButton = wrapper.querySelector("[data-action=clear]");
var canvas = wrapper.querySelector("canvas");
var el_note = document.getElementById("note");
var signaturePad;
signaturePad = new SignaturePad(canvas);
clearButton.addEventListener("click", function () {
   document.getElementById("note").innerHTML="Silahkan Tanda Tangan Disini..";
   signaturePad.clear();
});
function note_function(){
   document.getElementById("note").innerHTML="";
}