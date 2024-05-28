(async function() {
    function delay(){
        return new Promise(() => {});
    }
    function delaym(milliseconds){
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
    $("#btn_start_now").click()

    var input = document.getElementsByClassName("mg-10 user_ans answer-input");
    var inputs = [];

    for (let i = 0; i < input.length; i++) {
        inputs.push(input[i].attributes.word_id.nodeValue);
    }

    console.log(inputs);

    let url = "https://vocabsize.xeersoft.co.th/vocab-test/save";
    let payload = {
        mode: "basic",
        vocabs: [
            {
                test_word_id: "36127",
                tst_vocab_status: "0",
            },
        ],
        special_key: "346162",
        usage_time: "16",
        assignment_id: "346162",
        crs_id: "22495",
        cdad_id: "25",
        cl_id: "",
        cldd_id: "",
    };

    $(".btn-outline-unselected").click();

    let transformedVocab = [];
    for (let j = 0; j < inputs.length; j++) {
        console.log({ test_word_id: inputs[j], tst_vocab_status: "1" });
        transformedVocab.push({ test_word_id: inputs[j], tst_vocab_status: "1" });
    }
    payload.vocabs = transformedVocab;

    console.log(window.location.pathname)

    payload.special_key = $("#special_key").val()
    payload.assignment_id = $("#assignment_id").val()

    let rantime = Math.floor(60 * (Math.random() *  14+19))
    payload.usage_time = rantime
    try { document.querySelector("#practice_usage_time").value = rantime; } catch(e) {}
    try { document.querySelector("#checklist_usage_time").value = rantime; } catch(e) {}

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content'),
            "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(payload),
    });
    delay();
    $(".footer .container-fluid .row .col-6 .btn_save").click();
    $('#btn_skip button').click();
    try {$('.desktop-screen div').filter(function() {var style = $(this).attr('style');return style && style.includes('background:') && !style.includes('background-color:');})[0].click();} catch (error) {console.error(error);}    try {$('img').filter(function() {var src = $(this).attr('src');return src === "https://vocabsize.xeersoft.co.th/assets/images/my_vocab_assign.png";})[0].click()} catch {}
    delaym(2000);
    if (window.location.pathname.includes('basic') || window.location.pathname.includes('practice') || window.location.pathname.includes('checklist')) {
        if (window.location.pathname.includes('basic')) {
            window.location.replace("https://vocabsize.xeersoft.co.th/dashboard");
        } else {
            if ('referrer' in document) {
                delay();
                window.location = document.referrer;
            } else {
                window.history.back();
            }
        }
    }
})();
