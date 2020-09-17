function saywelcome() {
    alert("Welcome!")
};

function onmousedown_event() {
    alert("onmousedown 실행!");
};

function onmouseup_event() {
    alert("onmouseup 실행!");
};

function ondblclick_event() {
    alert("Go Kobalja's Blog Page!");
    location.href = 'https://kobalja2020.tistory.com/category/IT/JavaScript';
};


function view(btn_value) {
    if (btn_value == "Show") {
        document.hide_and_show_form.sss.value = "Hide";
        document.getElementById('display_btn').style.display = 'block';

    } else {
        document.hide_and_show_form.sss.value = "Show";
        document.getElementById('display_btn').style.display = 'none';
    }
};